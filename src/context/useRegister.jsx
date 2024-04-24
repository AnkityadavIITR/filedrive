"use client";
import { createContext, Context, useState, useContext } from "react";
import { getFromLocalStorage } from "@/lib/utils";
const context = createContext();
const { Provider } = context;
export function RegisterProvider({ children }) {
  const [userName,setUserName] = useState(null);
  const [userEmail,setUserEmail] = useState(null);
  const [userPassword,setUserPassword] = useState(null);
  return (
    <Provider
      value={{
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword
      }}
    >
      {children}
    </Provider>
  );
}

const useRegister = () => useContext(context);

export default useRegister;
