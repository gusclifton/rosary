'use client';

import React from 'react';

interface PrayerDisplayProps {
  title: string;
  text: string;
  current: number;
  total: number;
}

export default function PrayerDisplay({
  title,
  text,
  current,
  total,
}: PrayerDisplayProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        {total > 1 && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Prayer {current} of {total}
          </p>
        )}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        {total > 1 && (
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(current / total) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md mb-8">
        <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 text-center whitespace-pre-wrap">
          {text}
        </p>
      </div>

      <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        <p>Take your time with this prayer. When ready, proceed to the next.</p>
      </div>
    </div>
  );
}
