import React, {useEffect, useState} from 'react'

export default function QuestionDisplay2({ stateProps: { idQuestion, setCurrentQuestion, currentQuestion, questions, setSelectedAnswer, selectedAnswer, timer }, handleAnswer })
{
  const [questionLocal, setQuestionLocal] = useState(currentQuestion);
  const suff = (array) => array.sort(() => Math.random() - 0.5);

  const answerListMaker = ({ correct_answer, incorrect_answers }) => 
    suff([{ testId: 'correct-answer', answer: correct_answer, class:'green-border' }, ...incorrect_answers.map((answer, index) => (
      { testId: `wrong-answer-${index}`, answer, class:'red-border'}))]);
  
  useEffect(() => {
    const questionRandom = answerListMaker(questions[idQuestion]);
    setCurrentQuestion(questionRandom);
    setQuestionLocal(questionRandom); 
  }, [idQuestion]);

  return (
    <div>
    <p data-testid="question-category">Category: {questions[idQuestion].category}</p>
    <p data-testid="question-text">Question: {questions[idQuestion].question}</p>
    <div>
      <p>Please chose an answer:</p>
      {questionLocal.map((answer) => (
        <button 
          key={answer.answer}
          className={`${!!selectedAnswer || (timer == 0) ? answer.class : ''}`}
          data-testid={answer.testId}
          onClick={() => {
            console.log('answer.answer',answer.answer);
            setSelectedAnswer(answer.answer);
            handleAnswer();
          }}
        >
          {answer.answer}
        </button>
      ),
      )}
    </div>
  </div>
  )
}
