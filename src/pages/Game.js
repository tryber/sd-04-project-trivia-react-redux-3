import React from 'react';
import QuestionDisplay from '../components/QuestionDisplay';

export default function Game() {
  const questions = [
    {
      response_code: 0,
      results: [
        {
          category: 'Entertainment: Video Games',
          type: 'boolean',
          difficulty: 'hard',
          question:
            'TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy',
          correct_answer: 'False',
          incorrect_answers: ['True', 'test1', 'test2'],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>game</h1>
      <QuestionDisplay question={questions[0]}></QuestionDisplay>
    </div>
  );
}
