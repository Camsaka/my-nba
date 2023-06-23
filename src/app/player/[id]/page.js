"use client";
import Layout from "@/components/layout/Layout";
import { Box, Container, Typography } from "@mui/material";
import PlayerDetails from "@/components/players/PlayerDetails";
import Web3Module from "@/components/web3/Web3Module";
import { Web3Button } from "@web3modal/react";

// Return a list of `params` to populate the [numPage] dynamic segment
export async function generateStaticParams() {
   const players = await fetch(
      "https://www.balldontlie.io/api/v1/players"
   ).then((res) => res.json());

   return players.data.map((player) => {
      return {
         id: player.id,
      };
   });
}

async function getPlayer(params) {
   const res = await fetch(
      `https://www.balldontlie.io/api/v1/players/${params.id}`
   );
   const player = await res.json();
   return player;
}

export default async function Player({ params }) {
   const player = await getPlayer(params);
   return (
      <>
         <Layout>
            <Box
               display={"flex"}
               justifyContent={"center"}
               alignItems={"center"}
               flexDirection={"row"}
            >
               <Box display={"flex"} flex={1} mr={5}>
                  <PlayerDetails player={player}></PlayerDetails>
               </Box>
               <Box display={"flex"} flex={2}>
                  <Web3Module />
               </Box>
            </Box>
         </Layout>
      </>
   );
}
