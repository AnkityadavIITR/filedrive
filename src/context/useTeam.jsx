"use client"
import { createContext,useContext, useState } from "react"

const context=createContext();
const {Provider}=context;

export function TeamProvider({children}){
    const [teamData,setTeamData]=useState()
    return <Provider
       teamData={teamData}
       setTeamData={setTeamData}
    >
        {children}
    </Provider>
}
