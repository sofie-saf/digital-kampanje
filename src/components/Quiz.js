// src/components/Quiz.js
import React, { useState } from 'react';
import quizData from '../data/quizData';
import QuestionCard from './QuestionCard';
import './Quiz.css';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (index + 1 < quizData.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  // ✅ This function handles the result message
  const getResultMessage = () => {
    const percentage = (score / quizData.length) * 100;

    if (percentage >= 87) {
      return "Imponerende! Du kjenner tydeligvis igjen deepfakes.";
    } else if (percentage >= 60) {
      return "Godt jobbet, men det er fortsatt litt å lære.";
    } else if (percentage >= 33) {
      return "Du må være mer oppmerksom – deepfakes kan lure deg.";
    } else {
      return "Ikke lett, men viktig å lære! Prøv igjen.";
    }
  };

  // ✅ Final screen
  const renderFinalScreen = () => {
    return (
      <div className="quiz-result">
        <h2>Quiz fullført!</h2>
        <p>Din poengsum: {score} / {quizData.length}</p>
        <p>{getResultMessage()}</p>
        <button onClick={() => window.location.reload()}>Prøv igjen</button>
      </div>
    );
  };

  return (
    <div className="quiz">
      {!finished ? (
        <QuestionCard
          question={quizData[index]}
          questionIndex={index}
          onAnswer={handleAnswer}
        />
      ) : (
        renderFinalScreen()
      )}
    </div>
  );
};

export default Quiz;
