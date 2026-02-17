// src/utils/sentenceHelpers.js

/**
 * Calculate percentage of sentences revealed in a level
 * @param {number} levelId 
 * @param {Array} answeredSentences - Array of revealed sentence IDs
 * @param {Array} allSentences - All sentences from data
 * @returns {number} - Percentage (0-100)
 */
export const getLevelRevealedPercentage = (levelId, answeredSentences, allSentences) => {
    const levelSentences = allSentences.filter(s => s.level === levelId);
    if (levelSentences.length === 0) return 0;
    
    const revealedCount = levelSentences.filter(s => answeredSentences.includes(s.id)).length;
    return Math.round((revealedCount / levelSentences.length) * 100);
  };
  
  /**
   * Check if a level is unlocked based on completed previous levels
   * @param {number} levelId 
   * @param {Array} completedLevels 
   * @returns {boolean}
   */
  export const isLevelUnlocked = (levelId, completedLevels) => {
    if (levelId === 1) return true;
    return completedLevels.includes(levelId - 1);
  };
  
  /**
   * Get array of available level IDs for practice
   * @param {Array} completedLevels 
   * @returns {Array} - Array of level IDs that are unlocked
   */
  export const getAvailableLevels = (completedLevels) => {
    const available = [1];
    if (completedLevels.includes(1)) available.push(2);
    if (completedLevels.includes(2)) available.push(3);
    if (completedLevels.includes(3)) available.push(4);
    if (completedLevels.includes(4)) available.push(5);
    return available;
  };
  
  /**
   * Separate sentences into revealed and unrevealed
   * @param {Array} sentences 
   * @param {Array} answeredSentences 
   * @returns {Object} - { revealed, unrevealed }
   */
  export const separateByRevealed = (sentences, answeredSentences) => {
    const revealed = sentences.filter(s => answeredSentences.includes(s.id));
    const unrevealed = sentences.filter(s => !answeredSentences.includes(s.id));
    return { revealed, unrevealed };
  };
  
  /**
   * Check if a level is fully completed (all sentences revealed)
   * @param {number} levelId 
   * @param {Array} answeredSentences 
   * @param {Array} allSentences 
   * @returns {boolean}
   */
  export const isLevelComplete = (levelId, answeredSentences, allSentences) => {
    const levelSentences = allSentences.filter(s => s.level === levelId);
    if (levelSentences.length === 0) return false;
    return levelSentences.every(s => answeredSentences.includes(s.id));
  };