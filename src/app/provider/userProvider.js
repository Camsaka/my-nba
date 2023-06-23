"use client";
import { UserContext, UserDispatchContext } from "@/context/userContext.js";
import userReducer from "@/reducer/userReducer";
import { useRouter } from "next/navigation";
import { useEffect, useReducer } from "react";

export default function UserProvider({ children }) {

  const router = useRouter();

   const [user, dispatch] = useReducer(userReducer, {
      isConnected: false,
      username: null,
      avatarUrl: null,
   });

  
   // useEffect(() => {
   //    if (!user.isConnected) {router.push("/login");}
   // }, [user.isConnected]);

   return (
      <UserContext.Provider value={user}>
         <UserDispatchContext.Provider value={dispatch}>
            {children}
         </UserDispatchContext.Provider>
      </UserContext.Provider>
   );
}
