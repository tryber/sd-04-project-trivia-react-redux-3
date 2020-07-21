import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function QuestionDisplay2({ setGame, handleAnswer, game, questions }) {
  const { timer, idQuestion, selectedAnswer, currentQuestion } = game;
  let questionC = currentQuestion;
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const answerListMaker = ({ correct_answer, incorrect_answers }) =>
    shuffle([{ testId: 'correct-answer', answer: correct_answer, class: 'green-border' }, ...incorrect_answers.map((answer, index) => (
      { testId: `wrong-answer-${index}`, answer, class: 'red-border' }))]);

  useEffect(() => {
    const questionRandom = answerListMaker(questions[idQuestion]);
    setGame((state) => ({ ...state, currentQuestion: questionRandom }));
    questionC = questionRandom;
  }, [idQuestion]);

  return (
    <div>
      <p data-testid="question-category">Category: {questions[idQuestion].category}</p>
      <p data-testid="question-text">Question: {questions[idQuestion].question}</p>
      <div>
        <p>Please chose an answer:</p>
        {questionC.map((answer) => (
          <button
            key={answer.answer}
            className={`${!!selectedAnswer || (timer === 0) ? answer.class : ''}`}
            data-testid={answer.testId}
            disabled={!!selectedAnswer || timer === 0}
            onClick={() => {
              console.log('answer.answer', answer.answer);
              setGame((state) => ({ ...state, selectedAnswer: answer.answer }));
              handleAnswer();
            }}
          >
            {answer.answer}
          </button>
        ),
        )}
      </div>
    </div>
  );
}

QuestionDisplay2.propTypes = {
  setGame: PropTypes.func.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  game: PropTypes.objectOf(PropTypes.any).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
