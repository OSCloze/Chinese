// src/utils/gameHelpers.js
import { separateByRevealed } from './sentenceHelpers';

/**
 * Select sentences for a session with weighting toward unrevealed
 * @param {Array} allSentences - All available sentences for selected levels
 * @param {number} sessionSize - Number of questions requested
 * @param {Array} answeredSentences - Already revealed sentence IDs
 * @returns {Array} - Selected sentences for the session
 */
export const selectSessionSentences = (allSentences, sessionSize, answeredSentences) => {
  if (allSentences.length === 0) return [];
  
  const { revealed, unrevealed } = separateByRevealed(allSentences, answeredSentences);
  let selected = [];
  
  // Prioritize unrevealed sentences (aim for 70%)
  if (unrevealed.length > 0) {
    const targetUnrevealed = Math.ceil(sessionSize * 0.7);
    const unrevealedCount = Math.min(
      Math.max(targetUnrevealed, sessionSize - revealed.length),
      unrevealed.length
    );
    
    const unrevealedSelected = [...unrevealed]
      .sort(() => Math.random() - 0.5)
      .slice(0, unrevealedCount);
    selected.push(...unrevealedSelected);
  }
  
  // Fill remaining slots with revealed sentences
  if (selected.length < sessionSize && revealed.length > 0) {
    const remainingNeeded = sessionSize - selected.length;
    const revealedSelected = [...revealed]
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingNeeded);
    selected.push(...revealedSelected);
  }
  
  // If still need more, take any remaining unrevealed
  if (selected.length < sessionSize && unrevealed.length > selected.length) {
    const remainingNeeded = sessionSize - selected.length;
    const moreUnrevealed = [...unrevealed]
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingNeeded);
    selected.push(...moreUnrevealed);
  }
  
  // Shuffle final selection
  return selected.sort(() => Math.random() - 0.5);
};

/**
 * Check if answer is correct (simple string comparison)
 * @param {string} userAnswer 
 * @param {string} correctAnswer 
 * @returns {boolean}
 */
export const isAnswerCorrect = (userAnswer, correctAnswer) => {
  return userAnswer.trim() === correctAnswer;
};

/**
 * Calculate session stats from results
 * @param {Object} sessionResults - { sentenceId: boolean }
 * @returns {Object} - { correct, incorrect, total }
 */
export const getSessionStats = (sessionResults) => {
  const results = Object.values(sessionResults);
  const correct = results.filter(r => r).length;
  const incorrect = results.filter(r => !r).length;
  return {
    correct,
    incorrect,
    total: results.length
  };
};

/**
 * Get display name for a level
 * @param {number} levelId 
 * @param {boolean} isFoundation 
 * @returns {string}
 */
export const getLevelDisplayName = (levelId, isFoundation = false) => {
  if (levelId === 1 || isFoundation) {
    return `Level ${levelId}: Foundation`;
  }
  return `Level ${levelId}`;
};