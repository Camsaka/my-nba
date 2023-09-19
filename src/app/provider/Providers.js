"use client";
import React from "react";
import WagmiProvider from "./WagmiProvider.js";
import UserProvider from "./userProvider.js";

function Providers({ children }) {
   return (
      <WagmiProvider>
         <UserProvider>{children}</UserProvider>
      </WagmiProvider>
   );
}

export default Providers;
