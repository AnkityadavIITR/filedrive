"use client"
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../config/firebase";
import { getFromLocalStorage } from "@/lib/utils";

const context = createContext();
const { Provider } = context;


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isNewUser, setNewUser] = useState(false);
  const [token, setToken] = useState(
    getFromLocalStorage("token") || ""
  );
  
  useEffect(() => {
    let unsubscribe;
    if (token) {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
          console.log("g", user);
        } else {
          setCurrentUser(null);
        }
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [token]);

  return (
    <Provider
      value={{
        currentUser,
        setCurrentUser,
        isNewUser,
        setNewUser,
      }}
    >
      {children}
    </Provider>
  );
};

const useAuth = () => useContext(context);

export default useAuth;
