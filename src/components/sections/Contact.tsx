'use client';

import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import ContactModal from '@/components/common/ContactModal';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative flex flex-col justify-between overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50 py-12 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center flex-1 flex flex-col justify-center">
        {/* Header */}
        <ScrollAnimation>
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <div className="mx-auto h-1.5 w-16 bg-linear-to-r from-blue-500 to-blue-600"></div>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              Let&apos;s build something amazing together
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:border-blue-500/30 dark:hover:shadow-blue-500/10">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-sm transition-transform group-hover:scale-110 dark:from-blue-500/20 dark:to-blue-600/20 dark:text-blue-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
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

            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:border-green-500/30 dark:hover:shadow-green-500/10">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-green-500 to-green-600 text-white shadow-sm transition-transform group-hover:scale-110 dark:from-green-500/20 dark:to-green-600/20 dark:text-green-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Mandaue City, Cebu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Button */}
        <ScrollAnimation delay={0.4}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 rounded-md bg-linear-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 dark:from-blue-500 dark:to-blue-600 dark:shadow-blue-500/20 dark:hover:shadow-blue-500/30"
          >
            <MessageSquare size={20} className="transition-transform group-hover:rotate-12" />
            Send Me a Message
          </button>
        </ScrollAnimation>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
