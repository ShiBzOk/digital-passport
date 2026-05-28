import React from 'react';
import '../styles/EmptyState.css';

export default function EmptyState({ onReset }) {
  return (
    <div className="empty-state-container">
      <div className="empty-state-card">
        <h2 className="empty-title">No Result</h2>
        <p className="empty-subtitle">Go to the main page and add the countries.</p>
        <button className="empty-reset-btn" onClick={onReset}>
          Go Back
        </button>
      </div>
    </div>
  );
}