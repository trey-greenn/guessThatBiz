import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizCardProps {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  children: React.ReactNode;
}

export function QuizCard({
  title,
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  children,
}: QuizCardProps) {
  return (
    <div className="bg-gray-600 rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <h3 className="text-xl text-white">Business - Entreprenuers - Innovations - Products</h3>

      <div className="mb-6">{children}</div>
      <div className="flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <span className="text-gray-100 bold">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <button
          onClick={onNext}
          disabled={currentQuestion === totalQuestions - 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}