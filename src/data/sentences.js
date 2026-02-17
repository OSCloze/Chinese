// src/data/sentences.js
export const sentences = [
    // ===== LEVEL 1: FOUNDATION WORDS =====
    // All sentences use only Level 1 words (IDs 1-20, excluding 很)
  
    // 我 (I/me) - ID 1
    {
      id: 101,
      targetWordId: 1,
      blankWordId: 1,
      level: 1,
      difficulty: 1,
      sentence: "_____ 是人。",
      answer: "我",
      pinyin: "wǒ shì rén",
      nativeSentence: "I am a person.",
      explanation: "我 means 'I' or 'me'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "是", wordId: 5 },
        { text: "人", wordId: 17 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 你 (you) - ID 2
    {
      id: 102,
      targetWordId: 2,
      blankWordId: 2,
      level: 1,
      difficulty: 1,
      sentence: "_____ 是人。",
      answer: "你",
      pinyin: "nǐ shì rén",
      nativeSentence: "You are a person.",
      explanation: "你 means 'you'.",
      words: [
        { text: "你", wordId: 2 },
        { text: "是", wordId: 5 },
        { text: "人", wordId: 17 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 他 (he/him) - ID 3
    {
      id: 103,
      targetWordId: 3,
      blankWordId: 3,
      level: 1,
      difficulty: 1,
      sentence: "_____ 是人。",
      answer: "他",
      pinyin: "tā shì rén",
      nativeSentence: "He is a person.",
      explanation: "他 means 'he' or 'him'.",
      words: [
        { text: "他", wordId: 3 },
        { text: "是", wordId: 5 },
        { text: "人", wordId: 17 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 她 (she/her) - ID 4
    {
      id: 104,
      targetWordId: 4,
      blankWordId: 4,
      level: 1,
      difficulty: 1,
      sentence: "_____ 是人。",
      answer: "她",
      pinyin: "tā shì rén",
      nativeSentence: "She is a person.",
      explanation: "她 means 'she' or 'her'.",
      words: [
        { text: "她", wordId: 4 },
        { text: "是", wordId: 5 },
        { text: "人", wordId: 17 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 是 (to be) - ID 5
    {
      id: 105,
      targetWordId: 5,
      blankWordId: 5,
      level: 1,
      difficulty: 1,
      sentence: "我 _____ 人。",
      answer: "是",
      pinyin: "wǒ shì rén",
      nativeSentence: "I am a person.",
      explanation: "是 means 'am/is/are'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "是", wordId: 5 },
        { text: "人", wordId: 17 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 有 (to have) - ID 6
    {
      id: 106,
      targetWordId: 6,
      blankWordId: 6,
      level: 1,
      difficulty: 1,
      sentence: "我 _____ 水。",
      answer: "有",
      pinyin: "wǒ yǒu shuǐ",
      nativeSentence: "I have water.",
      explanation: "有 means 'to have'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "有", wordId: 6 },
        { text: "水", wordId: 19 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 在 (to be at) - ID 7
    {
      id: 107,
      targetWordId: 7,
      blankWordId: 7,
      level: 1,
      difficulty: 1,
      sentence: "我 _____ 家。",
      answer: "在",
      pinyin: "wǒ zài jiā",
      nativeSentence: "I am at home.",
      explanation: "在 means 'to be at'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "在", wordId: 7 },
        { text: "家", wordId: 18 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 去 (to go) - ID 8
    {
      id: 108,
      targetWordId: 8,
      blankWordId: 8,
      level: 1,
      difficulty: 1,
      sentence: "我 _____ 家。",
      answer: "去",
      pinyin: "wǒ qù jiā",
      nativeSentence: "I go home.",
      explanation: "去 means 'to go'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "去", wordId: 8 },
        { text: "家", wordId: 18 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 来 (to come) - ID 9
    {
      id: 109,
      targetWordId: 9,
      blankWordId: 9,
      level: 1,
      difficulty: 1,
      sentence: "你 _____ 家。",
      answer: "来",
      pinyin: "nǐ lái jiā",
      nativeSentence: "You come home.",
      explanation: "来 means 'to come'.",
      words: [
        { text: "你", wordId: 2 },
        { text: "来", wordId: 9 },
        { text: "家", wordId: 18 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 的 (possession particle) - ID 10
    {
      id: 110,
      targetWordId: 10,
      blankWordId: 10,
      level: 1,
      difficulty: 2,
      sentence: "他是我 _____ 朋友。",
      answer: "的",
      pinyin: "tā shì wǒ de péng you",
      nativeSentence: "He is my friend.",
      explanation: "的 shows possession.",
      words: [
        { text: "他", wordId: 3 },
        { text: "是", wordId: 5 },
        { text: "我", wordId: 1 },
        { text: "的", wordId: 10 },
        { text: "朋友", wordId: 20 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 了 (past/change marker) - ID 11
    {
      id: 111,
      targetWordId: 11,
      blankWordId: 11,
      level: 1,
      difficulty: 2,
      sentence: "我去 _____ 家。",
      answer: "了",
      pinyin: "wǒ qù le jiā",
      nativeSentence: "I went home.",
      explanation: "了 indicates past action.",
      words: [
        { text: "我", wordId: 1 },
        { text: "去", wordId: 8 },
        { text: "了", wordId: 11 },
        { text: "家", wordId: 18 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 吗 (question particle) - ID 12
    {
      id: 112,
      targetWordId: 12,
      blankWordId: 12,
      level: 1,
      difficulty: 1,
      sentence: "你有水 _____ ？",
      answer: "吗",
      pinyin: "nǐ yǒu shuǐ ma",
      nativeSentence: "Do you have water?",
      explanation: "吗 turns statements into questions.",
      words: [
        { text: "你", wordId: 2 },
        { text: "有", wordId: 6 },
        { text: "水", wordId: 19 },
        { text: "吗", wordId: 12 },
        { text: "？", isPunctuation: true }
      ]
    },
  
    // 不 (not) - ID 13
    {
      id: 113,
      targetWordId: 13,
      blankWordId: 13,
      level: 1,
      difficulty: 2,
      sentence: "我 _____ 去。",
      answer: "不",
      pinyin: "wǒ bù qù",
      nativeSentence: "I'm not going.",
      explanation: "不 negates verbs.",
      words: [
        { text: "我", wordId: 1 },
        { text: "不", wordId: 13 },
        { text: "去", wordId: 8 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 什么 (what) - ID 15
    {
      id: 115,
      targetWordId: 15,
      blankWordId: 15,
      level: 1,
      difficulty: 2,
      sentence: "你有 _____ ？",
      answer: "什么",
      pinyin: "nǐ yǒu shén me",
      nativeSentence: "What do you have?",
      explanation: "什么 means 'what'.",
      words: [
        { text: "你", wordId: 2 },
        { text: "有", wordId: 6 },
        { text: "什么", wordId: 15 },
        { text: "？", isPunctuation: true }
      ]
    },
  
    // 谁 (who) - ID 16
    {
      id: 116,
      targetWordId: 16,
      blankWordId: 16,
      level: 1,
      difficulty: 2,
      sentence: "他是 _____ ？",
      answer: "谁",
      pinyin: "tā shì shéi",
      nativeSentence: "Who is he?",
      explanation: "谁 means 'who'.",
      words: [
        { text: "他", wordId: 3 },
        { text: "是", wordId: 5 },
        { text: "谁", wordId: 16 },
        { text: "？", isPunctuation: true }
      ]
    },
  
    // 人 (person) - ID 17
    {
      id: 117,
      targetWordId: 17,
      blankWordId: 17,
      level: 1,
      difficulty: 1,
      sentence: "他是 _____ 。",
      answer: "人",
      pinyin: "tā shì rén",
      nativeSentence: "He is a person.",
      explanation: "人 means 'person'.",
      words: [
        { text: "他", wordId: 3 },
        { text: "是", wordId: 5 },
        { text: "人", wordId: 17 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 家 (home) - ID 18
    {
      id: 118,
      targetWordId: 18,
      blankWordId: 18,
      level: 1,
      difficulty: 1,
      sentence: "我在 _____ 。",
      answer: "家",
      pinyin: "wǒ zài jiā",
      nativeSentence: "I am at home.",
      explanation: "家 means 'home'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "在", wordId: 7 },
        { text: "家", wordId: 18 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 水 (water) - ID 19
    {
      id: 119,
      targetWordId: 19,
      blankWordId: 19,
      level: 1,
      difficulty: 1,
      sentence: "我有 _____ 。",
      answer: "水",
      pinyin: "wǒ yǒu shuǐ",
      nativeSentence: "I have water.",
      explanation: "水 means 'water'.",
      words: [
        { text: "我", wordId: 1 },
        { text: "有", wordId: 6 },
        { text: "水", wordId: 19 },
        { text: "。", isPunctuation: true }
      ]
    },
  
    // 朋友 (friend) - ID 20
    {
      id: 120,
      targetWordId: 20,
      blankWordId: 20,
      level: 1,
      difficulty: 1,
      sentence: "他是 _____ 。",
      answer: "朋友",
      pinyin: "tā shì péng you",
      nativeSentence: "He is a friend.",
      explanation: "朋友 means 'friend'.",
      words: [
        { text: "他", wordId: 3 },
        { text: "是", wordId: 5 },
        { text: "朋友", wordId: 20 },
        { text: "。", isPunctuation: true }
      ]
    },

    // ===== LEVEL 2 SENTENCES =====
// Uses Level 1 (IDs 1-20) + Level 2 (IDs 21-31)

// 爸爸 (dad) - ID 21
{
    id: 201,
    targetWordId: 21,
    blankWordId: 21,
    level: 2,
    difficulty: 1,
    sentence: "他是 _____ 。",
    answer: "爸爸",
    pinyin: "tā shì bà ba",
    nativeSentence: "He is dad.",
    explanation: "爸爸 means 'dad'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "是", wordId: 5 },
      { text: "爸爸", wordId: 21 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 妈妈 (mom) - ID 22
  {
    id: 202,
    targetWordId: 22,
    blankWordId: 22,
    level: 2,
    difficulty: 1,
    sentence: "她是 _____ 。",
    answer: "妈妈",
    pinyin: "tā shì mā ma",
    nativeSentence: "She is mom.",
    explanation: "妈妈 means 'mom'.",
    words: [
      { text: "她", wordId: 4 },
      { text: "是", wordId: 5 },
      { text: "妈妈", wordId: 22 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 大 (big) - ID 23
  {
    id: 203,
    targetWordId: 23,
    blankWordId: 23,
    level: 2,
    difficulty: 1,
    sentence: "家很 _____ 。",
    answer: "大",
    pinyin: "jiā hěn dà",
    nativeSentence: "Home is big.",
    explanation: "大 means 'big'.",
    words: [
      { text: "家", wordId: 18 },
      { text: "很", wordId: 25 },
      { text: "大", wordId: 23 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 小 (small) - ID 24
  {
    id: 204,
    targetWordId: 24,
    blankWordId: 24,
    level: 2,
    difficulty: 1,
    sentence: "水很 _____ 。",
    answer: "小",
    pinyin: "shuǐ hěn xiǎo",
    nativeSentence: "The water amount is small.",
    explanation: "小 means 'small'.",
    words: [
      { text: "水", wordId: 19 },
      { text: "很", wordId: 25 },
      { text: "小", wordId: 24 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 很 (very) - ID 25
  {
    id: 205,
    targetWordId: 25,
    blankWordId: 25,
    level: 2,
    difficulty: 2,
    sentence: "他 _____ 大。",
    answer: "很",
    pinyin: "tā hěn dà",
    nativeSentence: "He is very big.",
    explanation: "很 means 'very', used before adjectives.",
    words: [
      { text: "他", wordId: 3 },
      { text: "很", wordId: 25 },
      { text: "大", wordId: 23 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 今天 (today) - ID 26
  {
    id: 206,
    targetWordId: 26,
    blankWordId: 26,
    level: 2,
    difficulty: 1,
    sentence: "_____ 我在家。",
    answer: "今天",
    pinyin: "jīn tiān wǒ zài jiā",
    nativeSentence: "Today I am at home.",
    explanation: "今天 means 'today'.",
    words: [
      { text: "今天", wordId: 26 },
      { text: "我", wordId: 1 },
      { text: "在", wordId: 7 },
      { text: "家", wordId: 18 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 东西 (thing) - ID 27
  {
    id: 207,
    targetWordId: 27,
    blankWordId: 27,
    level: 2,
    difficulty: 1,
    sentence: "我有 _____ 。",
    answer: "东西",
    pinyin: "wǒ yǒu dōng xi",
    nativeSentence: "I have things.",
    explanation: "东西 means 'thing' or 'things'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "东西", wordId: 27 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 个 (measure word) - ID 28
  {
    id: 208,
    targetWordId: 28,
    blankWordId: 28,
    level: 2,
    difficulty: 2,
    sentence: "我有一 _____ 朋友。",
    answer: "个",
    pinyin: "wǒ yǒu yī gè péng you",
    nativeSentence: "I have a friend.",
    explanation: "个 is a common measure word.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "一", wordId: 29 },
      { text: "个", wordId: 28 },
      { text: "朋友", wordId: 20 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 一 (one) - ID 29
  {
    id: 209,
    targetWordId: 29,
    blankWordId: 29,
    level: 2,
    difficulty: 2,
    sentence: "我有 _____ 个家。",
    answer: "一",
    pinyin: "wǒ yǒu yī gè jiā",
    nativeSentence: "I have a home.",
    explanation: "一 means 'one'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "一", wordId: 29 },
      { text: "个", wordId: 28 },
      { text: "家", wordId: 18 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 吃 (eat) - ID 30
  {
    id: 210,
    targetWordId: 30,
    blankWordId: 30,
    level: 2,
    difficulty: 1,
    sentence: "我 _____ 东西。",
    answer: "吃",
    pinyin: "wǒ chī dōng xi",
    nativeSentence: "I eat things.",
    explanation: "吃 means 'to eat'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "吃", wordId: 30 },
      { text: "东西", wordId: 27 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 喜欢 (like) - ID 31
  {
    id: 211,
    targetWordId: 31,
    blankWordId: 31,
    level: 2,
    difficulty: 2,
    sentence: "我 _____ 他。",
    answer: "喜欢",
    pinyin: "wǒ xǐ huān tā",
    nativeSentence: "I like him.",
    explanation: "喜欢 means 'to like'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "喜欢", wordId: 31 },
      { text: "他", wordId: 3 },
      { text: "。", isPunctuation: true }
    ]
  },

// ===== LEVEL 3 SENTENCES =====
// Uses words from Levels 1-2 plus the target Level 3 word

// 好 (good) - ID 32
{
    id: 301,
    targetWordId: 32,
    blankWordId: 32,
    level: 3,
    difficulty: 1,
    sentence: "你 _____ 吗？",
    answer: "好",
    pinyin: "nǐ hǎo ma",
    nativeSentence: "How are you?",
    explanation: "好 means 'good'.",
    words: [
      { text: "你", wordId: 2 },
      { text: "好", wordId: 32 },
      { text: "吗", wordId: 12 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 这 (this) - ID 33
  {
    id: 302,
    targetWordId: 33,
    blankWordId: 33,
    level: 3,
    difficulty: 1,
    sentence: "_____ 是什么？",
    answer: "这",
    pinyin: "zhè shì shén me",
    nativeSentence: "What is this?",
    explanation: "这 means 'this'.",
    words: [
      { text: "这", wordId: 33 },
      { text: "是", wordId: 5 },
      { text: "什么", wordId: 15 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 那 (that) - ID 34
  {
    id: 303,
    targetWordId: 34,
    blankWordId: 34,
    level: 3,
    difficulty: 1,
    sentence: "_____ 是什么？",
    answer: "那",
    pinyin: "nà shì shén me",
    nativeSentence: "What is that?",
    explanation: "那 means 'that'.",
    words: [
      { text: "那", wordId: 34 },
      { text: "是", wordId: 5 },
      { text: "什么", wordId: 15 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 都 (all/both) - ID 35
  {
    id: 304,
    targetWordId: 35,
    blankWordId: 35,
    level: 3,
    difficulty: 2,
    sentence: "我和他 _____ 是人。",
    answer: "都",
    pinyin: "wǒ hé tā dōu shì rén",
    nativeSentence: "He and I are both people.",
    explanation: "都 means 'all' or 'both'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "和", wordId: 37 },
      { text: "他", wordId: 3 },
      { text: "都", wordId: 35 },
      { text: "是", wordId: 5 },
      { text: "人", wordId: 17 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 也 (also) - ID 36
  {
    id: 305,
    targetWordId: 36,
    blankWordId: 36,
    level: 3,
    difficulty: 2,
    sentence: "他 _____ 去。",
    answer: "也",
    pinyin: "tā yě qù",
    nativeSentence: "He is also going.",
    explanation: "也 means 'also'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "也", wordId: 36 },
      { text: "去", wordId: 8 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 和 (and) - ID 37
  {
    id: 306,
    targetWordId: 37,
    blankWordId: 37,
    level: 3,
    difficulty: 2,
    sentence: "我 _____ 他是朋友。",
    answer: "和",
    pinyin: "wǒ hé tā shì péng you",
    nativeSentence: "He and I are friends.",
    explanation: "和 means 'and'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "和", wordId: 37 },
      { text: "他", wordId: 3 },
      { text: "是", wordId: 5 },
      { text: "朋友", wordId: 20 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 看 (see) - ID 38
  {
    id: 307,
    targetWordId: 38,
    blankWordId: 38,
    level: 3,
    difficulty: 1,
    sentence: "我 _____ 东西。",
    answer: "看",
    pinyin: "wǒ kàn dōng xi",
    nativeSentence: "I look at things.",
    explanation: "看 means 'to see' or 'to look'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "看", wordId: 38 },
      { text: "东西", wordId: 27 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 听 (listen) - ID 39
  {
    id: 308,
    targetWordId: 39,
    blankWordId: 39,
    level: 3,
    difficulty: 1,
    sentence: "我 _____ 东西。",
    answer: "听",
    pinyin: "wǒ tīng dōng xi",
    nativeSentence: "I listen to things.",
    explanation: "听 means 'to listen'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "听", wordId: 39 },
      { text: "东西", wordId: 27 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 说 (speak) - ID 40
  {
    id: 309,
    targetWordId: 40,
    blankWordId: 40,
    level: 3,
    difficulty: 2,
    sentence: "他 _____ 什么？",
    answer: "说",
    pinyin: "tā shuō shén me",
    nativeSentence: "What does he say?",
    explanation: "说 means 'to speak'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "说", wordId: 40 },
      { text: "什么", wordId: 15 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 想 (want/think) - ID 41
  {
    id: 310,
    targetWordId: 41,
    blankWordId: 41,
    level: 3,
    difficulty: 1,
    sentence: "我 _____ 去。",
    answer: "想",
    pinyin: "wǒ xiǎng qù",
    nativeSentence: "I want to go.",
    explanation: "想 means 'to want' or 'to think'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "想", wordId: 41 },
      { text: "去", wordId: 8 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // ===== LEVEL 4 SENTENCES =====
  // Uses words from Levels 1-3 plus the target Level 4 word
  
  // 明天 (tomorrow) - ID 42
  {
    id: 401,
    targetWordId: 42,
    blankWordId: 42,
    level: 4,
    difficulty: 1,
    sentence: "我 _____ 去。",
    answer: "明天",
    pinyin: "wǒ míng tiān qù",
    nativeSentence: "I will go tomorrow.",
    explanation: "明天 means 'tomorrow'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "明天", wordId: 42 },
      { text: "去", wordId: 8 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 昨天 (yesterday) - ID 43
  {
    id: 402,
    targetWordId: 43,
    blankWordId: 43,
    level: 4,
    difficulty: 2,
    sentence: "我 _____ 去了。",
    answer: "昨天",
    pinyin: "wǒ zuó tiān qù le",
    nativeSentence: "I went yesterday.",
    explanation: "昨天 means 'yesterday'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "昨天", wordId: 43 },
      { text: "去", wordId: 8 },
      { text: "了", wordId: 11 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 做 (do/make) - ID 44
  {
    id: 403,
    targetWordId: 44,
    blankWordId: 44,
    level: 4,
    difficulty: 2,
    sentence: "他 _____ 什么？",
    answer: "做",
    pinyin: "tā zuò shén me",
    nativeSentence: "What does he do?",
    explanation: "做 means 'to do' or 'to make'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "做", wordId: 44 },
      { text: "什么", wordId: 15 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 买 (buy) - ID 45
  {
    id: 404,
    targetWordId: 45,
    blankWordId: 45,
    level: 4,
    difficulty: 1,
    sentence: "我 _____ 东西。",
    answer: "买",
    pinyin: "wǒ mǎi dōng xi",
    nativeSentence: "I buy things.",
    explanation: "买 means 'to buy'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "买", wordId: 45 },
      { text: "东西", wordId: 27 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 卖 (sell) - ID 46
  {
    id: 405,
    targetWordId: 46,
    blankWordId: 46,
    level: 4,
    difficulty: 1,
    sentence: "他 _____ 东西。",
    answer: "卖",
    pinyin: "tā mài dōng xi",
    nativeSentence: "He sells things.",
    explanation: "卖 means 'to sell'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "卖", wordId: 46 },
      { text: "东西", wordId: 27 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 多 (many) - ID 47
  {
    id: 406,
    targetWordId: 47,
    blankWordId: 47,
    level: 4,
    difficulty: 2,
    sentence: "他东西 _____ 。",
    answer: "多",
    pinyin: "tā dōng xi duō",
    nativeSentence: "He has many things.",
    explanation: "多 means 'many' or 'much'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "东西", wordId: 27 },
      { text: "多", wordId: 47 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 少 (few) - ID 48
  {
    id: 407,
    targetWordId: 48,
    blankWordId: 48,
    level: 4,
    difficulty: 2,
    sentence: "他东西 _____ 。",
    answer: "少",
    pinyin: "tā dōng xi shǎo",
    nativeSentence: "He has few things.",
    explanation: "少 means 'few' or 'little'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "东西", wordId: 27 },
      { text: "少", wordId: 48 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 二 (two) - ID 49
  {
    id: 408,
    targetWordId: 49,
    blankWordId: 49,
    level: 4,
    difficulty: 1,
    sentence: "我有 _____ 个朋友。",
    answer: "二",
    pinyin: "wǒ yǒu èr gè péng you",
    nativeSentence: "I have two friends.",
    explanation: "二 means 'two'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "二", wordId: 49 },
      { text: "个", wordId: 28 },
      { text: "朋友", wordId: 20 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 三 (three) - ID 50
  {
    id: 409,
    targetWordId: 50,
    blankWordId: 50,
    level: 4,
    difficulty: 1,
    sentence: "我有 _____ 个朋友。",
    answer: "三",
    pinyin: "wǒ yǒu sān gè péng you",
    nativeSentence: "I have three friends.",
    explanation: "三 means 'three'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "三", wordId: 50 },
      { text: "个", wordId: 28 },
      { text: "朋友", wordId: 20 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 四 (four) - ID 51
  {
    id: 410,
    targetWordId: 51,
    blankWordId: 51,
    level: 4,
    difficulty: 1,
    sentence: "我有 _____ 个朋友。",
    answer: "四",
    pinyin: "wǒ yǒu sì gè péng you",
    nativeSentence: "I have four friends.",
    explanation: "四 means 'four'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "四", wordId: 51 },
      { text: "个", wordId: 28 },
      { text: "朋友", wordId: 20 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // ===== LEVEL 5 SENTENCES =====
  // Uses words from Levels 1-4 plus the target Level 5 word
  
  // 时间 (time) - ID 52
  {
    id: 501,
    targetWordId: 52,
    blankWordId: 52,
    level: 5,
    difficulty: 1,
    sentence: "我有 _____ 。",
    answer: "时间",
    pinyin: "wǒ yǒu shí jiān",
    nativeSentence: "I have time.",
    explanation: "时间 means 'time'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "有", wordId: 6 },
      { text: "时间", wordId: 52 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 地方 (place) - ID 53
  {
    id: 502,
    targetWordId: 53,
    blankWordId: 53,
    level: 5,
    difficulty: 2,
    sentence: "他在什么 _____ ？",
    answer: "地方",
    pinyin: "tā zài shén me dì fang",
    nativeSentence: "Where is he?",
    explanation: "地方 means 'place'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "在", wordId: 7 },
      { text: "什么", wordId: 15 },
      { text: "地方", wordId: 53 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 名字 (name) - ID 54
  {
    id: 503,
    targetWordId: 54,
    blankWordId: 54,
    level: 5,
    difficulty: 2,
    sentence: "他叫什么 _____ ？",
    answer: "名字",
    pinyin: "tā jiào shén me míng zi",
    nativeSentence: "What is his name?",
    explanation: "名字 means 'name'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "叫", wordId: 62 },
      { text: "什么", wordId: 15 },
      { text: "名字", wordId: 54 },
      { text: "？", isPunctuation: true }
    ]
  },
  
  // 岁 (years old) - ID 55
  {
    id: 504,
    targetWordId: 55,
    blankWordId: 55,
    level: 5,
    difficulty: 1,
    sentence: "他三 _____ 。",
    answer: "岁",
    pinyin: "tā sān suì",
    nativeSentence: "He is three years old.",
    explanation: "岁 means 'years old'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "三", wordId: 50 },
      { text: "岁", wordId: 55 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 高 (tall) - ID 56
  {
    id: 505,
    targetWordId: 56,
    blankWordId: 56,
    level: 5,
    difficulty: 2,
    sentence: "他很 _____ 。",
    answer: "高",
    pinyin: "tā hěn gāo",
    nativeSentence: "He is tall.",
    explanation: "高 means 'tall' or 'high'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "很", wordId: 25 },
      { text: "高", wordId: 56 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 矮 (short) - ID 57
  {
    id: 506,
    targetWordId: 57,
    blankWordId: 57,
    level: 5,
    difficulty: 2,
    sentence: "他很 _____ 。",
    answer: "矮",
    pinyin: "tā hěn ǎi",
    nativeSentence: "He is short.",
    explanation: "矮 means 'short' (height).",
    words: [
      { text: "他", wordId: 3 },
      { text: "很", wordId: 25 },
      { text: "矮", wordId: 57 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 新 (new) - ID 58
  {
    id: 507,
    targetWordId: 58,
    blankWordId: 58,
    level: 5,
    difficulty: 2,
    sentence: "我的东西很 _____ 。",
    answer: "新",
    pinyin: "wǒ de dōng xi hěn xīn",
    nativeSentence: "My things are new.",
    explanation: "新 means 'new'.",
    words: [
      { text: "我", wordId: 1 },
      { text: "的", wordId: 10 },
      { text: "东西", wordId: 27 },
      { text: "很", wordId: 25 },
      { text: "新", wordId: 58 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 旧 (old) - ID 59
  {
    id: 508,
    targetWordId: 59,
    blankWordId: 59,
    level: 5,
    difficulty: 2,
    sentence: "我的东西很 _____ 。",
    answer: "旧",
    pinyin: "wǒ de dōng xi hěn jiù",
    nativeSentence: "My things are old.",
    explanation: "旧 means 'old' (not new).",
    words: [
      { text: "我", wordId: 1 },
      { text: "的", wordId: 10 },
      { text: "东西", wordId: 27 },
      { text: "很", wordId: 25 },
      { text: "旧", wordId: 59 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 长 (long) - ID 60
  {
    id: 509,
    targetWordId: 60,
    blankWordId: 60,
    level: 5,
    difficulty: 2,
    sentence: "他的东西很 _____ 。",
    answer: "长",
    pinyin: "tā de dōng xi hěn cháng",
    nativeSentence: "His things are long.",
    explanation: "长 means 'long'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "的", wordId: 10 },
      { text: "东西", wordId: 27 },
      { text: "很", wordId: 25 },
      { text: "长", wordId: 60 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 短 (short) - ID 61
  {
    id: 510,
    targetWordId: 61,
    blankWordId: 61,
    level: 5,
    difficulty: 2,
    sentence: "他的东西很 _____ 。",
    answer: "短",
    pinyin: "tā de dōng xi hěn duǎn",
    nativeSentence: "His things are short.",
    explanation: "短 means 'short' (length).",
    words: [
      { text: "他", wordId: 3 },
      { text: "的", wordId: 10 },
      { text: "东西", wordId: 27 },
      { text: "很", wordId: 25 },
      { text: "短", wordId: 61 },
      { text: "。", isPunctuation: true }
    ]
  },
  
  // 叫 (to be called) - ID 62
  {
    id: 511,
    targetWordId: 62,
    blankWordId: 62,
    level: 5,
    difficulty: 2,
    sentence: "他 _____ 什么？",
    answer: "叫",
    pinyin: "tā jiào shén me",
    nativeSentence: "What is he called?",
    explanation: "叫 means 'to be called'.",
    words: [
      { text: "他", wordId: 3 },
      { text: "叫", wordId: 62 },
      { text: "什么", wordId: 15 },
      { text: "？", isPunctuation: true }
    ]
  }



  ];


  
  
  // Helper functions
  export const getSentencesForWord = (wordId) => {
    return sentences.filter(s => s.targetWordId === wordId);
  };
  
  export const getSentencesForLevel = (level) => {
    return sentences.filter(s => s.level === level);
  };