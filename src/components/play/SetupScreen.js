// src/components/play/SetupScreen.js
import React from 'react';
import { useApp } from '../../context/AppContext';
import { isLevelUnlocked } from '../../utils/sentenceHelpers';

export default function SetupScreen({ 
  sessionSize, 
  setSessionSize, 
  practiceLevel, 
  setPracticeLevel,
  onStart 
}) {
  const { levels, completedLevels } = useApp();

  return (
    <div className="play-content play-content--config">
      <div className="play-config">
        <h2 className="play-config-title">New Session</h2>
        
        {/* Level Selector Dropdown */}
        <div className="play-config-row">
          <label htmlFor="practiceLevel" className="play-config-label">
            Practice Level
          </label>
          <select 
            id="practiceLevel" 
            className="play-config-select"
            value={practiceLevel}
            onChange={(e) => setPracticeLevel(Number(e.target.value))}
          >
            <option value={0}>All Available Levels</option>
            {levels.map((level) => {
              const unlocked = isLevelUnlocked(level.id, completedLevels);
              return (
                <option 
                  key={level.id} 
                  value={level.id} 
                  disabled={!unlocked}
                >
                  Level {level.id}{level.id === 1 ? ' (Foundation)' : ''} 
                  {!unlocked ? ' (Locked)' : ''}
                </option>
              );
            })}
          </select>
        </div>
        
        {/* Number of Questions Dropdown */}
        <div className="play-config-row">
          <label htmlFor="sessionSize" className="play-config-label">
            Number of questions
          </label>
          <select 
            id="sessionSize" 
            className="play-config-select"
            value={sessionSize}
            onChange={(e) => setSessionSize(Number(e.target.value))}
          >
            <option value={5}>5 questions</option>
            <option value={10}>10 questions</option>
            <option value={20}>20 questions</option>
          </select>
        </div>
        
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={onStart}
        >
          Start Session
        </button>
      </div>
    </div>
  );
}