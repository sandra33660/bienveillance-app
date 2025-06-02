import React, { useState } from 'react';

const messages = [
  "Tu es une personne précieuse.",
  "Chaque jour est une nouvelle opportunité.",
  "Tu as le droit de prendre soin de toi.",
  "Tes efforts comptent, même les plus petits.",
  "Tu es aimé, même quand tu en doutes."
];

export default function App() {
  const [message, setMessage] = useState("");

  const generateMessage = () => {
    const index = Math.floor(Math.random() * messages.length);
    setMessage(messages[index]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-purple-50">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Un peu de bienveillance ✨</h1>
      <button 
        onClick={generateMessage}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Affiche un message
      </button>
      {message && (
        <p className="mt-6 text-lg text-purple-700">{message}</p>
      )}
    </div>
  );
}