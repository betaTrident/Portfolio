'use client';

import { Mail, MapPin, Linkedin, Instagram, Facebook, Github, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

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
    <section id="contact" className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50 py-12 md:py-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
              Get In Touch
            </h2>
            <div className="mx-auto h-1 w-12 rounded-full bg-linear-to-r from-blue-500 to-purple-500"></div>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              Let's build something amazing together
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {/* Left Side - Contact Info & Socials */}
          <ScrollAnimation delay={0.2}>
            <div className="space-y-5">
              {/* Contact Cards */}
              <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:border-blue-500/30 dark:hover:shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-sm transition-transform group-hover:scale-110 dark:from-blue-500/20 dark:to-blue-600/20 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:colinakb24@gmail.com"
                      className="text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                    >
                      colinakb24@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur-sm transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:border-green-500/30 dark:hover:shadow-green-500/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-linear-to-br from-green-500 to-green-600 text-white shadow-sm transition-transform group-hover:scale-110 dark:from-green-500/20 dark:to-green-600/20 dark:text-green-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Mandaue City, Cebu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/50">
              <div className="flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200/60 bg-slate-50/80 text-slate-700 backdrop-blur-sm transition-all hover:scale-110 hover:border-transparent hover:text-white hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          </ScrollAnimation>

          {/* Right Side - Contact Form */}
          <ScrollAnimation delay={0.4}>
            <form 
              onSubmit={handleSubmit} 
              className="rounded-xl border border-slate-200/60 bg-white/80 p-4 backdrop-blur-sm sm:p-6 dark:border-slate-800/50 dark:bg-slate-900/50"
            >
            <div className="space-y-5">
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
                  className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
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
                  className="w-full rounded-lg border border-slate-200/60 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 backdrop-blur-sm transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700/50 dark:bg-slate-950/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900/80"
                  placeholder="Your Name"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border border-slate-200/60 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 backdrop-blur-sm transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700/50 dark:bg-slate-950/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900/80"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
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
                  className="w-full rounded-lg border border-slate-200/60 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 backdrop-blur-sm transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700/50 dark:bg-slate-950/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900/80"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-lg border border-slate-200/60 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 backdrop-blur-sm transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700/50 dark:bg-slate-950/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900/80"
                  placeholder="Tell me about your project..."
                  rows={4}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition-all disabled:cursor-not-allowed disabled:opacity-60 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/40 dark:from-blue-500 dark:to-blue-600 dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
