import {
   Button,
   Divider,
   ListItem,
   ListItemText,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useDebounce } from "use-debounce";
import { parseEther } from "viem";
import {
   useAccount,
   usePrepareSendTransaction,
   useSendTransaction,
   useWaitForTransaction,
} from "wagmi";
import { utils } from "ethers";

const amount = "0.005";
const recipient = "0xD8Ea779b8FFC1096CA422D40588C4c0641709890";

export default function PostList() {
   const [message, setMessage] = useState("");
   const [posts, setPosts] = useState([]);
   const { isConnected } = useAccount();
   const [debouncedTo] = useDebounce(recipient, 500);
   const [debouncedAmount] = useDebounce(amount, 500);
   const { config } = usePrepareSendTransaction({
         to: debouncedTo,
         value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
         data: utils.formatBytes32String(message),
   });
   const { data, sendTransaction } = useSendTransaction(config);

   const { isLoading } = useWaitForTransaction({
      hash: data?.hash,
      onSuccess(data) {
         postMessage(data);
      },
   });

   function postMessage(data) {
      setPosts([...posts, { message, hash: data.transactionHash }]);
      setMessage("");
   }

   function handleClick() {
      if (message !== "") {
         sendTransaction?.();
      }
   }

   return (
      isConnected && (
         <Stack spacing={5} flex={1}>
            <Stack spacing={5} divider={<Divider flexItem variant="middle" />}>
               <Fragment>
                  {posts.map((post) => {
                     return (
                        <Fragment key={post.hash}>
                           <ListItem>
                              <ListItemText
                                 primary={post.message}
                                 secondary={
                                    <Link
                                       target="_blank"
                                       href={
                                          "https://mumbai.polygonscan.com/tx/" +
                                          post.hash
                                       }
                                    >
                                       <Typography variant="caption">
                                          Voir la transaction sur polygon scan
                                       </Typography>
                                    </Link>
                                 }
                              ></ListItemText>
                           </ListItem>
                           <Divider />
                        </Fragment>
                     );
                  })}
               </Fragment>
            </Stack>
            <Stack>
               <TextField
                  multiline
                  rows={4}
                  label={"Votre message"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
               <Button onClick={handleClick} disabled={!message}>
                  {isLoading
                     ? "En cours de transaction..."
                     : "Envoyer (0.05 Mumbai MATIC)"}
               </Button>
            </Stack>
         </Stack>
      )
   );
}
