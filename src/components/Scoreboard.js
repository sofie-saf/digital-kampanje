// src/components/Scoreboard.js
import React from 'react';
import './Quiz.css'; // uses same styling file

const Scoreboard = ({ score, total, onRestart }) => {
  const getFeedback = () => {
    const percentage = (score / total) * 100;

    if (percentage === 100) return "Fantastisk! Du svarte riktig på alt!";
    if (percentage >= 80) return "Veldig bra! Du har god forståelse.";
    if (percentage >= 50) return "Greit jobbet, men det er rom for forbedring.";
    return "Det ser ut som du trenger å lære mer om deepfakes.";
  };

  return (
    <div className="quiz-result">
      <h2>Du er ferdig!</h2>
      <p>Poengsum: <strong>{score} / {total}</strong></p>
      <p>{getFeedback()}</p>
      <button className="restart-btn" onClick={onRestart}>Start på nytt</button>
    </div>
  );
};

export default Scoreboard;
