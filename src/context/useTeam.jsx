"use client";
import { createContext, useContext, useState} from "react";
// import { getFromLocalStorage } from "@/lib/utils";
const context = createContext();
const { Provider } = context;

export function TeamProvider({ children }) {
    const [userTeam, setUserTeam] = useState(null);
  return (
    <Provider
      value={{
        userTeam,
        setUserTeam,
      }}
    >
      {children}
    </Provider>
  );
}

const useTeam = () => useContext(context);
export default useTeam;
