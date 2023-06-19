'use client'
import { UserContext, UserDispatchContext } from "@/context/userContext.js"
import userReducer from "@/reducer/userReducer";
import { useReducer } from "react"

export default function UserProvider({ children }) {

  const [user, dispatch] = useReducer(userReducer, {
    isConnected: false,
    username: null,
    avatarUrl: null
  });

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>)
}