import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { db } from '../../firebaseConfig';
import { get, ref, set } from 'firebase/database';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import ProfileModal from './ProfileModal';

const Home = () => {
    const [userData, setUserData] = useState([]);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userRef = ref(db, 'users');
            try {
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const users = snapshot.val();
                    setUserData(Object.values(users));
                    const currentUserUID = getAuth().currentUser?.uid;
                    if (currentUserUID) {
                        setCurrentUser(users[currentUserUID]);
                    }
                }
            } catch (error) {
                toast.error('Error fetching user data');
            }
        };
        fetchData();
    }, []);

    const handleSave = async (updatedData) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const userID = user.uid;
            const userRef = ref(db, `users/${userID}`);
            try {
                await set(userRef, updatedData);
                setCurrentUser(updatedData); // Directly update the state
                toast.success('Profile updated successfully!');
                toast.success('Refresh the page to see effect!');
                
                setShowProfileModal(false);
            } catch (error) {
                console.error(error);
                toast.error('Error updating profile');
            }
        } else {
            toast.error('No current user');
        }
    };

    return (
        <div className="main">
            <div className="header flex justify-around mt-10">
                <div className="flex gap-5">
                    <img
                        width={50}
                        src="https://www.rubaitulazad.com/wp-content/uploads/2023/04/fire_1f525.png"
                        alt=""
                    />
                    <p className="content-center">Mood Tracker</p>
                </div>
                <button
                    onClick={() => currentUser ? setShowProfileModal(true) : toast.error('No current user')}
                    className="profile cursor-pointer underline"
                >
                    Update Your Profile
                </button>
            </div>

            <div className="mainScreenCards">
                {userData.length > 0 ? (
                    userData.map((user, index) => (
                        <UserCard key={index} userName={user.username} name={user.name} mood={user.mood} />
                    ))
                ) : (
                    <p>Loading........</p>
                )}
            </div>

            {showProfileModal && (
                <ProfileModal
                    show={showProfileModal}
                    setShow={setShowProfileModal}
                    user={currentUser}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default Home;
