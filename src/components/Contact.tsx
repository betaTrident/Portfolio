'use client';

import { Mail, MapPin, Linkedin, Instagram, Facebook, Github, Send, Download, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Validate form on client side
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setErrorMessage('Please fill in all required fields.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage('Please enter a valid email address.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        setSubmitStatus('error');
        return;
      }

      console.log('[v0] Contact form submitted successfully');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('[v0] Contact form error:', error);
      setErrorMessage('An error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kent-colina/', label: 'LinkedIn', color: 'hover:bg-blue-500' },
    { icon: Github, href: 'https://github.com/betaTrident', label: 'GitHub', color: 'hover:bg-slate-800' },
    { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: 'https://www.facebook.com/kbcolina10', label: 'Facebook', color: 'hover:bg-blue-600' },
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              Let's Connect
            </h2>
            <div className="mx-auto h-1 w-16 bg-blue-500"></div>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="animate-fade-in animation-delay-200 space-y-4">
              <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/50 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-blue-500/50">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-lg transition-transform group-hover:scale-110 dark:from-blue-500/10 dark:to-blue-600/10 dark:text-blue-500 dark:shadow-none">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Email Address
                    </p>
                    <a
                      href="mailto:colinakb24@gmail.com"
                      className="text-lg font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    >
                      colinakb24@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/50 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-blue-500/50">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-3 text-white shadow-lg transition-transform group-hover:scale-110 dark:from-green-500/10 dark:to-green-600/10 dark:text-green-500 dark:shadow-none">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Based In
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      Mandaue City, Cebu, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in animation-delay-400 rounded-2xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex aspect-square items-center justify-center rounded-xl border border-blue-100 bg-slate-50 text-slate-700 shadow-md shadow-blue-100/50 transition-all hover:scale-110 hover:border-transparent hover:text-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:shadow-none ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="animate-fade-in animation-delay-600">
              <a
                href="/Colina-CV.pdf"
                download
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-blue-500 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-600/50 dark:from-blue-500 dark:to-blue-600 dark:shadow-none dark:hover:shadow-blue-500/20"
              >
                <Download size={20} />
                Download My Resume
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="animate-fade-in animation-delay-600 rounded-2xl border border-blue-100 bg-white p-8 shadow-xl shadow-blue-100/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          >
            <div className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 dark:border-green-900/30 dark:bg-green-500/10">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">
                    Thank you! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900/30 dark:bg-red-500/10">
                  <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                  <p className="text-sm font-medium text-red-700 dark:text-red-300">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </p>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-blue-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900"
                  placeholder="Your Name"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-blue-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Subject <span className="text-slate-400 dark:text-slate-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-blue-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-xl border border-blue-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900"
                  placeholder="Tell me about your project or inquiry..."
                  rows={5}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/50 transition-all disabled:cursor-not-allowed disabled:opacity-60 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-600/50 dark:from-blue-500 dark:to-blue-600 dark:shadow-none dark:hover:shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
