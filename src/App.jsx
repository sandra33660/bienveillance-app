// src/App.jsx import React, { useState } from 'react';
 
const messages = [ "Tu es digne d'amour et de respect, chaque jour.", "Ce que tu vis aujourd'hui n'efface pas tout ce que tu es.", "Tu as le droit de te reposer. Ton bien-être compte.", "Même les petites avancées sont des victoires." ];
 
function App() { const [message, setMessage] = useState("");
 
const afficherMessage = () => { const aleatoire = Math.floor(Math.random() * messages.length); setMessage(messages[aleatoire]); };
 
return ( <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 text-center p-6"> <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-md">Un peu de bienveillance ✨</h1> <button
onClick={afficherMessage}
className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
> Affiche un message </button> <p className="mt-8 text-xl text-gray-800 max-w-2xl italic"> {message || "Chaque jour est une nouvelle opportunité."} </p>
 
<div className="mt-12" id="donate-button-container">
    <div id="donate-button"></div>
  </div>
 
  <script
src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
    charset="UTF-8"
    data-sdk-integration-source="button-factory"
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: 'N657T5L5MCJ56',
          image: {
src: 'https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif',
            alt: 'Bouton Faites un don avec PayPal',
            title: 'PayPal - The safer, easier way to pay online!'
          }
        }).render('#donate-button');`
    }}
  />
</main>
 
); }
 
export default App;
