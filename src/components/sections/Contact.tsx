'use client';

import { Mail, MapPin, Clock, Send, Github, Linkedin, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import ContactModal from '@/components/common/ContactModal';
import Footer from '@/components/layout/Footer';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'colinakb24@gmail.com',
    href: 'mailto:colinakb24@gmail.com',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:border-blue-300 dark:hover:border-blue-700',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mandaue City, Cebu 🇵🇭',
    href: null,
    color: 'from-emerald-500 to-teal-600',
    hoverColor: 'hover:border-emerald-300 dark:hover:border-emerald-700',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    color: 'from-violet-500 to-purple-600',
    hoverColor: 'hover:border-violet-300 dark:hover:border-violet-700',
  },
];

const socials = [
  { icon: Github,    href: 'https://github.com/betaTrident',               label: 'GitHub',    color: 'hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/kent-colina/',      label: 'LinkedIn',  color: 'hover:bg-blue-600 hover:text-white' },
  { icon: Instagram, href: 'https://www.instagram.com/kiboooooy/',           label: 'Instagram', color: 'hover:bg-pink-500 hover:text-white' },
  { icon: Facebook,  href: 'https://www.facebook.com/kbcolina10',           label: 'Facebook',  color: 'hover:bg-blue-700 hover:text-white' },
];

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-between overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50 lg:min-h-screen dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:py-8">

        {/* ── 2-col layout on lg ─────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* LEFT — contact info */}
          <div className="space-y-8">
            <ScrollAnimation>
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
                Get In Touch
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-4xl xl:text-5xl">
                Let&apos;s Work{' '}
                <span className="text-blue-500 dark:text-blue-400">Together</span>
              </h2>
              <div className="mt-3 h-1.5 w-14 rounded-full bg-linear-to-r from-blue-500 to-blue-600" />
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Whether you have an exciting project, a career opportunity, or just want to say hi — my
                inbox is always open. I&apos;ll do my best to get back to you promptly!
              </p>
            </ScrollAnimation>

            {/* Contact info rows */}
            <ScrollAnimation delay={0.15}>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href, color, hoverColor }) => {
                  const inner = (
                    <div
                      className={`flex items-center gap-4 rounded-xl border border-slate-200/60 bg-white/70 p-4 backdrop-blur-sm transition-all duration-200 ${hoverColor} hover:shadow-md dark:border-slate-800/50 dark:bg-slate-900/50`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${color} text-white shadow-sm`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>
            </ScrollAnimation>

            {/* Social links */}
            <ScrollAnimation delay={0.25}>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Follow me
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:scale-105 hover:border-transparent hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 ${color}`}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* RIGHT — CTA card */}
          <ScrollAnimation delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-blue-100/60 bg-white/80 p-8 shadow-xl shadow-blue-100/50 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/60 dark:shadow-slate-900/50 sm:p-10">
              {/* Decorative gradient corner */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-linear-to-br from-blue-500/20 to-violet-500/10 blur-2xl" />

              {/* Availability badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-700/40 dark:bg-emerald-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  Open to OJT &amp; Work Opportunities
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                Ready to bring your idea to life?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Drop me a message with your project details, job opportunity, or anything you&apos;d like
                to collaborate on. I&apos;m excited to hear what you&apos;re working on!
              </p>

              {/* CTA button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group mb-4 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40 active:scale-[0.98] dark:from-blue-500 dark:to-blue-600"
              >
                <MessageSquare size={20} className="transition-transform duration-200 group-hover:rotate-12" />
                Send Me a Message
              </button>

              {/* Quick note */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <Send size={12} />
                <span>No spam, ever. I&apos;ll reply within 24 hours.</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>

      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

