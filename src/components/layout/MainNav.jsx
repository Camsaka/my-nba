import { UserDispatchContext } from "@/context/userContext";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { Router } from "next/navigation";
import { useContext } from "react";

export default function MainNav() {

   const dispatch = useContext(UserDispatchContext);
   const pages = [
      { title: "NBA Player", url: "/players/1" },
      { title: "Mon compte", url: "/account" },
   ];

   function handleOnCLick(){
      dispatch({type:"logout"});
   }

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Box>
                  <Link href="/">
                     <Button variant="text" sx={{ color: "white" }}>
                        <Typography
                           variant="h6"
                           component="div"
                           sx={{ flexGrow: 1 }}
                        >
                           My NBA
                        </Typography>
                     </Button>
                  </Link>
               </Box>
               <Box display={"flex"} flex={1} marginLeft={10}>
                  {pages.map((page) => (
                     <Link href={page.url} key={page.url}>
                        <Button variant="text" sx={{ color: "white" }}>
                           <Typography
                              variant="h6"
                              component="div"
                              sx={{ flexGrow: 1 }}
                           >
                              {page.title}
                           </Typography>
                        </Button>
                     </Link>
                  ))}
               </Box>
               <Box>
                  <Button
                     variant="contained"
                     color="error"
                     onClick={handleOnCLick}
                  >
                     Se deconnecter
                  </Button>
               </Box>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
