import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {updatePlayer} from '../actions/login';
import Header from '../components/Header';
import Timer from '../components/Timer';
import QuestionDisplay2 from '../components/QuestionDisplay2';

/*eslint max-lines-per-function: ["error", 200]*/
function Game({ history }) {
  const [timer, setTimer] = useState(30);
  const [idInterval, setIdInterval] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [idQuestion, setIdQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { trivia : { results: questions } } = useSelector(state => state.trivia);
  const { player } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const difficulty = { hard: 3, medium: 2, easy: 1 };
  
  const stateProps = {
    setTimer,
    setIdInterval,
    setSelectedAnswer,
    setCurrentQuestion,
    timer,
    idInterval,
    idQuestion,
    selectedAnswer,
    questions,
    currentQuestion,
  };

  const handleAnswer = () => {
    clearInterval(idInterval);
    setIdInterval(null);
  }
  const getScore = () => (10 + (timer * difficulty[questions[idQuestion].difficulty]));

  const validateAnswer = () => {
    if(selectedAnswer) {
      if(selectedAnswer === questions[idQuestion].correct_answer)
      {
        dispatch(updatePlayer(getScore()));
      }
    }
  }

  const covertRanking = ({ name, score, gravatarEmail }) => ({ name, score, gravatarEmail });

  const handleNext = () => {
    setSelectedAnswer('');
    setTimer(30);
   if(idQuestion == 4) {
    clearInterval(idInterval);
    localStorage.getItem('ranking') ?
      localStorage.setItem('ranking', JSON.stringify([...JSON.parse(localStorage.getItem('ranking')), covertRanking(player)])) :
      localStorage.setItem('ranking', JSON.stringify([covertRanking(player)])); 
    history.push('/Feedback');
   }
    setIdQuestion(state => state + 1);
  }

  useEffect(() => {
    if(timer == 0) {
      handleAnswer();
    }
  }, [timer]);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify({ player: player }));
  }, [player]);

  useEffect(() => {
    validateAnswer();
  }, [selectedAnswer]);

  return (questions.length > 0) ? (
    <div>
      <Header />
      <Timer  stateProps={stateProps} />
      <QuestionDisplay2 stateProps={stateProps} handleAnswer={handleAnswer}  />
      {(selectedAnswer || (timer == 0)) && <button onClick={() => handleNext()}>next</button>}
    </div> 
  ) : (
    <div>
      loading...
    </div>
  ); 
}

export default withRouter(Game);
