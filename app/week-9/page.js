"use client";  // Enable hook usage in Next.js

import { useUserAuth } from "./_utils/auth-context";  // Import the custom hook

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();  // Destructure user, sign-in, and sign-out methods

  // If the user is not logged in, show the login button
  if (!user) {
    return (
      <div>
        <h1>Welcome to the Landing Page</h1>
        <button onClick={gitHubSignIn} className="bg-blue-500 text-white p-2 rounded">
          Sign in with GitHub
        </button>
      </div>
    );
  }

  // If the user is logged in, show the welcome message and logout button
  return (
    <div>
      <h1>Welcome, {user.displayName || 'User'}!</h1>
      <p>Logged in as {user.email}</p>
      <button onClick={firebaseSignOut} className="bg-red-500 text-white p-2 rounded">
        Sign out
      </button>
      <div>
        <p>Click below to view your shopping list:</p>
        <a href="/week-9/shopping-list" className="text-blue-500">Go to Shopping List</a>
      </div>
    </div>
  );
}
