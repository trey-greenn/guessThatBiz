import React, { useState } from 'react';
import { QuizCard } from './QuizCard';
import questions from '../data/questions.json';

// Board square types
type SquareType = 'regular' | 'DL' | 'TL' | 'DW' | 'TW' | 'start';

// Define the Scrabble board layout with 10x9 dimensions
const boardLayout: SquareType[][] = Array(10).fill(null).map(() => Array(9).fill('regular'));

// Set special squares
const initializeBoard = () => {
  // Triple Word Scores
  [[0,0], [0,8], [9,0], [9,8]].forEach(([x,y]) => {
    boardLayout[x][y] = 'TW';
  });

  // Double Word Scores
  [[1,1], [1,7], [8,1], [8,7]].forEach(([x,y]) => {
    boardLayout[x][y] = 'DW';
  });

  // Triple Letter Scores
  [[0,4], [4,0], [4,8], [9,4]].forEach(([x,y]) => {
    boardLayout[x][y] = 'TL';
  });

  // Double Letter Scores
  [[2,2], [2,6], [7,2], [7,6]].forEach(([x,y]) => {
    boardLayout[x][y] = 'DL';
  });

  // Start square
  boardLayout[4][4] = 'start';
};

initializeBoard();

export function ScrabbleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [placedTiles, setPlacedTiles] = useState<string[][]>(
    Array(10).fill(null).map(() => Array(9).fill(''))
  );

  const getSquareColor = (type: SquareType) => {
    switch(type) {
      case 'TW': return 'bg-red-500';
      case 'DW': return 'bg-pink-300';
      case 'TL': return 'bg-blue-500';
      case 'DL': return 'bg-blue-300';
      case 'start': return 'bg-yellow-300';
      default: return 'bg-beige-100';
    }
  };

  const getSquareLabel = (type: SquareType) => {
    switch(type) {
      case 'TW': return 'TW';
      case 'DW': return 'DW';
      case 'TL': return 'TL';
      case 'DL': return 'DL';
      case 'start': return '★';
      default: return '';
    }
  };

  return (
    <QuizCard
      title="Scrabble Quiz"
      currentQuestion={currentQuestion}
      totalQuestions={questions.scrabbleQuestions.length}
      onPrevious={() => setCurrentQuestion(curr => Math.max(0, curr - 1))}
      onNext={() => setCurrentQuestion(curr => Math.min(questions.scrabbleQuestions.length - 1, curr + 1))}
    >
      <div className="flex gap-8">
        <div className="grid grid-cols-[repeat(9,minmax(0,1fr))] gap-0 w-[360px] h-[400px] border-2 border-gray-800">
          {boardLayout.map((row, i) => (
            row.map((squareType, j) => (
              <div 
                key={`${i}-${j}`}
                className={`w-10 h-10 border border-gray-400 flex items-center justify-center text-xs font-bold ${getSquareColor(squareType)}`}
              >
                {placedTiles[i][j] || getSquareLabel(squareType)}
              </div>
            ))
          ))}
        </div>
        
        <div className="w-48 bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl text-white mb-4">Answers</h3>
          <div className="space-y-2">
            {questions.scrabbleQuestions[currentQuestion].answer.map((answer, index) => (
              <div key={index} className="text-white">
                {index + 1}. {answer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </QuizCard>
  );
}
