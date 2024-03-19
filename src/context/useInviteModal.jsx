"use client";
import { createContext, useContext, useState } from "react";
const context = createContext();
const { Provider } = context;
export function TeamInvitationProvider({ children }) {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteId,setInviteId]=useState(null)
  return (
    <Provider
      value={{
        showInviteModal,
        setShowInviteModal,
        inviteId,
        setInviteId
      }}
    >
      {children}
    </Provider>
  );
}

const useTeamInvite = () => useContext(context);
export default useTeamInvite;
