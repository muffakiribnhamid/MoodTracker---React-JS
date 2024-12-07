Mood Tracker App
A mood tracking app built using React and Firebase. The app allows users to log their moods, interact with other users, and send wave emojis to connect with people in the app. The app is responsive, ensuring a smooth user experience on both mobile and desktop devices.

Features
User Registration & Authentication: Users can register and log in using Firebase authentication.
Mood Logging: Users can set and view their mood on their profile.
Send Waves: Users can send a "wave" emoji (👋) to other users as a way of saying hello or connecting.
Responsive Design: The app is fully responsive and works seamlessly on both mobile and desktop devices.
User Profile: Users can view and update their profile, including their name, username, and mood.
Technologies Used
React: JavaScript library for building the user interface.
Firebase: Used for user authentication, database, and real-time updates.
Tailwind CSS: Utility-first CSS framework for responsive and modern design.
React Router: For navigation between different pages in the app.
React Toastify: For displaying notifications like success or error messages.
Firebase Realtime Database: To store user data, waves, and other app data in real-time.
How It Works
User List & Waves
The app fetches a list of all users (except the current user) from Firebase.
Each user is represented by a card that displays their name, username, and current mood.
Users can click on the "Wave" button (👋) next to other users' profiles to send a wave emoji.
Waves are stored in the Firebase database, and a toast notification confirms the action.
Responsive Design
On mobile devices, the user list is displayed in a single column.
On small tablets and desktop devices, the user list adjusts to display multiple columns, providing a better layout for larger screens.
The wave emoji is always displayed below the user profile details for better spacing on all devices.
Emojis in the App
Wave Emoji (👋): A simple, friendly wave emoji used to greet other users.
Notifications: Success and error messages are displayed using React Toastify, including custom messages when sending a wave emoji.
