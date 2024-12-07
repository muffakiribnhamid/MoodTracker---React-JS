import React from "react";

const WavesPopup = ({ wavesList, userNames, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Who Waved At You</h2>
      <ul className="divide-y divide-gray-200">
        {wavesList.length > 0 ? (
          wavesList.map((wave, index) => (
            <li key={index} className="py-2 text-center">
              {userNames[wave.senderId] ? `${userNames[wave.senderId]} waved at you! 👋` : 'Loading...'}
            </li>
          ))
        ) : (
          <li className="py-2 text-center text-gray-500">No waves yet! 😔</li>
        )}
      </ul>
      <button onClick={onClose} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Close
      </button>
    </div>
  </div>
);

export default WavesPopup;
