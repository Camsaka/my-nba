"use client";
import MyButton from "@/components/MyButton";
import Profile from "@/components/Profile";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function Account() {

  const player = {
    name: "Lebron James",
    url: "https://hoopshype.com/wp-content/uploads/sites/92/2023/06/i_fb_02_c2_lebron-james.png"
  }

  const user = useContext(UserContext);

  return (
    <Box>
      <Typography variant="h3">
        Mon compte
      </Typography>
      <Box>
        <Profile player={player} isConnected={user.isConnected}></Profile>
        <MyButton isConnected={user.isConnected} handleOnClick={handleOnClick}></MyButton>
      </Box>
    </Box>
  );
}