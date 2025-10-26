import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login existing user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Continue with Google
  const continueWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((result) => {
        toast.success(`Welcome, ${result.user.displayName}! ☕`);
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = "Google sign-in failed";
        
        if (error.code === "auth/popup-closed-by-user") {
          errorMessage = "Sign-in cancelled";
        } else if (error.code === "auth/network-request-failed") {
          errorMessage = "Network error. Please check your connection";
        }
        
        toast.error(errorMessage);
        throw error;
      });
  };

  // Update user profile
  const updateUser = (moreInfo) => {
    return updateProfile(auth.currentUser, moreInfo)
      .then(() => {
        // Update local state with new info
        setUser({ ...auth.currentUser });
        toast.success("Profile updated successfully! ✨");
      })
      .catch((error) => {
        toast.error("Failed to update profile");
        throw error;
      });
  };

  // Logout user
  const logoutUser = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
        toast.success("Signed out successfully! 👋");
      })
      .catch((error) => {
        toast.error(error.message || "Sign out failed");
        throw error;
      });
  };

  // Set observer for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    createUser,
    loginUser,
    user,
    setUser,
    loading,
    setLoading,
    continueWithGoogle,
    updateUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;