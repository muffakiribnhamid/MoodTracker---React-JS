import React from 'react';

const UserCard = ({ userName, name, mood }) => {

    function setMood(mood) {
        if (mood === 'happy') {
            return "https://bgr.com/wp-content/uploads/2017/07/smiley-stars.png";
        }
        else if (mood === 'sad') {
            return "https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1571606093";
        }
        else {
            return 'https://emojiisland.com/cdn/shop/products/Neutral_Face_Emoji_grande.png?v=1571606037';
        }
    }

    return (
        <div className="cardMain flex justify-between p-6 rounded-lg bg-gray-300 my-6">
            <div className="left flex flex-col justify-center">
                <h1 className='text-2xl'>{name}</h1>
                <p className='text-opacity-80 text-red-500'>@{userName}</p>
                <p>Feeling {mood}</p>
            </div>
            <div className="right flex justify-center items-center">
                <img
                    width={80}
                    height={80}
                    src={setMood(mood)}
                    alt={mood}
                    style={{ objectFit: 'cover', borderRadius: '50%' }} // Ensures image has a circular shape
                />
            </div>
        </div>
    );
}

export default UserCard;
