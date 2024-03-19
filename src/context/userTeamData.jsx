"use client";
import { useContext, createContext, useState } from "react";
const context = createContext();
const { Provider } = context;

export function TeamDataProvider({ children }) {
  const [teamData, setTeamData] = useState(null);
  return (
    <Provider
      value={{
        teamData,
        setTeamData,
      }}
    >
      {children}
    </Provider>
  );
}

const userTeamData = () => useContext(context);
export default userTeamData;
