import React from 'react';
import './InfoSection.css';

const InfoSection = ({ title, paragraphs, image, reverse }) => {
  return (
    <section className="info">
      <div className={`info-container ${reverse ? 'reverse' : ''}`}>
        <div className="info-text">
          <h2>{title}</h2>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="info-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
