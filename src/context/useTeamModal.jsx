"use client"
import { createContext, useContext, useState } from "react";
const context = createContext();
const { Provider } = context;

export function TeamModalProvider({ children }) {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [purposeModal,setPurposeModal]=useState("")
  return (
    <Provider
      value={{
        showTeamModal,
        setShowTeamModal,
        purposeModal,
        setPurposeModal
      }}
    >
      {children}
    </Provider>
  );
}
const useTeamModal = () => useContext(context);
export default useTeamModal;
