"use client"
import UserProvider from "./provider/userProvider";
import {
   EthereumClient,
   w3mConnectors,
   w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, polygonMumbai } from "wagmi/chains";

export const metadata = {
   title: "My NBA",
   description: "My NBA Project",
};

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const chains = [arbitrum, mainnet, polygon, polygonMumbai];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
   autoConnect: true,
   connectors: w3mConnectors({ projectId, version: 2, chains }),
   publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <WagmiConfig config={wagmiConfig}>
               <UserProvider>{children}</UserProvider>
            </WagmiConfig>

            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
         </body>
      </html>
   );
}
