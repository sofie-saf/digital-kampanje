// src/components/QuestionCard.js
import React, { useState } from 'react';
import './Quiz.css';

const QuestionCard = ({ question, questionIndex, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option) => {
    if (selected) return;
    setSelected(option);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setSelected(null);
      onAnswer(option.isCorrect);
    }, 4000); // 4 seconds to let user read explanation
  };

  const renderMedia = (option) => {
    if (question.mediaType === 'image') {
      return <img src={option.url} alt={option.label} />;
    } else if (question.mediaType === 'video') {
      return <video src={option.url} controls width="300" />;
    }
    return null;
  };

  return (
    <div className="question-card">
      <h3>Spørsmål {questionIndex + 1}</h3>
      <p>{question.question}</p>

      <div className="media-options">
        {question.options.map((opt, i) => {
          const isCorrect = opt.isCorrect;
          const isSelected = selected === opt;

          let className = "option-card";
          if (showFeedback) {
            if (isCorrect) className += " correct";
            else if (isSelected && !isCorrect) className += " wrong";
          }

          return (
            <div
              key={i}
              className={className}
              onClick={() => handleOptionClick(opt)}
            >
              <strong>{opt.label}</strong>
              {renderMedia(opt)}
            </div>
          );
        })}
      </div>

      {showFeedback && (
        <div className="feedback-box">
          <h4>{selected.isCorrect ? "✅ Riktig!" : "❌ Feil"}</h4>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
