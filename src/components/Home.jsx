import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { ref, get, set, push } from "firebase/database";
import { toast } from "react-toastify";
import ProfileModal from "./ProfileModal";
import WavesPopup from "./WavesPopup";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [wavesList, setWavesList] = useState([]);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showWavesPopup, setShowWavesPopup] = useState(false);
  const [userNames, setUserNames] = useState({});
  const [loading, setLoading] = useState(true);
  const currentUserID = getAuth().currentUser?.uid;
  const navigate = useNavigate();

  useEffect(() => {
    const user = getAuth().currentUser;
    if (!user) {
      navigate("/home");
    }

    const fetchUserData = async () => {
      try {
        setLoading(true);
        const userSnapshot = await get(ref(db, "users"));
        const userData = userSnapshot.val();
        if (userData) {
          const user = userData[currentUserID];
          setCurrentUser(user);
          fetchWaves(currentUserID);
        }
      } catch (error) {
        toast.error("Error fetching user data.");
      } finally {
        setLoading(false);
      }
    };

    const fetchWaves = async (userID) => {
      try {
        const wavesSnapshot = await get(ref(db, `waves/${userID}`));
        if (wavesSnapshot.exists()) {
          const waves = Object.values(wavesSnapshot.val());
          setWavesList(waves);
          fetchUserNames(waves);
        }
      } catch (error) {
        toast.error("Error fetching waves.");
      }
    };

    const fetchUserNames = async (waves) => {
      try {
        const userIds = waves.map((wave) => wave.senderId);
        const userDocs = await Promise.all(
          userIds.map((userId) => get(ref(db, `users/${userId}`)))
        );

        const names = {};
        userDocs.forEach((doc, index) => {
          if (doc.exists()) {
            names[userIds[index]] = doc.val().name;
          }
        });
        setUserNames(names);
      } catch (error) {
        toast.error("Error fetching user names.");
      }
    };

    fetchUserData();
  }, [currentUserID, navigate]);

  const handleSave = async (updatedData) => {
    if (!updatedData.username) {
      toast.error("Please enter a valid username.");
      return;
    }

    try {
      await set(ref(db, `users/${currentUserID}`), updatedData);
      setCurrentUser(updatedData);
      toast.success("Profile updated successfully!");
      setShowProfileModal(false);
    } catch (error) {
      toast.error("Error updating profile.");
      console.log(error);
      toast.error(error);
    }
  };

  const handleWave = async (receiverID) => {
    const waveData = { senderId: currentUserID, timestamp: Date.now() };
    try {
      await push(ref(db, `waves/${receiverID}`), waveData);
      toast.success("Wave sent!");
    } catch (error) {
      toast.error("Error sending wave.");
    }
  };

  const logout = async () => {
    try {
      await signOut(getAuth());
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center p-6 bg-gray-100 shadow-md sm:flex-wrap md:flex-nowrap">
        <h1 className="text-2xl font-bold sm:text-xl">Mood Tracker</h1>
        <div className="flex space-x-2 mt-4 sm:mt-2">
          <button
            onClick={() => setShowProfileModal(true)}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 text-sm sm:text-base"
          >
            Update Profile
          </button>
          <button
            onClick={() => setShowWavesPopup(true)}
            className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-700 text-sm sm:text-base"
          >
            Waves?
          </button>
          <button
            onClick={logout}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-700 text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="grid justify-center p-4">
        <UserList currentUserID={currentUserID} handleWave={handleWave} />
      </div>

      {showProfileModal && (
        <ProfileModal
          show={showProfileModal}
          setShow={setShowProfileModal}
          user={currentUser}
          onSave={handleSave}
        />
      )}

      {showWavesPopup && (
        <WavesPopup
          wavesList={wavesList}
          userNames={userNames}
          onClose={() => setShowWavesPopup(false)}
        />
      )}

      <footer className="p-6 bg-gray-100 text-center text-sm">
        <h1>
          Developed By{" "}
          <span className="underline">
            <a
              href="https://github.com/muffakiribnhamid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Muffakir Ibn Hamid
            </a>
          </span>
        </h1>
      </footer>
    </div>
  );
};

export default Home;
