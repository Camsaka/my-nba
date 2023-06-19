'use client'
import { UserContext } from "@/context/userContext.js"
import { useState } from "react"

export default function UserProvider({ children }) {

  const [user, setUser] = useState({
    isConnected: false,
    username: "",
    avatarUrl: ""
  })

  return (<UserContext.Provider value={user}>{children}</UserContext.Provider>)
}