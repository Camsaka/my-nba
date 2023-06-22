"use client";
import MyButton from "@/components/MyButton";
import Profile from "@/components/account/Profile";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function Account() {
  const user = useContext(UserContext);

  return (
    <Box>
      <Typography variant="h3">
        Mon compte
      </Typography>
      <Box>
        <Profile></Profile>
      </Box>
    </Box>
  );
}