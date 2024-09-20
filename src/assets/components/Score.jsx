import React from 'react';

const Score = ({ score }) => {
  return (
    <div className="score-item">
      <p>
        <strong>Date:</strong> {score.date}, <strong>Score:</strong> {score.score}
      </p>
    </div>
  );
};

export default Score;
