'use client';

import { Mail, MapPin, Linkedin, Instagram, Facebook, Github, Send, Download } from 'lucide-react';
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

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kent-colina/', label: 'LinkedIn', color: 'hover:bg-blue-500' },
    { icon: Github, href: 'https://github.com/betaTrident', label: 'GitHub', color: 'hover:bg-slate-800' },
    { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Facebook, href: 'https://www.facebook.com/kbcolina10', label: 'Facebook', color: 'hover:bg-blue-600' },
  ];

  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-950 md:py-32">
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
              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Email Address
                    </p>
                    <a
                      href="mailto:colinakb24@gmail.com"
                      className="text-lg font-semibold text-slate-900 transition-colors hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    >
                      colinakb24@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500 transition-transform group-hover:scale-110">
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
            <div className="animate-fade-in animation-delay-400 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
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
                      className={`group flex aspect-square items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-all hover:scale-110 hover:border-transparent hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 ${social.color}`}
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
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-blue-500 bg-blue-500 px-6 py-4 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Download size={20} />
                Download My Resume
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="animate-fade-in animation-delay-600 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
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
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
