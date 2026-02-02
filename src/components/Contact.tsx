'use client';

import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@johndeveloper.com',
    href: 'mailto:hello@johndeveloper.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
    <section id="contact" className="bg-white py-20 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-20 bg-linear-to-r from-purple-600 to-pink-600"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-lg bg-linear-to-br from-purple-600 to-pink-600 p-3">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium text-slate-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-slate-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg bg-slate-100 p-3 transition-all hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-600 dark:bg-slate-700"
                      aria-label={social.label}
                    >
                      <Icon
                        className="text-slate-700 transition-colors group-hover:text-white dark:text-slate-300"
                        size={24}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
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
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
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
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
