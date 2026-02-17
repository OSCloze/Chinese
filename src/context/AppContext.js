// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';
import { useWordMastery } from '../hooks/useWordMastery';
import { useSentenceProgress } from '../hooks/useSentenceProgress';
import { levels } from '../data/levels';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('play');
  
  // UI state (expanded/collapsed levels)
  const [expandedLevels, setExpandedLevels] = useState({});

  // Custom hooks for data management
  const wordMasteryHook = useWordMastery();
  const sentenceProgressHook = useSentenceProgress();

  /**
   * Toggle level accordion expansion
   * @param {number} levelId 
   */
  const toggleLevel = (levelId) => {
    setExpandedLevels(prev => ({
      ...prev,
      [levelId]: !prev[levelId]
    }));
  };

  /**
   * Handle a correct answer - updates both word mastery and sentence progress
   * @param {number} wordId 
   * @param {number} sentenceId 
   * @param {number} levelId 
   */
  const handleCorrectAnswer = (wordId, sentenceId, levelId) => {
    wordMasteryHook.incrementMastery(wordId);
    sentenceProgressHook.markSentenceAnswered(sentenceId, levelId);
  };

  /**
   * Reset all progress (for settings page)
   */
  const resetAllProgress = () => {
    wordMasteryHook.resetMastery();
    sentenceProgressHook.resetProgress();
  };

  // Combine all values to pass to consumers
  const value = {
    // Navigation
    currentPage,
    setCurrentPage,
    
    // UI
    expandedLevels,
    toggleLevel,
    
    // Word mastery
    wordMastery: wordMasteryHook.wordMastery,
    getMasteryCount: wordMasteryHook.getMasteryCount,
    isWordLearned: wordMasteryHook.isWordLearned,
    isWordMastered: wordMasteryHook.isWordMastered,
    incrementMastery: wordMasteryHook.incrementMastery,
    
    // Sentence progress
    answeredSentences: sentenceProgressHook.answeredSentences,
    completedLevels: sentenceProgressHook.completedLevels,
    isSentenceAnswered: sentenceProgressHook.isSentenceAnswered,
    getAnsweredCountInLevel: sentenceProgressHook.getAnsweredCountInLevel,
    getTotalCountInLevel: sentenceProgressHook.getTotalCountInLevel,
    isLevelFullyCompleted: sentenceProgressHook.isLevelFullyCompleted,
    getNewlyCompletedLevels: sentenceProgressHook.getNewlyCompletedLevels,
    markSentenceAnswered: sentenceProgressHook.markSentenceAnswered,
    
    // Combined actions
    handleCorrectAnswer,
    resetAllProgress,
    
    // Static data
    levels
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to use the context
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}