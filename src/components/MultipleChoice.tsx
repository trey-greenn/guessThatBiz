import React, { useState } from 'react';
import { QuizCard } from './QuizCard';
import questions from '../data/questions.json';

export function MultipleChoice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(questions.multipleChoice.length).fill(-1)
  );

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const question = questions.multipleChoice[currentQuestion];
  const hasAnswered = selectedAnswers[currentQuestion] !== -1;
  const isCorrect = (index: number) => {
    if (!hasAnswered) return false;
    return index === 0; // First option (A) is always correct
  };
  const isIncorrect = (index: number) => {
    if (!hasAnswered) return false;
    return selectedAnswers[currentQuestion] === index && index !== 0;
  };

  return (
    <QuizCard
      title="Multiple Choice Quiz"
      currentQuestion={currentQuestion}
      totalQuestions={questions.multipleChoice.length}
      onPrevious={() => setCurrentQuestion(curr => Math.max(0, curr - 1))}
      onNext={() => setCurrentQuestion(curr => Math.min(questions.multipleChoice.length - 1, curr + 1))}
    >
      <div className="space-y-4">
        <p className="text-2xl font-large text-white bold">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={hasAnswered}
              className={`w-full text-left text-lg p-3 rounded-lg border transition-colors ${
                isCorrect(index)
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : isIncorrect(index)
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>
        <div className="mt-4 text-xl">
          <span className="text-gray-100">
            Question {currentQuestion + 1} of {questions.multipleChoice.length}
          </span>
        </div>
      </div>
    </QuizCard>
  );
}