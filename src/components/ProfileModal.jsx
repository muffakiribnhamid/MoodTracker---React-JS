import React, { useState, useEffect } from "react";

const ProfileModal = ({ show, setShow, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.userName || '',  // Ensure the field name matches the database key
    mood: user?.mood || 'neutral',
  });

  useEffect(() => {
    if (user) {
      setFormData({ 
        name: user.name, 
        username: user.userName,  // Corrected the typo here
        mood: user.mood 
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Validate if the username exists before saving
    if (!formData.username) {
      toast.error("Please enter a valid username.");
      return;
    }

    // Ensure formData is not undefined
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Your Profile</h2>
        <form>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="inputField mb-4"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="inputField mb-4"
          />
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="inputField mb-4"
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="neutral">Neutral</option>
          </select>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
