// src/components/play/ReviewScreen.js
import React from 'react';
import { useApp } from '../../context/AppContext';
import { getSessionStats } from '../../utils/gameHelpers';

export default function ReviewScreen({ 
  sessionSentences, 
  sessionResults, 
  onPlayAgain 
}) {
  const { levels, getNewlyCompletedLevels } = useApp();
  const stats = getSessionStats(sessionResults);
  const newlyCompleted = getNewlyCompletedLevels();

  return (
    <div className="play-content play-content--review">
      <div className="review-panel">
        <h2 className="review-title">Session Complete</h2>
        
        {/* Level Completion Messages */}
        {newlyCompleted.map(levelId => {
          const level = levels.find(l => l.id === levelId);
          return (
            <div key={levelId} className="level-complete-banner">
              🎉 {level?.name || `Level ${levelId}`} Complete!
            </div>
          );
        })}
        
        {/* Summary stats */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          marginBottom: '1.5rem',
          padding: '1rem',
          background: 'var(--surface2)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: 'var(--correct)' }}>
              {stats.correct}
            </div>
            <div style={{ color: 'var(--muted)' }}>Correct</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: 'var(--wrong)' }}>
              {stats.incorrect}
            </div>
            <div style={{ color: 'var(--muted)' }}>Incorrect</div>
          </div>
        </div>

        <h3 style={{ 
          fontFamily: 'var(--font-head)', 
          color: 'var(--accent2)',
          marginBottom: '1rem' 
        }}>
          Review Answers
        </h3>

        <ul className="review-list">
          {sessionSentences.map((sentence, idx) => {
            const wasCorrect = sessionResults[sentence.id];
            
            return (
              <li key={idx} className={`review-item ${wasCorrect ? 'review-item--correct' : 'review-item--wrong'}`}>
                <div className="review-item-header">
                  <span className={`review-badge ${wasCorrect ? 'review-badge--correct' : 'review-badge--wrong'}`}>
                    {wasCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>
                
                {wasCorrect ? (
                  <p className="review-sentence">
                    {sentence.sentence.replace('_____', sentence.answer)}
                  </p>
                ) : (
                  <div className="review-incorrect-detail">
                    <p className="review-sentence">
                      {sentence.sentence.split('_____').map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i === 0 && (
                            <span className="review-user-answer">
                              {sessionResults[sentence.id]?.answer || "???"}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className="review-correct-answer">
                      Correct answer: <span className="correct-highlight">{sentence.answer}</span>
                    </p>
                  </div>
                )}
                
                {sentence.nativeSentence && (
                  <p className="review-native">{sentence.nativeSentence}</p>
                )}
              </li>
            );
          })}
        </ul>
        
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={onPlayAgain}
        >
          New Session
        </button>
      </div>
    </div>
  );
}