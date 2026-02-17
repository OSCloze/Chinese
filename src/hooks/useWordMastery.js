// src/hooks/useWordMastery.js
import { useState, useEffect } from 'react';

export function useWordMastery() {
  const [wordMastery, setWordMastery] = useState(() => {
    const saved = localStorage.getItem('wordMastery');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to localStorage whenever wordMastery changes
  useEffect(() => {
    localStorage.setItem('wordMastery', JSON.stringify(wordMastery));
  }, [wordMastery]);

  /**
   * Increment mastery count for a word
   * @param {number} wordId 
   */
  const incrementMastery = (wordId) => {
    setWordMastery(prev => ({
      ...prev,
      [wordId]: (prev[wordId] || 0) + 1
    }));
  };

  /**
   * Get mastery count for a specific word
   * @param {number} wordId 
   * @returns {number}
   */
  const getMasteryCount = (wordId) => {
    return wordMastery[wordId] || 0;
  };

  /**
   * Check if a word is learned (at least 1 correct)
   * @param {number} wordId 
   * @returns {boolean}
   */
  const isWordLearned = (wordId) => {
    return (wordMastery[wordId] || 0) >= 1;
  };

  /**
   * Check if a word is mastered (at least 5 correct)
   * @param {number} wordId 
   * @returns {boolean}
   */
  const isWordMastered = (wordId) => {
    return (wordMastery[wordId] || 0) >= 5;
  };

  /**
   * Reset all word mastery (for settings page)
   */
  const resetMastery = () => {
    setWordMastery({});
  };

  return {
    wordMastery,
    incrementMastery,
    getMasteryCount,
    isWordLearned,
    isWordMastered,
    resetMastery
  };
}