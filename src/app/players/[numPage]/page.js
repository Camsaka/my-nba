"use client"
import Layout from "@/components/layout/Layout";
import PlayersList from "@/components/players/PlayersList";
import { Box } from "@mui/material";

// Return a list of `params` to populate the [numPage] dynamic segment
export async function generateStaticParams() {
   const players = await fetch(
      "https://www.balldontlie.io/api/v1/players"
   ).then((res) => res.json());

   return Array.from(Array(players.meta.total_pages).keys()).map((p) => {
      return {
         numPage: p,
      };
   });
}

async function getPlayers(params) {
   const res = await fetch(
      `https://www.balldontlie.io/api/v1/players/?page=${params.numPage}`
   );
   const players = await res.json();
   return players;
}

export default async function Players({ params }) {
   const players = await getPlayers(params);
   return (
      <>
         <Layout>
            <Box>
               <PlayersList players={players}></PlayersList>
            </Box>
         </Layout>
      </>
   );
}
