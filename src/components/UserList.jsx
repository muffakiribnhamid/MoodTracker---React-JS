import React, { useEffect, useState } from "react";
import { ref, onValue, push } from "firebase/database";
import { db } from "../../firebaseConfig";
import UserCard from "./UserCard";
import { toast } from "react-toastify";

const UserList = ({ currentUserID }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        const userList = Object.entries(snapshot.val()).map(([key, value]) => ({
          userId: key,
          ...value,
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handleWave = (receiverId) => {
    const waveData = { senderId: currentUserID, timestamp: Date.now() };
    push(ref(db, `waves/${receiverId}`), waveData)
      .then(() => toast.success("Wave sent! 👋"))
      .catch((error) => toast.error("Error sending wave: " + error.message));
  };

  return (
    <div className="user-list grid grid-cols-1 gap-4 p-6">
      {users.filter((user) => user.userId !== currentUserID).map((user) => (
        <UserCard
          key={user.userId}
          name={user.name}
          userName={user.username}
          mood={user.mood}
          onWave={() => handleWave(user.userId)}
        />
      ))}
    </div>
  );
};

export default UserList;
