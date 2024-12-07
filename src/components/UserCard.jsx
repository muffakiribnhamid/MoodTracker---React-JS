import React from "react";

const UserCard = ({ userName, name, mood, onWave }) => {
  const moodImages = {
    happy: "https://bgr.com/wp-content/uploads/2017/07/smiley-stars.png",
    sad: "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1571606093",
    neutral: "https://emojiisland.com/cdn/shop/products/Neutral_Face_Emoji_grande.png?v=1571606037"
  };

  return (
    <div className="cardMain flex justify-between p-6 rounded-lg bg-gray-300 my-6">
      <div className=" left flex flex-col justify-center">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-opacity-80 text-red-500">@{userName}</p>
        <p>Feeling {mood}</p>
        <button onClick={onWave} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Wave 👋
        </button>
      </div>
      <div className="right flex justify-center items-center">
        <img width={80} height={80} src={moodImages[mood]} alt={mood} className="rounded-full object-cover" />
      </div>
    </div>
  );
};

export default UserCard;
