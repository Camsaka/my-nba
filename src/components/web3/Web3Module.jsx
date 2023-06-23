import { Stack, Typography } from "@mui/material";
import { Web3Button } from "@web3modal/react";
import { useAccount, useBalance } from "wagmi";
import PostList from "./PostList";

export default function Web3Module() {
   const { status, address, isConnected } = useAccount();
   const { data } = useBalance({ address });

   return (
      <Stack
         direction={"row"}
         flex={1}
         spacing={3}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <Stack spacing={2}>
            {isConnected && data && (
               <>
                  <Typography>Status : {status} </Typography>
                  <Typography>Adresse : {address} </Typography>
                  <Typography>
                     Balance : {data.formatted} {data.symbol}
                  </Typography>
               </>
            )}
            <Web3Button />
         </Stack>
         <PostList></PostList>
      </Stack>
   );
}
