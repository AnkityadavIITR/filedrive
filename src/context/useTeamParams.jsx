"use client";
import { createContext, useContext, useState} from "react";
const context = createContext();
const { Provider } = context;

export function TeamParamProvider({ children }) {
    const [teamParam, setTeamParam] = useState("");
  return (
    <Provider
      value={{
        teamParam, setTeamParam
      }}
    >
      {children}
    </Provider>
  );
}

const useTeamParam = () => useContext(context);
export default useTeamParam;
