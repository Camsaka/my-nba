import { Divider, Stack, Typography } from "@mui/material";

export default function PlayerDetails({player}) {
   return (
      <Stack flex={1} spacing={1} divider={<Divider flexItem variant="middle" />}>
         <Typography>Prénom : {player.first_name}</Typography>
         <Typography>Nom : {player.last_name}</Typography>
         <Typography>Equipe : {player.team.full_name}</Typography>
         <Typography>Poste : {player.position}</Typography>
         <Typography>
            Taille : {player.height_feet}' {player.height_inches}"
         </Typography>
         <Typography>Poids : {player.weight_pounds}</Typography>
      </Stack>
   );
}
