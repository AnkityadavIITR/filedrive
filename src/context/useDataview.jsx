"use client"
import { useContext, createContext, useState } from "react";
const context = createContext();
const { Provider } = context;

export function DataViewProvider({ children }) {
  const [showTable,setShowTable] = useState(false);
  return (
    <Provider
      value={{
        showTable,
        setShowTable
      }}
    >
      {children}
    </Provider>
  );
}

const useDataview = () => useContext(context);
export default useDataview;
