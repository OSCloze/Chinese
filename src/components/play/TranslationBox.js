// src/components/play/TranslationBox.js
import React from 'react';

export default function TranslationBox({ word, onClose }) {
  if (!word) return null;

  return (
    <div className="translation-box">
      <div className="translation-header">
        <span className="translation-word">{word.text}</span>
        <span className="translation-pinyin">{word.pinyin}</span>
        <button 
          className="translation-close"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div className="translation-meaning">
        {word.meaning}
      </div>
    </div>
  );
}