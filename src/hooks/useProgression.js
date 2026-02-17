// src/hooks/useProgression.js
import { useState, useEffect } from 'react';
import { isStarterLevel } from '../data/levels';

export const WORD_STATUS = {
  NOT_LEARNED: 'not_learned',
  LEARNING: 'learning',
  REVIEW: 'review',
  MASTERED: 'mastered'
};

// Numeric difficulty scale: 1 = easiest, higher = harder
export const DIFFICULTY = {
  1: 'level1',
  2: 'level2',
  3: 'level3',
  4: 'level4',
  5: 'level5'
};

// Spaced repetition intervals (in days)
const REVIEW_INTERVALS = {
  1: 1,    // After 1st correct, review next day
  2: 2,    // After 2nd correct, review in 2 days
  3: 4,    // After 3rd correct, review in 4 days
  4: 7,    // After 4th correct, review in 1 week
  5: 14,   // After 5th correct, review in 2 weeks
  6: 30,   // After 6th correct, review in 1 month
  7: 60    // After 7th correct, review in 2 months (mastered)
};

const initializeWordProgress = () => ({
  status: WORD_STATUS.NOT_LEARNED,
  correctCount: 0,
  incorrectCount: 0,
  sentencesSeen: [], // Array of sentence IDs
  sentencesCorrect: {}, // Track correct per sentence
  totalAttempts: 0,
  
  // Track progress per difficulty level (1-5)
  level1Correct: 0,
  level2Correct: 0,
  level3Correct: 0,
  level4Correct: 0,
  level5Correct: 0,
  
  level1Attempts: 0,
  level2Attempts: 0,
  level3Attempts: 0,
  level4Attempts: 0,
  level5Attempts: 0,
  
  // Track which difficulty levels are unlocked
  unlockedLevels: [1], // Start with level 1 unlocked
  currentDifficulty: 1,
  
  // Spaced repetition data
  lastReviewed: null,
  nextReview: null,
  reviewStreak: 0,
  
  // Performance metrics
  averageResponseTime: null,
  responseTimes: []
});

