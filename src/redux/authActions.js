import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { setUser, setLoading, setError, clearUser } from "./userSlice";

// 🔹 Login user
export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// 🔹 Logout user
export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// 🔹 Persist user on refresh
export const monitorAuthState = () => (dispatch) => {
  dispatch(setLoading(true));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
    } else {
      dispatch(clearUser());
    }
  });
};
