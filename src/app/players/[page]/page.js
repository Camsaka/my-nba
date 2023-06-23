"use client";
import Layout from "@/components/layout/Layout";
import PlayersList from "@/components/players/PlayersList";
import { Box, Container, Typography } from "@mui/material";

// Return a list of `params` to populate the [slug] dynamic segment
async function generateStaticParams() {
   const players = await fetch(
      "https://www.balldontlie.io/api/v1/players"
   ).then((res) => res.json());

   return Array.from(Array(players.meta.total_pages).keys()).map((page) => {
      return {
         page,
      };
   });
}

async function getPlayers({params}) {
   const res = await fetch(
      `https://www.balldontlie.io/api/v1/players`
   );
   return res.json();
}

export default async function Home() {
   const params = await generateStaticParams();
   const players = await getPlayers();
   console.log(params.page);
   return (
      <>
         <Layout>
            <Box>
               <PlayersList players={players} params={params}></PlayersList>
            </Box>
         </Layout>
      </>
   );
}
