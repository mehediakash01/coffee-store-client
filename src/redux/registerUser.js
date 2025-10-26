import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { setUser, setLoading, setError, clearUser } from "./userSlice";

// 🔹 Register new user
export const registerUser = (name, email, password, photoURL) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // Update display name and photo
    await updateProfile(user, {
      displayName: name,
      photoURL: photoURL || "https://i.ibb.co/4pDNDk1/avatar.png",
    });

    // Set in Redux
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: name,
        photoURL: user.photoURL,
      })
    );

    // Send user to backend DB
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        photoURL: user.photoURL,
        registerAt: new Date().toISOString(),
        role: "customer", // default role
      }),
    });
  } catch (error) {
    dispatch(setError(error.message));
  }
};
