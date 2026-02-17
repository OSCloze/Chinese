// src/hooks/useSentenceProgress.js
import { useState, useEffect } from 'react';
import { sentences } from '../data/sentences';
import { levels } from '../data/levels';
import { isLevelComplete } from '../utils/sentenceHelpers';

export function useSentenceProgress() {
  const [answeredSentences, setAnsweredSentences] = useState(() => {
    const saved = localStorage.getItem('answeredSentences');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedLevels, setCompletedLevels] = useState(() => {
    const saved = localStorage.getItem('completedLevels');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('answeredSentences', JSON.stringify(answeredSentences));
  }, [answeredSentences]);

  useEffect(() => {
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
  }, [completedLevels]);

  /**
   * Mark a sentence as answered/revealed
   * @param {number} sentenceId 
   * @param {number} levelId 
   */
  const markSentenceAnswered = (sentenceId, levelId) => {
    // Don't add if already answered
    if (answeredSentences.includes(sentenceId)) return;
    
    setAnsweredSentences(prev => {
      const newAnswered = [...prev, sentenceId];
      
      // Check if this level is now complete
      if (isLevelComplete(levelId, newAnswered, sentences)) {
        if (!completedLevels.includes(levelId)) {
          setCompletedLevels(prevComplete => [...prevComplete, levelId]);
        }
      }
      
      return newAnswered;
    });
  };

  /**
   * Check if a specific sentence has been answered
   * @param {number} sentenceId 
   * @returns {boolean}
   */
  const isSentenceAnswered = (sentenceId) => {
    return answeredSentences.includes(sentenceId);
  };

  /**
   * Get count of answered sentences in a level
   * @param {number} levelId 
   * @returns {number}
   */
  const getAnsweredCountInLevel = (levelId) => {
    const levelSentences = sentences.filter(s => s.level === levelId);
    return levelSentences.filter(s => answeredSentences.includes(s.id)).length;
  };

  /**
   * Get total sentences in a level
   * @param {number} levelId 
   * @returns {number}
   */
  const getTotalCountInLevel = (levelId) => {
    return sentences.filter(s => s.level === levelId).length;
  };

  /**
   * Check if a level is fully completed
   * @param {number} levelId 
   * @returns {boolean}
   */
  const isLevelFullyCompleted = (levelId) => {
    return completedLevels.includes(levelId);
  };

  /**
   * Get newly completed levels (for review screen)
   * @returns {Array} - Level IDs that were just completed
   */
  const getNewlyCompletedLevels = () => {
    const newlyCompleted = [];
    levels.forEach(level => {
      const total = getTotalCountInLevel(level.id);
      const answered = getAnsweredCountInLevel(level.id);
      if (answered === total && total > 0 && !completedLevels.includes(level.id)) {
        newlyCompleted.push(level.id);
      }
    });
    return newlyCompleted;
  };

  /**
   * Reset all progress (for settings page)
   */
  const resetProgress = () => {
    setAnsweredSentences([]);
    setCompletedLevels([]);
  };

  return {
    answeredSentences,
    completedLevels,
    markSentenceAnswered,
    isSentenceAnswered,
    getAnsweredCountInLevel,
    getTotalCountInLevel,
    isLevelFullyCompleted,
    getNewlyCompletedLevels,
    resetProgress
  };
}