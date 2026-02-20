'use client';

import React from 'react';

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onComplete?: () => void;
  isComplete?: boolean;
}

export default function NavigationButtons({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  onComplete,
  isComplete = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="px-6 py-3 bg-slate-400 dark:bg-slate-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-500 dark:hover:bg-slate-700 transition-colors"
      >
        ← Previous
      </button>

      {isComplete && onComplete ? (
        <button
          onClick={onComplete}
          className="px-8 py-3 bg-green-600 dark:bg-green-700 text-white rounded-lg font-medium hover:bg-green-700 dark:hover:bg-green-800 transition-colors"
        >
          ✓ Complete Rosary
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
        >
          Next →
        </button>
      )}
    </div>
  );
}
