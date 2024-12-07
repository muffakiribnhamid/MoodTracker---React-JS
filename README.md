<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mood Tracker App</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-900 font-sans">

  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold text-center mb-6">Mood Tracker App</h1>
    
    <section class="mb-6">
      <p class="text-lg">
        A mood tracking app built using React and Firebase. The app allows users to log their moods, interact with other users, and send wave emojis to connect with people in the app. The app is responsive, ensuring a smooth user experience on both mobile and desktop devices.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-3">Features</h2>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>User Registration & Authentication:</strong> Users can register and log in using Firebase authentication.</li>
        <li><strong>Mood Logging:</strong> Users can set and view their mood on their profile.</li>
        <li><strong>Send Waves:</strong> Users can send a "wave" emoji (👋) to other users as a way of saying hello or connecting.</li>
        <li><strong>Responsive Design:</strong> The app is fully responsive and works seamlessly on both mobile and desktop devices.</li>
        <li><strong>User Profile:</strong> Users can view and update their profile, including their name, username, and mood.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-3">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>React:</strong> JavaScript library for building the user interface.</li>
        <li><strong>Firebase:</strong> Used for user authentication, database, and real-time updates.</li>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for responsive and modern design.</li>
        <li><strong>React Router:</strong> For navigation between different pages in the app.</li>
        <li><strong>React Toastify:</strong> For displaying notifications like success or error messages.</li>
        <li><strong>Firebase Realtime Database:</strong> To store user data, waves, and other app data in real-time.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-3">How It Works</h2>
      
      <h3 class="text-xl font-medium mt-4">User List & Waves</h3>
      <p>The app fetches a list of all users (except the current user) from Firebase.</p>
      <p>Each user is represented by a card that displays their name, username, and current mood.</p>
      <p>Users can click on the "Wave" button (👋) next to other users' profiles to send a wave emoji.</p>
      <p>Waves are stored in the Firebase database, and a toast notification confirms the action.</p>

      <h3 class="text-xl font-medium mt-4">Responsive Design</h3>
      <p>On mobile devices, the user list is displayed in a single column.</p>
      <p>On small tablets and desktop devices, the user list adjusts to display multiple columns, providing a better layout for larger screens.</p>
      <p>The wave emoji is always displayed below the user profile details for better spacing on all devices.</p>

      <h3 class="text-xl font-medium mt-4">Emojis in the App</h3>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Wave Emoji (👋):</strong> A simple, friendly wave emoji used to greet other users.</li>
        <li><strong>Notifications:</strong> Success and error messages are displayed using React Toastify, including custom messages when sending a wave emoji.</li>
      </ul>
    </section>

  </div>

</body>
</html>
