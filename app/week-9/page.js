"use client";  

import { useUserAuth } from "./_utils/auth-context"; 

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();  

  
  if (!user) {
    return (
      <div>
        
        <button onClick={gitHubSignIn} className="bg-blue-500 text-white p-2 rounded">
          Sign in with GitHub
        </button>
      </div>
    );
  }

 
  return (
    <div>
      <h1>Welcome, {user.displayName || 'User'}!</h1>
      <p>Logged in as {user.email}</p>
      <button onClick={firebaseSignOut} className="bg-red-500 text-white p-2 rounded">
        Sign out
      </button>
      <div>
        
        <a href="/week-9/shopping-list" className="text-blue-500">Go to your Shopping List</a>
      </div>
    </div>
  );
}
