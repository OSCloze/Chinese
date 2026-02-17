// src/utils/wordHelpers.js

/**
 * Get word status based on mastery count
 * @param {number} masteryCount - How many times user answered correctly
 * @returns {string} - 'mastered', 'learned', or 'not-started'
 */
export const getWordStatus = (masteryCount) => {
    if (masteryCount >= 5) return 'mastered';
    if (masteryCount >= 1) return 'learned';
    return 'not-started';
  };
  
  /**
   * Get CSS class for word card based on mastery
   * @param {number} masteryCount 
   * @returns {string} - CSS class name
   */
  export const getWordCardClass = (masteryCount) => {
    if (masteryCount >= 5) return 'mastered';
    if (masteryCount >= 1) return 'learned';
    return '';
  };
  
  /**
   * Count how many words are mastered in a level
   * @param {Array} levelWords - Array of word objects
   * @param {Object} wordMastery - Mastery counts keyed by wordId
   * @returns {number} - Count of mastered words
   */
  export const getMasteredCountInLevel = (levelWords, wordMastery) => {
    return levelWords.filter(word => (wordMastery[word.id] || 0) >= 5).length;
  };
  
  /**
   * Count how many words are learned (at least 1 correct) in a level
   * @param {Array} levelWords 
   * @param {Object} wordMastery 
   * @returns {number}
   */
  export const getLearnedCountInLevel = (levelWords, wordMastery) => {
    return levelWords.filter(word => (wordMastery[word.id] || 0) >= 1).length;
  };