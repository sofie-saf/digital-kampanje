import React from 'react';

const Feedback = ({ isCorrect, explanation, onNext }) => {
  return (
    <div className="feedback">
      <h3>{isCorrect ? 'Riktig!' : 'Feil'}</h3>
      <p>{explanation}</p>
      <button onClick={onNext}>Neste spørsmål</button>
    </div>
  );
};

export default Feedback;
