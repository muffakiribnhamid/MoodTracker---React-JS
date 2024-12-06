import React, { useState, useEffect } from 'react';

const ProfileModal = ({ show, setShow, user, onSave }) => {
    const [formData, setFormData] = useState({
        name: user?.name || '',
        username: user?.username || '',
        mood: user?.mood || 'neutral',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                username: user.username || '',
                mood: user.mood || 'neutral',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4 text-center">Edit Your Profile</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Mood</label>
                        <select
                            name="mood"
                            value={formData.mood}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="happy">Happy</option>
                            <option value="neutral">Neutral</option>
                            <option value="sad">Sad</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Save
                    </button>
                </form>
                <button
                    onClick={() => setShow(false)}
                    className="mt-4 text-red-500 underline text-sm"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ProfileModal;
