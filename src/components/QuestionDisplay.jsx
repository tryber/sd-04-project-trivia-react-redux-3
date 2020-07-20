import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buttonAnswer } from '../actions/buttonAnswer';
import Header from '../components/Header';

class QuestionsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answersToDisplay: [],
    };

    this.answerListMaker = this.answerListMaker.bind(this);
    this.shuffleAnswerList = this.shuffleAnswerList.bind(this);
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
    const questionToDisplay = this.props.question.results[0];
    const answerList = [{ testId: 'correct-answer', answer: questionToDisplay.correct_answer, borderStyle: '3px solid rgb(6, 240, 15)' }];
    questionToDisplay.incorrect_answers.map((answer, index) => (
      answerList.push({ testId: `wrong-answer-${index}`, answer, borderStyle: '3px solid rgb(255, 0, 0)' })
    ));
    return this.shuffleAnswerList(answerList);
  }

  render() {
    const { answersToDisplay } = this.state;
    const questionToDisplay = this.props.question.results[0];
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
                onClick={() => {
                  this.props.buttonAnswer();
                }}
                style={this.props.borderColorChange ? { border: answer.borderStyle } : { border: '5px solid gray' }}
              >{answer.answer} </button>
            ),
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  borderColorChange: state.ButtonAnswer.borderColorChange,
});

const mapDispatchToProps = (dispatch) => ({
  buttonAnswer: () => dispatch(buttonAnswer()),
});

QuestionsDisplay.propTypes = {
  question: PropTypes.shape(),
  buttonAnswer: PropTypes.func.isRequired,
  borderColorChange: PropTypes.bool.isRequired,
  // questionToDisplay: PropTypes.shape(),
};

QuestionsDisplay.defaultProps = {
  question: null,
  // questionToDisplay: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsDisplay);