export function useProgression() {
  const [wordProgress, setWordProgress] = useState({});
  const [currentLevel, setCurrentLevel] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [sessionHistory, setSessionHistory] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('wordProgress');
    if (saved) setWordProgress(JSON.parse(saved));
    
    const savedLevel = localStorage.getItem('currentLevel');
    if (savedLevel) setCurrentLevel(parseInt(savedLevel));
    
    const savedUnlocked = localStorage.getItem('unlockedLevels');
    if (savedUnlocked) setUnlockedLevels(JSON.parse(savedUnlocked));
    
    const savedHistory = localStorage.getItem('sessionHistory');
    if (savedHistory) setSessionHistory(JSON.parse(savedHistory));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('wordProgress', JSON.stringify(wordProgress));
  }, [wordProgress]);

  useEffect(() => {
    localStorage.setItem('currentLevel', currentLevel.toString());
  }, [currentLevel]);

  useEffect(() => {
    localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));
  }, [unlockedLevels]);

  useEffect(() => {
    localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));
  }, [sessionHistory]);

  // Record an attempt for a word with numeric difficulty
  const recordAttempt = (wordId, sentenceId, isCorrect, difficultyLevel, levelId, responseTimeMs = null) => {
    // Don't track starter pack words
    if (isStarterLevel(levelId)) {
      return;
    }
    
    setWordProgress(prev => {
      const wordData = prev[wordId] || initializeWordProgress();
      
      // Add sentence to seen list if not already there
      const sentencesSeen = wordData.sentencesSeen.includes(sentenceId) 
        ? wordData.sentencesSeen 
        : [...wordData.sentencesSeen, sentenceId];
      
      // Track correct/incorrect per sentence
      const sentencesCorrect = { ...wordData.sentencesCorrect };
      if (!sentencesCorrect[sentenceId]) {
        sentencesCorrect[sentenceId] = { correct: 0, total: 0 };
      }
      sentencesCorrect[sentenceId].total += 1;
      if (isCorrect) {
        sentencesCorrect[sentenceId].correct += 1;
      }
      
      // Update counts based on difficulty level (1-5)
      let level1Correct = wordData.level1Correct || 0;
      let level2Correct = wordData.level2Correct || 0;
      let level3Correct = wordData.level3Correct || 0;
      let level4Correct = wordData.level4Correct || 0;
      let level5Correct = wordData.level5Correct || 0;
      
      let level1Attempts = wordData.level1Attempts || 0;
      let level2Attempts = wordData.level2Attempts || 0;
      let level3Attempts = wordData.level3Attempts || 0;
      let level4Attempts = wordData.level4Attempts || 0;
      let level5Attempts = wordData.level5Attempts || 0;
      
      // Update the specific difficulty level
      switch(difficultyLevel) {
        case 1:
          level1Attempts++;
          if (isCorrect) level1Correct++;
          break;
        case 2:
          level2Attempts++;
          if (isCorrect) level2Correct++;
          break;
        case 3:
          level3Attempts++;
          if (isCorrect) level3Correct++;
          break;
        case 4:
          level4Attempts++;
          if (isCorrect) level4Correct++;
          break;
        case 5:
          level5Attempts++;
          if (isCorrect) level5Correct++;
          break;
        default:
          break;
      }
      
      // Calculate success rate per difficulty level
      const getSuccessRate = (correct, attempts) => attempts > 0 ? correct / attempts : 0;
      
      const level1Success = getSuccessRate(level1Correct, level1Attempts);
      const level2Success = getSuccessRate(level2Correct, level2Attempts);
      const level3Success = getSuccessRate(level3Correct, level3Attempts);
      const level4Success = getSuccessRate(level4Correct, level4Attempts);
      const level5Success = getSuccessRate(level5Correct, level5Attempts);
      
      // Determine unlocked difficulty levels
      const unlocked = [1]; // Level 1 always unlocked
      
      // Unlock level 2 after 2 correct level 1 with 60% success
      if (level1Correct >= 2 && level1Success >= 0.6) unlocked.push(2);
      
      // Unlock level 3 after 2 correct level 2 with 60% success
      if (level2Correct >= 2 && level2Success >= 0.6) unlocked.push(3);
      
      // Unlock level 4 after 2 correct level 3 with 60% success
      if (level3Correct >= 2 && level3Success >= 0.6) unlocked.push(4);
      
      // Unlock level 5 after 2 correct level 4 with 60% success
      if (level4Correct >= 2 && level4Success >= 0.6) unlocked.push(5);
      
      // Calculate total correct count
      const correctCount = level1Correct + level2Correct + level3Correct + level4Correct + level5Correct;
      const totalAttempts = (wordData.totalAttempts || 0) + 1;
      const incorrectCount = totalAttempts - correctCount;
      
      // Determine current difficulty for next session (highest unlocked)
      const currentDifficulty = Math.max(...unlocked);
      
      // Calculate review streak
      let reviewStreak = wordData.reviewStreak || 0;
      if (isCorrect) {
        reviewStreak++;
      } else {
        reviewStreak = 0;
      }
      
      // Determine status
      let status = wordData.status;
      const now = Date.now();
      
      if (status === WORD_STATUS.NOT_LEARNED && sentencesSeen.length >= 1) {
        status = WORD_STATUS.LEARNING;
      } else if (status === WORD_STATUS.LEARNING) {
        // Move to review phase after unlocking level 3 and some practice
        if (unlocked.includes(3) && level3Correct >= 2) {
          status = WORD_STATUS.REVIEW;
        }
      } else if (status === WORD_STATUS.REVIEW) {
        // Mastered after unlocking all levels and good performance
        if (unlocked.length >= 3 && reviewStreak >= 5) {
          status = WORD_STATUS.MASTERED;
        }
      }
      
      // Calculate next review date based on spaced repetition
      let nextReview = null;
      if (isCorrect) {
        const interval = REVIEW_INTERVALS[Math.min(reviewStreak, 7)] || 30;
        nextReview = now + (interval * 24 * 60 * 60 * 1000);
      } else {
        // If wrong, review sooner (next day)
        nextReview = now + (24 * 60 * 60 * 1000);
      }
      
      return {
        ...prev,
        [wordId]: {
          status,
          correctCount,
          incorrectCount,
          sentencesSeen,
          sentencesCorrect,
          totalAttempts,
          
          level1Correct,
          level2Correct,
          level3Correct,
          level4Correct,
          level5Correct,
          
          level1Attempts,
          level2Attempts,
          level3Attempts,
          level4Attempts,
          level5Attempts,
          
          unlockedLevels: unlocked,
          currentDifficulty,
          
          lastReviewed: now,
          nextReview,
          reviewStreak: isCorrect ? reviewStreak : 0,
          
          averageResponseTime: wordData.averageResponseTime,
          responseTimes: wordData.responseTimes || []
        }
      };
    });
  };

  // Get words due for review
  const getWordsDueForReview = (wordIds) => {
    const now = Date.now();
    const dueWords = [];
    
    wordIds.forEach(wordId => {
      const progress = wordProgress[wordId];
      if (progress && progress.nextReview && progress.nextReview <= now) {
        dueWords.push({
          wordId,
          priority: 1 / (progress.nextReview - now), // Sooner = higher priority
          progress
        });
      } else if (!progress) {
        // New word
        dueWords.push({
          wordId,
          priority: 999, // New words get highest priority
          progress: null
        });
      }
    });
    
    return dueWords.sort((a, b) => b.priority - a.priority);
  };

  // Get the next sentence for a word based on its progress
  const getNextSentenceForWord = (wordId, sentences) => {
    const progress = wordProgress[wordId];
    
    if (!progress) {
      // New word - start with difficulty level 1 sentences
      const level1Sentences = sentences.filter(s => s.difficulty === 1);
      return level1Sentences[Math.floor(Math.random() * level1Sentences.length)];
    }
    
    // Determine which difficulty levels are available
    const availableDifficulties = progress.unlockedLevels || [1];
    
    // Weight towards lower difficulties if they have low completion
    const getDifficultyWeight = (difficulty) => {
      // Get correct count for this difficulty
      let correctCount = 0;
      let attemptCount = 0;
      
      switch(difficulty) {
        case 1: 
          correctCount = progress.level1Correct || 0;
          attemptCount = progress.level1Attempts || 0;
          break;
        case 2: 
          correctCount = progress.level2Correct || 0;
          attemptCount = progress.level2Attempts || 0;
          break;
        case 3: 
          correctCount = progress.level3Correct || 0;
          attemptCount = progress.level3Attempts || 0;
          break;
        case 4: 
          correctCount = progress.level4Correct || 0;
          attemptCount = progress.level4Attempts || 0;
          break;
        case 5: 
          correctCount = progress.level5Correct || 0;
          attemptCount = progress.level5Attempts || 0;
          break;
        default: return 0;
      }
      
      // Higher weight for difficulties with fewer correct answers
      // Base weight: 10 / (correctCount + 1)
      // This means:
      // - 0 correct: weight 10
      // - 1 correct: weight 5
      // - 2 correct: weight 3.3
      // - 3 correct: weight 2.5
      // - 4+ correct: weight <=2
      const baseWeight = 10 / (correctCount + 1);
      
      // Reduce weight if they've attempted many times without success
      if (attemptCount > correctCount * 2) {
        return baseWeight * 0.5; // Struggling, show less
      }
      
      return baseWeight;
    };
    
    // Calculate weights for each available difficulty
    const weights = {};
    availableDifficulties.forEach(diff => {
      weights[diff] = getDifficultyWeight(diff);
    });
    
    // Select difficulty based on weights
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    let selectedDifficulty = availableDifficulties[0];
    
    for (const diff of availableDifficulties) {
      if (random < weights[diff]) {
        selectedDifficulty = diff;
        break;
      }
      random -= weights[diff];
    }
    
    // Get sentences of selected difficulty
    const sentencesOfDifficulty = sentences.filter(s => s.difficulty === selectedDifficulty);
    
    if (sentencesOfDifficulty.length === 0) {
      // Fallback to any sentence
      return sentences[Math.floor(Math.random() * sentences.length)];
    }
    
    // Find sentences with lowest success rate
    const getSuccessRate = (sentence) => {
      const stats = progress.sentencesCorrect?.[sentence.id];
      if (!stats || stats.total === 0) return 0;
      return stats.correct / stats.total;
    };
    
    // Sort by success rate (lowest first) and pick one with bias
    const sortedSentences = [...sentencesOfDifficulty].sort((a, b) => {
      const rateA = getSuccessRate(a);
      const rateB = getSuccessRate(b);
      return rateA - rateB;
    });
    
    // 70% chance to pick from bottom half (lowest success rate)
    if (Math.random() < 0.7 && sortedSentences.length > 1) {
      const bottomHalf = sortedSentences.slice(0, Math.ceil(sortedSentences.length / 2));
      return bottomHalf[Math.floor(Math.random() * bottomHalf.length)];
    }
    
    return sortedSentences[Math.floor(Math.random() * sortedSentences.length)];
  };

  // Generate a review session with intelligent weighting
  const generateReviewSession = (wordIds, sentencesByWord, targetSize = 10) => {
    const dueWords = getWordsDueForReview(wordIds);
    const session = [];
    const usedSentences = new Set();
    
    // Calculate total weights for all words
    const wordWeights = {};
    let totalWeight = 0;
    
    wordIds.forEach(wordId => {
      const progress = wordProgress[wordId];
      let weight = 1; // Base weight
      
      if (!progress) {
        // New word - high priority
        weight = 10;
      } else if (progress.status === WORD_STATUS.LEARNING) {
        // Learning words - medium-high priority
        weight = 5;
      } else if (progress.status === WORD_STATUS.REVIEW) {
        // Review words - medium priority
        weight = 3;
      } else if (progress.status === WORD_STATUS.MASTERED) {
        // Mastered words - low priority
        weight = 1;
      }
      
      // Boost weight for words with low correct counts
      if (progress) {
        const totalCorrect = (progress.level1Correct || 0) + 
                            (progress.level2Correct || 0) + 
                            (progress.level3Correct || 0);
        if (totalCorrect < 3) {
          weight *= 2;
        }
      }
      
      wordWeights[wordId] = weight;
      totalWeight += weight;
    });
    
    // Select words based on weights
    const wordsToInclude = [];
    const wordsList = Object.keys(wordWeights).map(id => parseInt(id));
    
    while (wordsToInclude.length < Math.min(targetSize * 2, wordsList.length)) {
      let random = Math.random() * totalWeight;
      let selectedWord = null;
      
      for (const wordId of wordsList) {
        if (random < wordWeights[wordId]) {
          selectedWord = wordId;
          break;
        }
        random -= wordWeights[wordId];
      }
      
      if (selectedWord && !wordsToInclude.includes(selectedWord)) {
        wordsToInclude.push(selectedWord);
      }
    }
    
    // Add sentences from selected words
    for (const wordId of wordsToInclude) {
      if (session.length >= targetSize) break;
      
      const wordSentences = sentencesByWord[wordId] || [];
      if (wordSentences.length === 0) continue;
      
      const nextSentence = getNextSentenceForWord(wordId, wordSentences);
      
      if (nextSentence && !usedSentences.has(nextSentence.id)) {
        session.push({
          ...nextSentence,
          reviewType: wordProgress[wordId] ? 'review' : 'new'
        });
        usedSentences.add(nextSentence.id);
      }
    }
    
    // If we still need more sentences, fill with random from any word
    if (session.length < targetSize) {
      const allSentences = Object.values(sentencesByWord).flat();
      const shuffled = [...allSentences].sort(() => Math.random() - 0.5);
      
      for (const sentence of shuffled) {
        if (session.length >= targetSize) break;
        if (!usedSentences.has(sentence.id)) {
          session.push({
            ...sentence,
            reviewType: 'random'
          });
          usedSentences.add(sentence.id);
        }
      }
    }
    
    return session;
  };

  // Get progress statistics for a word
  const getWordStats = (wordId) => {
    const progress = wordProgress[wordId];
    if (!progress) return null;
    
    const getSuccessRate = (correct, attempts) => attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
    
    const level1Success = getSuccessRate(progress.level1Correct, progress.level1Attempts);
    const level2Success = getSuccessRate(progress.level2Correct, progress.level2Attempts);
    const level3Success = getSuccessRate(progress.level3Correct, progress.level3Attempts);
    const level4Success = getSuccessRate(progress.level4Correct, progress.level4Attempts);
    const level5Success = getSuccessRate(progress.level5Correct, progress.level5Attempts);
    
    const overallSuccessRate = progress.totalAttempts > 0
      ? Math.round((progress.correctCount / progress.totalAttempts) * 100)
      : 0;
    
    return {
      level1Success,
      level2Success,
      level3Success,
      level4Success,
      level5Success,
      overallSuccessRate,
      reviewStreak: progress.reviewStreak || 0,
      nextReview: progress.nextReview,
      lastReviewed: progress.lastReviewed,
      unlockedLevels: progress.unlockedLevels || [1],
      currentDifficulty: progress.currentDifficulty || 1
    };
  };

  // Get progress steps (for display)
  const getWordProgressSteps = (wordId) => {
    const progress = wordProgress[wordId];
    if (!progress) {
      return {
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        level5: 0,
        total: 0
      };
    }
    
    return {
      level1: progress.level1Correct || 0,
      level2: progress.level2Correct || 0,
      level3: progress.level3Correct || 0,
      level4: progress.level4Correct || 0,
      level5: progress.level5Correct || 0,
      total: (progress.level1Correct || 0) + 
             (progress.level2Correct || 0) + 
             (progress.level3Correct || 0) + 
             (progress.level4Correct || 0) + 
             (progress.level5Correct || 0)
    };
  };

  // Check if all words in a level are mastered
  const isLevelComplete = (levelId, wordIds) => {
    if (isStarterLevel(levelId)) return true;
    if (!wordIds || wordIds.length === 0) return false;
    
    return wordIds.every(wordId => {
      const progress = wordProgress[wordId];
      return progress && progress.status === WORD_STATUS.MASTERED;
    });
  };

  // Unlock next level if current is complete
  const checkAndUnlockNextLevel = (currentLevelId, nextLevelId, wordIds) => {
    if (isLevelComplete(currentLevelId, wordIds) && !unlockedLevels.includes(nextLevelId)) {
      setUnlockedLevels(prev => [...prev, nextLevelId].sort());
      return true;
    }
    return false;
  };

  // Get progress for display
  const getWordProgress = (wordId, levelId) => {
    if (isStarterLevel(levelId)) {
      return null;
    }
    return wordProgress[wordId] || initializeWordProgress();
  };

  return {
    wordProgress,
    currentLevel,
    unlockedLevels,
    setCurrentLevel,
    recordAttempt,
    isLevelComplete,
    checkAndUnlockNextLevel,
    generateReviewSession,
    getWordProgress,
    getWordProgressSteps,
    getWordStats,
    DIFFICULTY,
    WORD_STATUS
  };
}