// src/components/words/WordGrid.js
import React from 'react';
import WordCard from './WordCard';

export default function WordGrid({ 
  words, 
  wordMastery, 
  selectedWordId, 
  onWordClick 
}) {
  return (
    <div className="word-grid">
      {words.map((word) => {
        const masteryCount = wordMastery[word.id] || 0;
        const isSelected = selectedWordId === word.id;
        
        return (
          <WordCard
            key={word.id}
            word={word}
            masteryCount={masteryCount}
            isSelected={isSelected}
            onClick={() => onWordClick(word)}
          />
        );
      })}
    </div>
  );
}