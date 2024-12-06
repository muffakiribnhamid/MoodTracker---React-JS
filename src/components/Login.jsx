import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh on submit

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Retrieve the logged-in user's details
      console.log(user.email);
      toast.success("Login successful! Redirecting to home...");
      navigate("/home"); // Redirect to the home page
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Invalid email or password. Please try again.",);
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
        <form className="flex flex-col mt-20" onSubmit={handleLogin}>
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
            type="submit"
            className="bg-red-600 w-32 justify-center hover:bg-black transition-all text-white p-2"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-10">
          Wanna Create an Account?{" "}
          <u className="cursor-pointer" onClick={() => navigate("/signup")}>
            Signup
          </u>
        </p>
      </div>
    </div>
  );
}

export default Login;
