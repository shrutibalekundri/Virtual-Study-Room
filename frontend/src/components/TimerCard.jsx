import React, { useState, useEffect } from 'react';

function TimerCard() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-3xl shadow-2xl text-center text-white">
      <h2 className="text-2xl font-extrabold mb-3 tracking-wide drop-shadow-lg">🎯 Focus Timer</h2>
      <p className="text-4xl font-mono font-semibold mb-6 bg-black bg-opacity-20 rounded-xl px-4 py-2 inline-block shadow-inner">
        {new Date(seconds * 1000).toISOString().substr(11, 8)}
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={toggle}
          className={`px-5 py-2 font-bold rounded-full transition-transform duration-300 transform hover:scale-105 focus:outline-none ${
            isActive
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              : 'bg-green-400 text-gray-900 hover:bg-green-300'
          }`}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={reset}
          className="px-5 py-2 font-bold rounded-full bg-red-500 text-white hover:bg-red-400 transition-transform duration-300 transform hover:scale-105 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerCard;
