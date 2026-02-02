'use client';

import { Mail, MapPin, Linkedin, Instagram, Facebook, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 dark:bg-slate-900 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-16 bg-slate-900 dark:bg-white"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="animate-fade-in space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-3 dark:bg-white">
                  <Mail className="text-white dark:text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:colinakb24@gmail.com"
                    className="text-lg font-medium text-slate-900 hover:underline dark:text-white"
                  >
                    colinakb24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-slate-900 p-3 dark:bg-white">
                  <MapPin className="text-white dark:text-slate-900" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Location
                  </p>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in animation-delay-200">
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/kent-colina/', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/betaTrident', label: 'GitHub' },
                  { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/', label: 'Instagram' },
                  { icon: Facebook, href: 'https://www.facebook.com/kbcolina10', label: 'Facebook' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-300 p-3 text-slate-700 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="animate-fade-in animation-delay-400 space-y-6 lg:col-span-3">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-white"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-xl dark:bg-white dark:text-slate-900"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
