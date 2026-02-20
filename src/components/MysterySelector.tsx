'use client';

import React from 'react';
import { mysteries } from '@/data/prayers';
import Link from 'next/link';

export default function MysterySelector() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            🙏 The Rosary
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Select the mysteries you would like to pray today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mysteries.map((mystery) => {
            const isToday = mystery.days.includes(today);
            return (
              <Link
                key={mystery.id}
                href={`/pray/${mystery.id}`}
                className={`p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer ${
                  isToday
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white border-2 border-blue-700'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{mystery.name} Mysteries</h2>
                  {isToday && (
                    <span className="text-3xl">✓</span>
                  )}
                </div>
                <p className={`text-sm mb-4 ${isToday ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>
                  {mystery.dayOfWeek}
                </p>
                <div className={`text-sm ${isToday ? 'text-blue-50' : 'text-slate-700 dark:text-slate-300'}`}>
                  <p>5 Mysteries • ~20 minutes</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-slate-700 dark:text-slate-300">
          <h3 className="font-bold text-slate-900 dark:text-white mb-3">About the Rosary</h3>
          <p className="text-sm leading-relaxed">
            The Rosary is a powerful prayer that combines vocal and mental prayer. It consists of meditation on the life, death, and resurrection of Jesus through the mysteries, combined with the recitation of the Hail Mary, Our Father, and Glory Be prayers.
          </p>
        </div>
      </div>
    </div>
  );
}
