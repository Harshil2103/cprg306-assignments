"use client";  // This is necessary for Next.js 13+ to use hooks

import { createContext, useState, useContext, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { auth } from "./firebase";  // Make sure this path is correct

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Track user state

  // Sign in using GitHub OAuth
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);  // GitHub login
  };

  // Sign out of Firebase
  const firebaseSignOut = () => {
    return signOut(auth);  // Firebase logout
  };

  useEffect(() => {
    // Track authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Update user state
    });
    return () => unsubscribe();  // Clean up on component unmount
  }, []);  // Empty dependency array means this only runs once when the component mounts

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}  // Render children with access to the AuthContext
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useUserAuth = () => {
  return useContext(AuthContext);
};
