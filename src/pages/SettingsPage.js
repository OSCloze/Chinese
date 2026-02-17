// src/pages/SettingsPage.js
import React from 'react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const { 
    wordMastery, 
    answeredSentences, 
    resetAllProgress,
    setCurrentPage 
  } = useApp();

  const handleReset = () => {
    if (window.confirm('Are you absolutely sure? This will reset ALL your learning progress and cannot be undone.')) {
      resetAllProgress();
      alert('All progress has been reset!');
      setCurrentPage('words');
    }
  };

  return (
    <section className="view is-active" data-view="settings">
      <header className="header">
        <h1>Settings</h1>
        <p className="header-desc">Manage your learning progress and app preferences.</p>
      </header>

      <div className="settings-panel">
        <h2 className="settings-subtitle">Progress</h2>
        <p className="settings-desc">Reset all your learning progress. This will clear:</p>
        <ul className="settings-list">
          <li>✓ Word mastery counts (all correct answers)</li>
          <li>✓ Revealed sentences</li>
          <li>✓ Completed sentence levels</li>
          <li>✓ Session history</li>
        </ul>
        <p className="settings-warning">
          ⚠️ This action cannot be undone. All progress will be permanently lost.
        </p>
        
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={handleReset}
        >
          Reset All Progress
        </button>
        
        <h2 className="settings-subtitle" style={{ marginTop: '2rem' }}>About</h2>
        <p className="settings-desc">
          <strong>Cloze Chinese</strong> • Version 1.0
        </p>
        <p className="settings-desc">
          A fill-in-the-blank language learning app for Simplified Chinese. 
          Master words by correctly answering sentences, and unlock new levels as you progress.
        </p>
        <p className="settings-desc" style={{ marginTop: '1rem', color: 'var(--accent2)' }}>
          🎯 {Object.keys(wordMastery).length} words practiced · {answeredSentences.length} sentences revealed
        </p>
      </div>
    </section>
  );
}