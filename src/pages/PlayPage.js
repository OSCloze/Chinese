// src/pages/PlayPage.js
import React from 'react';
import { useApp } from '../context/AppContext';
import { useGameSession } from '../hooks/useGameSession';
import { getSentencesForLevel } from '../data/sentences';
import { getAvailableLevels, isLevelUnlocked } from '../utils/sentenceHelpers';
import { selectSessionSentences } from '../utils/gameHelpers';
import SetupScreen from '../components/play/SetupScreen';
import GameScreen from '../components/play/GameScreen';
import ReviewScreen from '../components/play/ReviewScreen';

export default function PlayPage() {
  const { 
    completedLevels, 
    handleCorrectAnswer,
    levels
  } = useApp();
  
  const gameSession = useGameSession();

  const handleStartSession = () => {
    // Determine which levels to include
    let availableLevels = [];
    
    if (gameSession.practiceLevel === 0) {
      // All available levels
      availableLevels = getAvailableLevels(completedLevels);
    } else {
      // Only the selected level (if unlocked)
      if (isLevelUnlocked(gameSession.practiceLevel, completedLevels)) {
        availableLevels = [gameSession.practiceLevel];
      } else {
        availableLevels = [1]; // Fallback to Level 1
      }
    }
    
    // Get sentences from selected levels
    let allSentences = [];
    availableLevels.forEach(levelId => {
      const levelSentences = getSentencesForLevel(levelId);
      allSentences = [...allSentences, ...levelSentences];
    });
    
    // Select sentences for the session
    const selected = selectSessionSentences(
      allSentences, 
      gameSession.sessionSize, 
      completedLevels
    );
    
    gameSession.startSession(selected);
  };

  const handleCheck = () => {
    const isCorrect = gameSession.checkAnswer(gameSession.currentSentence.answer);
    
    if (isCorrect) {
      handleCorrectAnswer(
        gameSession.currentSentence.targetWordId,
        gameSession.currentSentence.id,
        gameSession.currentSentence.level
      );
    }
    
    gameSession.recordResult(gameSession.currentSentence.id, isCorrect);
  };

  const handleWordClick = (wordData) => {
    gameSession.setSelectedWord(wordData);
  };

  return (
    <section className="view is-active" data-view="play">
      <header className="header header--play">
        <h1>Cloze 中文</h1>
        <div className="header-play-actions">
          <button type="button" className="icon-btn" aria-label="Play settings" title="Settings">
            ⚙️
          </button>
        </div>
      </header>
      
      {gameSession.gameState === 'setup' && (
        <SetupScreen
          sessionSize={gameSession.sessionSize}
          setSessionSize={gameSession.setSessionSize}
          practiceLevel={gameSession.practiceLevel}
          setPracticeLevel={gameSession.setPracticeLevel}
          onStart={handleStartSession}
        />
      )}

      {gameSession.gameState === 'playing' && gameSession.currentSentence && (
        <GameScreen
          currentSentence={gameSession.currentSentence}
          currentIndex={gameSession.currentIndex}
          sessionSentences={gameSession.sessionSentences}
          userAnswer={gameSession.userAnswer}
          setUserAnswer={gameSession.setUserAnswer}
          isAnswered={gameSession.isAnswered}
          feedback={gameSession.feedback}
          showExplanation={gameSession.showExplanation}
          selectedWord={gameSession.selectedWord}
          onCheck={handleCheck}
          onNext={gameSession.goToNext}
          onToggleExplanation={gameSession.toggleExplanation}
          onWordClick={handleWordClick}
          onCloseTranslation={gameSession.clearSelectedWord}
        />
      )}

      {gameSession.gameState === 'review' && (
        <ReviewScreen
          sessionSentences={gameSession.sessionSentences}
          sessionResults={gameSession.sessionResults}
          onPlayAgain={gameSession.resetToSetup}
        />
      )}
    </section>
  );
}