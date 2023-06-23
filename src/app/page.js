"use client";
import Layout from "@/components/layout/Layout";
import { Box, Typography } from "@mui/material";

export default function Home() {
   return (
      <>
         <Layout>
            <Box display={"flex"} flex={1} justifyContent={"center"}>
              <Typography variant="h1">Bienvenue sur My NBA</Typography>
            </Box>
         </Layout>
      </>
   );
}
