'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import PrayerDisplay from '@/components/PrayerDisplay';
import NavigationButtons from '@/components/NavigationButtons';
import {
  openingPrayers,
  closingPrayers,
  mysteries,
  mysteryDetails,
  getHailMaryPrayers,
} from '@/data/prayers';

interface PrayPageProps {
  params: Promise<{
    mystery: string;
  }>;
}

export default function PrayPage({ params }: PrayPageProps) {
  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const { mystery: mysteryId } = React.use(params);
  const mystery = mysteries.find((m) => m.id === mysteryId);

  // Build the complete prayer sequence
  const prayerSequence = useMemo(() => {
    if (!mystery) return [];

    const sequence = [...openingPrayers];

    // Add mystery header
    const mysteryIndex = mystery.id as keyof typeof mysteryDetails;
    const mysteryPrayers = mysteryDetails[mysteryIndex] || [];

    // Add each decade (Our Father + 10 Hail Marys + Glory Be)
    for (let i = 0; i < mysteryPrayers.length; i++) {
      sequence.push({
        id: `mystery-${i}`,
        title: mysteryPrayers[i],
        text: `Meditate on: ${mysteryPrayers[i]}`,
        type: 'mystery' as const,
      });

      sequence.push({
        id: `our-father-decade-${i}`,
        title: 'Our Father',
        text: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
        type: 'decade' as const,
      });

      // Add 10 Hail Marys
      const hailMarys = getHailMaryPrayers(10);
      sequence.push(...hailMarys);

      sequence.push({
        id: `glory-be-decade-${i}`,
        title: 'Glory Be',
        text: 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
        type: 'decade' as const,
      });

      if (i < mysteryPrayers.length - 1) {
        sequence.push({
          id: `oh-my-jesus-${i}`,
          title: 'O My Jesus',
          text: 'O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to heaven, especially those most in need of thy mercy. Amen.',
          type: 'decade' as const,
        });
      }
    }

    // Add closing prayers
    sequence.push(...closingPrayers);

    return sequence;
  }, [mystery]);

  // Error state
  if (!mystery) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center py-12 px-4">
        <div className="max-w-md text-center bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Mystery not found
          </h1>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center py-12 px-4">
        <div className="max-w-md text-center bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Rosary Complete
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Thank you for your devotion and prayers. May God bless you abundantly.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentPrayer = prayerSequence[currentPrayerIndex];
  const canGoPrevious = currentPrayerIndex > 0;
  const canGoNext = currentPrayerIndex < prayerSequence.length - 1;
  const isLastPrayer = currentPrayerIndex === prayerSequence.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-2"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
            {mystery.name} Mysteries
          </h1>
          <div className="w-16"></div>
        </div>

        <PrayerDisplay
          title={currentPrayer.title}
          text={currentPrayer.text}
          current={currentPrayerIndex + 1}
          total={prayerSequence.length}
        />

        <NavigationButtons
          onPrevious={() => setCurrentPrayerIndex(Math.max(0, currentPrayerIndex - 1))}
          onNext={() =>
            setCurrentPrayerIndex(Math.min(prayerSequence.length - 1, currentPrayerIndex + 1))
          }
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
          onComplete={() => setCompleted(true)}
          isComplete={isLastPrayer}
        />
      </div>
    </div>
  );
}
