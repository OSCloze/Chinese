// src/hooks/useGameSession.js
import { useState } from 'react';

export function useGameSession() {
  // Session state
  const [gameState, setGameState] = useState('setup'); // 'setup', 'playing', 'review'
  const [sessionSize, setSessionSize] = useState(5);
  const [practiceLevel, setPracticeLevel] = useState(0); // 0 = all available
  const [sessionSentences, setSessionSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionResults, setSessionResults] = useState({});
  
  // Current question state
  const [currentSentence, setCurrentSentence] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);

  /**
   * Start a new session with selected sentences
   * @param {Array} sentences - Array of sentence objects to use
   */
  const startSession = (sentences) => {
    if (sentences.length === 0) return;
    
    setSessionSentences(sentences);
    setCurrentSentence(sentences[0]);
    setCurrentIndex(0);
    setSessionResults({});
    setUserAnswer('');
    setIsAnswered(false);
    setFeedback('');
    setShowExplanation(false);
    setSelectedWord(null);
    setGameState('playing');
  };

  /**
   * Handle checking the user's answer
   * @param {string} correctAnswer 
   * @returns {boolean} - Whether answer was correct
   */
  const checkAnswer = (correctAnswer) => {
    const isCorrect = userAnswer.trim() === correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Not quite');
    setIsAnswered(true);
    return isCorrect;
  };

  /**
   * Move to next question or review
   */
  const goToNext = () => {
    const nextIndex = currentIndex + 1;
    setSelectedWord(null);
    
    if (nextIndex >= sessionSentences.length) {
      setGameState('review');
    } else {
      setCurrentSentence(sessionSentences[nextIndex]);
      setCurrentIndex(nextIndex);
      setUserAnswer('');
      setIsAnswered(false);
      setFeedback('');
      setShowExplanation(false);
    }
  };

  /**
   * Toggle explanation visibility
   */
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  /**
   * Reset to setup screen
   */
  const resetToSetup = () => {
    setSelectedWord(null);
    setGameState('setup');
    setSessionResults({});
  };

  /**
   * Record result for current sentence
   * @param {number} sentenceId 
   * @param {boolean} wasCorrect 
   */
  const recordResult = (sentenceId, wasCorrect) => {
    setSessionResults(prev => ({
      ...prev,
      [sentenceId]: wasCorrect
    }));
  };

  /**
   * Clear selected word (close modal)
   */
  const clearSelectedWord = () => {
    setSelectedWord(null);
  };

  return {
    // State
    gameState,
    sessionSize,
    practiceLevel,
    sessionSentences,
    currentIndex,
    sessionResults,
    currentSentence,
    userAnswer,
    isAnswered,
    feedback,
    showExplanation,
    selectedWord,
    
    // Setters
    setSessionSize,
    setPracticeLevel,
    setUserAnswer,
    setSelectedWord,
    
    // Actions
    startSession,
    checkAnswer,
    goToNext,
    toggleExplanation,
    resetToSetup,
    recordResult,
    clearSelectedWord
  };
}