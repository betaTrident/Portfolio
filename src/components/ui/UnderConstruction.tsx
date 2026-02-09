'use client';

import { Construction, Wrench, Code2 } from 'lucide-react';

interface UnderConstructionProps {
  title?: string;
  message?: string;
  showIcons?: boolean;
}

export default function UnderConstruction({ 
  title = "Under Construction", 
  message = "This section is currently being built. Check back soon for updates!",
  showIcons = true 
}: UnderConstructionProps) {
  return (
    <div className="relative flex min-h-60 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-6 sm:min-h-100 sm:p-8 dark:border-slate-700 dark:bg-slate-900/50">
      {/* Animated background elements */}
      {showIcons && (
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
          <Construction className="absolute left-10 top-10 h-16 w-16 animate-bounce text-blue-500" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <Wrench className="absolute right-20 top-1/4 h-12 w-12 animate-bounce text-blue-500" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
          <Code2 className="absolute bottom-20 left-1/4 h-14 w-14 animate-bounce text-blue-500" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <Construction className="absolute bottom-10 right-10 h-10 w-10 animate-bounce text-blue-500" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-blue-500/10 p-6 dark:bg-blue-500/20">
            <Construction className="h-12 w-12 text-blue-500 dark:text-blue-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white sm:mb-4 sm:text-2xl md:text-3xl">
          {title}
        </h3>

        {/* Message */}
        <p className="mx-auto max-w-md text-slate-600 dark:text-slate-400">
          {message}
        </p>

        {/* Progress dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" style={{ animationDelay: '0s' }}></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" style={{ animationDelay: '0.2s' }}></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
