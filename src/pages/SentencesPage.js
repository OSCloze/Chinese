// src/pages/SentencesPage.js
import React from 'react';
import { useApp } from '../context/AppContext';
import { sentences } from '../data/sentences';
import { getWordsForLevel } from '../data/levels';

export default function SentencesPage() {
  const { 
    levels, 
    expandedLevels, 
    toggleLevel,
    answeredSentences,
    getAnsweredCountInLevel,
    getTotalCountInLevel,
    isLevelFullyCompleted
  } = useApp();

  return (
    <section className="view" data-view="levels">
      <header className="header">
        <h1>Sentences</h1>
        <p className="header-desc">
          Complete all sentences in a level to unlock the next word level.
        </p>
      </header>

      <div className="levels-container">
        <ul className="sentence-list">
          {levels.map((level) => {
            const levelSentences = sentences.filter(s => s.level === level.id);
            const revealedCount = getAnsweredCountInLevel(level.id);
            const totalSentences = getTotalCountInLevel(level.id);
            const isCompleted = isLevelFullyCompleted(level.id);
            
            const levelDisplayName = level.id === 1 
              ? `Level ${level.id}: Foundation Sentences` 
              : `Level ${level.id}`;
            
            return (
              <li key={level.id} className="collection-item">
                <div 
                  className={`collection-header ${isCompleted ? 'level-completed' : ''}`}
                  onClick={() => toggleLevel(level.id)}
                >
                  <span className="collection-expand-icon">
                    {expandedLevels[level.id] ? '▼' : '▶'}
                  </span>
                  <span className={`collection-name ${isCompleted ? 'completed' : ''}`}>
                    {levelDisplayName}
                  </span>
                  <span className="collection-count">
                    {revealedCount}/{totalSentences} revealed
                  </span>
                </div>
                
                <div 
                  className="collection-sentences" 
                  hidden={!expandedLevels[level.id]}
                >
                  <p className="level-description">{level.description}</p>
                  
                  {/* Progress bar */}
                  <div className="level-progress-bar">
                    <div 
                      className="level-progress-fill"
                      style={{ width: `${(revealedCount / totalSentences) * 100}%` }}
                    />
                  </div>
                  
                  {/* Sentences list */}
                  {levelSentences.length > 0 ? (
                    <div className="sentences-list">
                      {levelSentences.map((sentence) => {
                        const isRevealed = answeredSentences.includes(sentence.id);
                        
                        return (
                          <div 
                            key={sentence.id} 
                            className={`sentence-list-item ${isRevealed ? 'answered' : 'hidden'}`}
                          >
                            {isRevealed ? (
                              <div className="sentence-item-content">
                                <div className="sentence-item-main">
                                  <span className="sentence-item-chinese">
                                    {sentence.sentence.split('_____').map((part, index) => (
                                      <React.Fragment key={index}>
                                        {part}
                                        {index === 0 && (
                                          <span className="target-word-highlight">
                                            {sentence.answer}
                                          </span>
                                        )}
                                      </React.Fragment>
                                    ))}
                                  </span>
                                  <span className="sentence-item-pinyin">{sentence.pinyin}</span>
                                </div>
                                <div className="sentence-item-translation">{sentence.nativeSentence}</div>
                              </div>
                            ) : (
                              <div className="sentence-item-content masked">
                                <div className="masked-placeholder">❓❓❓</div>
                                <div className="masked-label">Answer correctly to reveal</div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="empty-message">
                      No sentences available for this level yet.
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}