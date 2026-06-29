import React from 'react';

function StatsCard() {
  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Your Stats</h2>
      <ul className="space-y-2">
        <li>🎯 Focus Sessions: <strong>4</strong></li>
        <li>⏳ Total Time: <strong>3h 20min</strong></li>
        <li>🔥 Streak: <strong>3 days</strong></li>
      </ul>
    </div>
  );
}

export default StatsCard;
