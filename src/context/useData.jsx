"use client";
import { createContext, Context, useState, useContext } from "react";
import { getFromLocalStorage } from "@/lib/utils";
const context = createContext();
const { Provider } = context;
export function DataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  return (
    <Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </Provider>
  );
}

const useData = () => useContext(context);

export default useData;
