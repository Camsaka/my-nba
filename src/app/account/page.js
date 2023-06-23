"use client";
import Profile from "@/components/account/Profile";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import Layout from "@/components/layout/Layout";

export default function Account() {
   const user = useContext(UserContext);

   return (
      <Layout>
         <Box display={"flex"} flex={1} justifyContent={"center"}>
            <Profile></Profile>
         </Box>
      </Layout>
   );
}
