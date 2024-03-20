"use client"
import { useContext, createContext, useState } from "react";
const context = createContext();
const { Provider } = context;

export function DeleteteModalProvider({ children }) {
  const [deleteModal, setDeletemodal] = useState(false);
  const [deleteOf, setDeleteOf] = useState(null);
  const [deleteId,setDeleteId]=useState(null)
  return (
    <Provider
      value={{
        deleteModal,
        setDeletemodal,
        deleteOf,
        setDeleteOf,
        deleteId,
        setDeleteId
      }}
    >
      {children}
    </Provider>
  );
}

const useDeleteModal = () => useContext(context);
export default useDeleteModal;
