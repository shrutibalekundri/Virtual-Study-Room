import React from 'react';

function QuoteCard() {
  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">💡 Motivation</h2>
      <blockquote className="italic text-gray-700">
        "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success." <br />— Dwayne Johnson
      </blockquote>
    </div>
  );
}

export default QuoteCard;
