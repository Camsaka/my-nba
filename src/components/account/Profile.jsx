import { UserContext } from "@/context/userContext";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";


export default function Profile() {
  const user = useContext(UserContext);
  return (
    <Box>
      {user.isConnected && (
        <>
          <p>Nom du joueur : {user.username}</p>
          <Image
            src={user.avatarUrl}
            height={200}
            width={200}
            alt="user" />
        </>
      )}
    </Box>
  );
}