import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Type for contact form data
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Rate limiting map (in production, use a database or Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 emails per hour
  }

  limit.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-client-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json() as ContactFormData;

    // Validate required fields
    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!body.message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Validate message length (prevent spam)
    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long (max 5000 characters)' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Send email using a service like SendGrid, Mailgun, etc.
    // 2. Store in a database
    // 3. Add authentication/CSRF protection
    
    // For now, log the message (replace with actual email sending)
    console.log('[v0] Contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject || 'No subject',
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (e.g., SendGrid, Mailgun, Resend)
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'noreply@yoursite.com',
    //   to: 'your-email@example.com',
    //   replyTo: body.email,
    //   subject: `New Contact Form: ${body.subject || 'No Subject'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Subject:</strong> ${body.subject || 'No subject'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[v0] Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
