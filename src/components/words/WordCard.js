// src/components/words/WordCard.js
import React from 'react';
import { getWordCardClass } from '../../utils/wordHelpers';

export default function WordCard({ word, masteryCount, isSelected, onClick }) {
  const cardClass = getWordCardClass(masteryCount);
  
  return (
    <div
      className={`word-card ${cardClass} ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="word-character">{word.character}</span>
      <span className="word-pinyin">{word.pinyin}</span>
      <span className="word-meaning">{word.meaning}</span>
      {masteryCount > 0 && (
        <div className="word-mastery">
          <span className="mastery-badge">
            ✓ {masteryCount}
          </span>
        </div>
      )}
    </div>
  );
}