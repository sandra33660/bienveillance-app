// src/App.jsxMore actionsAdd commentMore actions
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const messages = [
  "Tu es une personne précieuse.",
  "Chaque jour est une nouvelle opportunité.",
  "Tu as le droit de prendre soin de toi.",
  "Tes efforts comptent, même les plus petits.",
  "Tu es aimé, même quand tu en doutes.",  "Tu es digne d'amour et de respect, chaque jour.",
  "Ce que tu vis aujourd'hui n'efface pas tout ce que tu es.",
  "Tu as le droit de te reposer. Ton bien-être compte.",
  "Même les petites avancées sont des victoires."
];

function App() {
  const [message, setMessage] = useState("");

  const afficherMessage = () => {
    const aleatoire = Math.floor(Math.random() * messages.length);
    setMessage(messages[aleatoire]);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    script.charset = "UTF-8";
    script.setAttribute("data-sdk-integration-source", "button-factory");

    script.onload = () => {
      if (window.PayPal && window.PayPal.Donation) {
        window.PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: 'N657T5L5MCJ56',
          image: {
            src: 'https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif',
            alt: 'Bouton Faites un don avec PayPal',
            title: 'PayPal - The safer, easier way to pay online!'
          }
        }).render('#donate-button');
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-300 via-indigo-200 to-pink-200">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Un peu de bienveillance ✨</h1>

      <button
        onClick={afficherMessage}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
      >
        Affiche un message
      </button>
      
      {message ? (
      <motion.p
        className="mt-6 text-lg text-purple-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
          {message}
      </motion.p>

      ) : (
      <p className="mt-6 text-lg text-purple-700">
        Chaque jour est une nouvelle opportunité.
      </p>
      )}

      <div className="mt-10" id="donate-button-container">
        <div id="donate-button"></div>
      </div>
    </main>
  );
}

export default App;
