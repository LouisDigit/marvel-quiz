import React, { Component } from "react";
import { QuizMarvel } from "../quizMarvel";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";

class Quizz extends Component {
  state = {
    levelName: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
  };

  loadQuestions = (quizz) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz];
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      const newArray = fetchedArrayQuiz.map(
        ({ answer, ...keepRest }) => keepRest
      );
      this.setState({
        storedQuestions: newArray,
      });
    } else {
      console.log("Pas assez de questions !");
    }
  };

  componentDidMount() {
    this.loadQuestions(this.state.levelName[this.state.quizLevel]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[0],
        options,
      });
    }
  }

  render() {
    const { pseudo } = this.props.userData;

    return (
      <div>
        <Levels />
        <ProgressBar />
        <h2>Notre question Quiz</h2>
        <p className="answerOptions">Question 1</p>
        <p className="answerOptions">Question 2</p>
        <p className="answerOptions">Question 3</p>
        <p className="answerOptions">Question 4</p>
        <button className="btnSubmit">Suivant</button>
      </div>
    );
  }
}

export default Quizz;
