'use client';

import { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const MAX_MESSAGE_LENGTH = 1000;

  const fieldErrors: Record<string, string> = {};
  if (touched.name && !formData.name.trim()) fieldErrors.name = 'Name is required';
  if (touched.email && !formData.email.trim()) fieldErrors.email = 'Email is required';
  else if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    fieldErrors.email = 'Please enter a valid email';
  if (touched.message && !formData.message.trim()) fieldErrors.message = 'Message is required';

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setErrorMessage('Please fill in all required fields.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage('Please enter a valid email address.');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

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

      console.log('[Contact] Message sent successfully');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});

      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 300);
      }, 2000);
    } catch (error) {
      console.error('[Contact] Error:', error);
      setErrorMessage('An error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200/60 bg-white shadow-2xl dark:border-slate-800/50 dark:bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/60 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/95">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Let&apos;s build something amazing together
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5 p-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 dark:border-green-900/30 dark:bg-green-500/10">
                    <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      Thank you! I&apos;ll get back to you soon.
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
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white focus:outline-none focus:ring-2 dark:bg-slate-950/50 dark:text-white dark:focus:bg-slate-900/80 ${
                      fieldErrors.name
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-500/20 dark:border-red-500'
                        : 'border-slate-200 focus:border-blue-400 focus:ring-blue-500/20 dark:border-slate-700 dark:focus:border-blue-500'
                    }`}
                    placeholder="Your Name"
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                  />
                  {fieldErrors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{fieldErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white focus:outline-none focus:ring-2 dark:bg-slate-950/50 dark:text-white dark:focus:bg-slate-900/80 ${
                      fieldErrors.email
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-500/20 dark:border-red-500'
                        : 'border-slate-200 focus:border-blue-400 focus:ring-blue-500/20 dark:border-slate-700 dark:focus:border-blue-500'
                    }`}
                    placeholder="your.email@example.com"
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                  />
                  {fieldErrors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{fieldErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Subject <span className="text-slate-400 dark:text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900/80"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    maxLength={MAX_MESSAGE_LENGTH}
                    className={`w-full resize-none rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white focus:outline-none focus:ring-2 dark:bg-slate-950/50 dark:text-white dark:focus:bg-slate-900/80 ${
                      fieldErrors.message
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-500/20 dark:border-red-500'
                        : 'border-slate-200 focus:border-blue-400 focus:ring-blue-500/20 dark:border-slate-700 dark:focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project..."
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    {fieldErrors.message ? (
                      <p className="text-xs text-red-500 dark:text-red-400">{fieldErrors.message}</p>
                    ) : (
                      <span />
                    )}
                    <p
                      className={`text-xs ${
                        formData.message.length > MAX_MESSAGE_LENGTH * 0.9
                          ? 'text-amber-500 dark:text-amber-400'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {formData.message.length}/{MAX_MESSAGE_LENGTH}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition-all disabled:cursor-not-allowed disabled:opacity-60 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/40 dark:from-blue-500 dark:to-blue-600 dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
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
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
