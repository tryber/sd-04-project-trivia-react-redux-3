import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buttonAnswer, disableButton, enableNextButton } from '../actions/buttonAnswer';
import { updateScore } from '../actions/login';
import Header from '../components/Header';
class QuestionsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersToDisplay: [],
      timer: 30, // temporario depois usar o timer do Store
    };
    this.answerListMaker = this.answerListMaker.bind(this);
    this.shuffleAnswerList = this.shuffleAnswerList.bind(this);
    this.scoreCalculator = this.scoreCalculator.bind(this);
  }
  componentDidMount() {
    this.answerListMaker();
  }
  shuffleAnswerList(listInput) {
    this.bar = 0; // because CC Expected 'this' to be used by class method 'shuffleAnswerList'
    const list = listInput;
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
      this.setState({ answersToDisplay: list });
    }
    return list;
  }
  answerListMaker() {
    const questionToDisplay = this.props.question;
    const answerList = [{ testId: 'correct-answer', answer: questionToDisplay.correct_answer, borderStyle: '3px solid rgb(6, 240, 15)' }];
    questionToDisplay.incorrect_answers.map((answer, index) => (
      answerList.push({ testId: `wrong-answer-${index}`, answer, borderStyle: '3px solid rgb(255, 0, 0)' })
    ));
    return this.shuffleAnswerList(answerList);
  }
  scoreCalculator(testId) {
    const { difficulty } = this.props.question;
    let difficultyPoints = 0;
    if (testId.includes('correct')) {
      switch (difficulty) {
        case 'hard':
          difficultyPoints = 3;
          break;
        case 'medium':
          difficultyPoints = 2;
          break;
        case 'easy':
          difficultyPoints = 1;
          break;
        default:
          break;
      }
      this.props.updateScore(10 + (this.state.timer * difficultyPoints));
    }
    localStorage.setItem('state', JSON.stringify({ player: this.props.login.player }));
    this.props.enableNextButton();
  }
  render() {
    const { answersToDisplay } = this.state;
    const questionToDisplay = this.props.question;
    return (
      <div>
        <Header />
        <div>
          <p data-testid="question-category">Category: {questionToDisplay.category}</p>
          <p data-testid="question-text">Question: {questionToDisplay.question}</p>
          <div>
            <p>Please choose an answer:</p>
            {answersToDisplay.map((answer) => (
              <button
                key={answer.answer}
                data-testid={answer.testId}
                disabled={this.props.answerButtonEnable}
                onClick={() => {
                  this.props.buttonAnswer();
                  this.props.disableButton();
                  this.scoreCalculator(answer.testId);
                }}
                style={this.props.borderColorChange ? { border: answer.borderStyle } : { border: '5px solid gray' }}
              >{answer.answer} </button>
            ),
            )}
          </div>
        </div>
        {this.props.nextButtonEnable && <button data-testid="btn-next">Next Question</button>}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  borderColorChange: state.ButtonAnswer.borderColorChange,
  answerButtonEnable: state.ButtonAnswer.answerButtonEnable,
  nextButtonEnable: state.ButtonAnswer.nextButtonEnable,
  login: state.login,
});
const mapDispatchToProps = (dispatch) => ({
  buttonAnswer: () => dispatch(buttonAnswer()),
  disableButton: () => dispatch(disableButton()),
  enableNextButton: () => dispatch(enableNextButton()),
  updateScore: (e) => dispatch(updateScore(e)),
});
QuestionsDisplay.propTypes = {
  question: PropTypes.shape(),
  login: PropTypes.shape(),
  buttonAnswer: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  enableNextButton: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  nextButtonEnable: PropTypes.func.isRequired,
  answerButtonEnable: PropTypes.func.isRequired,
  borderColorChange: PropTypes.bool.isRequired,
};
QuestionsDisplay.defaultProps = {
  question: null,
  login: null,
};
// dwliw
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDisplay);
