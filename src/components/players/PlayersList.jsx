import { Box, Divider, List, ListItem, ListItemText, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export const dynamic = "force-static";

export default function PlayersList({ players , params }) {
   const router = useRouter();
   
   function handleChange(e, page){
      router.push(`/players/${page}`);
   }

   return (
      <Box>
         <Pagination count={players.meta.total_pages} color="primary" onChange={handleChange} />
         <List>
            {players.data.map((player) => (
               <Fragment key={player.id}>
                  <ListItem>
                     <ListItemText
                        primary={player.first_name + " " + player.last_name}
                        secondary={player.team.full_name}
                     />
                  </ListItem>
                  <Divider />
               </Fragment>
            ))}
         </List>
      </Box>
   );
}

