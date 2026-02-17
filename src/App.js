// src/App.js
import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navigation from './components/layout/Navigation';
import PlayPage from './pages/PlayPage';
import WordsPage from './pages/WordsPage';
import SentencesPage from './pages/SentencesPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function AppContent() {
  const { currentPage } = useApp();

  return (
    <div className="app">
      <Navigation />
      <div className="content">
        {currentPage === 'play' && <PlayPage />}
        {currentPage === 'words' && <WordsPage />}
        {currentPage === 'levels' && <SentencesPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;