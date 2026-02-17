// src/components/layout/Navigation.js
import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Navigation() {
  const { currentPage, setCurrentPage } = useApp();

  const navItems = [
    { id: 'play', label: 'Play' },
    { id: 'words', label: 'Words' },
    { id: 'levels', label: 'Sentences' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <nav className="nav" aria-label="Main">
      {navItems.map(item => (
        <a
  href="#"
  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
  onClick={(e) => {
    e.preventDefault();
    setCurrentPage(item.id);
  }}
  /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
>
  {item.label}
</a>
      ))}
    </nav>
  );
}