// src/pages/WordsPage.js
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getWordsForLevel } from '../data/levels';
import WordGrid from '../components/words/WordGrid';
import WordModal from '../components/words/WordModal';

export default function WordsPage() {
  const { 
    levels, 
    expandedLevels, 
    toggleLevel, 
    wordMastery 
  } = useApp();
  
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleCloseModal = () => {
    setSelectedWord(null);
  };

  return (
    <section className="view is-active" data-view="words">
      <header className="header">
        <h1>Words</h1>
        <p className="header-desc">
          All words are visible. Mastery increases when you correctly answer sentences containing these words.
        </p>
      </header>

      <div className="words-scrollable">
        <ul className="level-list">
          {levels.map((level) => {
            const levelWords = getWordsForLevel(level.id);
            const totalInLevel = levelWords.length;
            const isExpanded = expandedLevels[level.id] || false;
            
            return (
              <li key={level.id} className="level-item">
                <div 
                  className="level-header"
                  onClick={() => toggleLevel(level.id)}
                >
                  <span className="level-expand-icon">
                    {isExpanded ? '▼' : '▶'}
                  </span>
                  <span className="level-name">
                    {level.name}
                  </span>
                  <span className="level-stats">
                    {totalInLevel} words
                  </span>
                </div>
                
                {isExpanded && (
                  <div className="level-content">
                    <p className="level-description">{level.description}</p>
                    
                    <WordGrid
                      words={levelWords}
                      wordMastery={wordMastery}
                      selectedWordId={selectedWord?.id}
                      onWordClick={handleWordClick}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {selectedWord && (
        <WordModal
          word={selectedWord}
          masteryCount={wordMastery[selectedWord.id] || 0}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}