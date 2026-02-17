// src/components/play/GameScreen.js
import React from 'react';
import SentenceDisplay from './SentenceDisplay';
import TranslationBox from './TranslationBox';

export default function GameScreen({
  currentSentence,
  currentIndex,
  sessionSentences,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  showExplanation,
  selectedWord,
  onCheck,
  onNext,
  onToggleExplanation,
  onWordClick,
  onCloseTranslation
}) {
  return (
    <div className="play-content play-content--game">
      <div className="main">
        <div className="game-header">
          <p className="progress">
            Question {currentIndex + 1} of {sessionSentences.length}
          </p>
          <div 
            className={`feedback ${feedback.includes('Correct') ? 'correct' : feedback ? 'wrong' : ''}`} 
            hidden={!feedback}
          >
            {feedback}
          </div>
        </div>

        {/* Native sentence */}
        {currentSentence.nativeSentence && (
          <div className="native-sentence-container">
            {currentSentence.nativeSentence}
          </div>
        )}
        
        {/* Sentence Display with clickable words and blank */}
        <SentenceDisplay
          sentence={currentSentence}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          isAnswered={isAnswered}
          feedback={feedback}
          onCheck={onCheck}
          onWordClick={onWordClick}
        />

        {/* Translation Box */}
        {selectedWord && (
          <TranslationBox
            word={selectedWord}
            onClose={onCloseTranslation}
          />
        )}

        {/* Answer row */}
        {!isAnswered && (
          <div className="check-row">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={onCheck}
              disabled={!userAnswer.trim()}
            >
              Check
            </button>
          </div>
        )}

        {/* Explanation */}
        {isAnswered && currentSentence.explanation && (
          <div className="explanation" hidden={!showExplanation}>
            {currentSentence.explanation}
          </div>
        )}

        {/* Post-check row */}
        {isAnswered && (
          <div className="post-check-row">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={onNext}
            >
              {currentIndex + 1 >= sessionSentences.length ? 'See Results' : 'Next'}
            </button>
            {currentSentence.explanation && (
              <button 
                type="button" 
                className="btn btn-ghost"
                onClick={onToggleExplanation}
              >
                {showExplanation ? 'Hide Explanation' : 'View Explanation'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}