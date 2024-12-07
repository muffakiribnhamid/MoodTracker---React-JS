import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const [mood,setMood] = useState('happy')
  const navigate = useNavigate(); // Navigation hook
  

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh on submit

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Retrieve the registered user's details

      const userRef = ref(db, 'users/' + user.uid);

      await set(userRef , {
        name : name,
        username : username,
        mood : mood,
        email : email
      })

      // console.log(user);
      toast.success("Signup successful! Redirecting to login...",);
      navigate("/home"); // Redirect to the login page
    } catch (error) {
      // console.error("Error during signup:", error);
      toast.error("Error creating account. Please try again.", error);
      console.log(error);
      
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col mt-20 justify-center">
        <img
          className="imgMain"
          width="200px"
          src="https://www.rubaitulazad.com/wp-content/uploads/2023/04/fire_1f525.png"
          alt="Mood Tracker"
        />
        <h2 className="font-bold text-center mt-10 text-4xl">Mood Tracker</h2>
        <p className="text-center pt-5">See how other people are feeling online ):</p>
      </div>

      <div className="signup-container">
        <form className="flex flex-col mt-20" onSubmit={onSubmit}>
          <input
          type="text"
          placeholder="Name"
          max={8}
          value={name}
          onChange={(e) => setName(e.target.value)}/>

          <input
          type="text"
          placeholder="Username"
          value={username}
          max={12}
          onChange={(e) => setUsername(e.target.value)}
          />

          <select
          className="bg-red-500 h-10 p-2 m-3"
          value={mood}
          onChange={(e) => setMood(e.target.value)} >
            <option value='happy'>Happy</option>
            <option value='sad'>Sad</option>
            <option value='neutral'>Neutral</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="bg-red-600 w-32 justify-center hover:bg-black transition-all text-white p-2"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-10">
          Already a user?{" "}
          <u className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </u>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
