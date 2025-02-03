
import React, { useState } from 'react';
import { QuizCard } from './QuizCard';
import questions from '../data/questions.json';

export function ImageQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.imageQuestions.length).fill('')
  );

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const question = questions.imageQuestions[currentQuestion];

  return (
    <QuizCard
      title="Image Quiz (Currently Disabled)"
      currentQuestion={currentQuestion}
      totalQuestions={questions.imageQuestions.length}
      onPrevious={() => setCurrentQuestion(curr => Math.max(0, curr - 1))}
      onNext={() => setCurrentQuestion(curr => Math.min(questions.imageQuestions.length - 1, curr + 1))}
    >
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg text-gray-600 text-center">
          Image quiz is currently disabled
        </div>
        <p className="text-lg font-medium">{question.question}</p>
        <input
          type="text"
          value={answers[currentQuestion]}
          onChange={(e) => handleAnswerChange(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="mt-4 text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.imageQuestions.length}
        </div>
      </div>
    </QuizCard>
  );
}
