import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

import { auth } from "../Firebase";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signinWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [user]);

  const value = {
    user,
    setUser,
    signinWithGoogle,
    signinWithFacebook,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-primary">Loading</span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.array,
};

export const UseAuth = () => useContext(AuthContext);
