import {
   Box,
   Divider,
   List,
   ListItem,
   ListItemText,
   Pagination,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export const dynamic = "force-static";

export default function PlayersList({ players }) {
   const router = useRouter();

   function handleChange(e, page) {
      router.push(`/players/${page}`);
   }

   function handleClick(id) {
      router.push(`/player/${id}`)
   }

   return (
      <Box>
         <Pagination
            count={players.meta.total_pages}
            page={players.meta.current_page}
            color="primary"
            onChange={handleChange}
         />
         <List>
            {players.data.map((player) => (
               <Fragment key={player.id}>
                  <ListItem
                     onClick={() => handleClick(player.id)}
                     sx={{
                        cursor: "pointer",
                        "&:hover": { backgroundColor: "#eee" },
                     }}
                  >
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
