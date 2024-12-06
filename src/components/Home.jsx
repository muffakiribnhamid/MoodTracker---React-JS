import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { db } from '../../firebaseConfig'
import { get, ref } from 'firebase/database'
import { toast } from 'react-toastify'
import MyProfile from './MyProfile'

const Home = () => {

    const [userData,setuserData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const userRef = ref(db,'users') // path to users

            try {
                const snapshot = await get(userRef)
                if(snapshot.exists()) {
                    setuserData(Object.values(snapshot.val()))
                }
                else {
                    toast.error('There is no current user!')
                }   
            }        
            catch {
                toast.error('There is no current user!')

            }
        };
        fetchData();
    },[])
  return (

    <>
    <div className="main">
        <div className="header flex justify-around mt-10 ">
            <div className="flex gap-5">
            <img width={50} src="https://www.rubaitulazad.com/wp-content/uploads/2023/04/fire_1f525.png" alt="" />
            <p className='content-center'>Mood Tracker</p>
            </div>
            
            {/* <MyProfile/> */}
            <p className='profile underline'>Your Profile</p>
        </div>

        <div className="mainScreenCards">
            {userData.length > 0 ? (
                userData.map((user,index) => (
                    <UserCard key={index} userName={user.username} name={user.name} mood={user.mood}/>
                )) 
            ) :  (
                <p>Loading........</p>
            )}   
                 </div>
    </div>
    </>
  )
}

export default Home