import { Box, Container } from "@mui/material";
import Image from "next/image";


export default function Profile({ player, isConnected }) {
  return (
    <Box>
      {isConnected && (
        <>
          <p>Nom du joueur : {player.name}</p>
          <Image
            src={player.url}
            height={200}
            width={200}
            alt="Avatar du joueur" />
        </>
      )}
    </Box>
  );
}