import { UserDispatchContext } from "@/context/userContext";
import {
   Alert,
   Box,
   Button,
   Snackbar,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function LoginForm() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [open, setOpen] = useState(false);
   const [error, setError] = useState("");
   const router = useRouter();
   const dispatch = useContext(UserDispatchContext);

   function handleOnClick() {
      const credentials = { email, password };
      fetch("/api/login", { method: "POST", body: JSON.stringify(credentials) })
         .then((response) => {
            if (response.ok) return response.json();
            else throw new Error("Identifiants invalid");
         })
         .then((user) => {
            dispatch({type: "login", user});
            router.push('/account');
         })
         .catch((error) => {
            setError(error.message);
            setOpen(true);
         });
   }

   return (
      <>
         <Box
            display={"flex"}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
         >
            <Typography variant="h1">Connexion</Typography>
            <Stack spacing={2} sx={{ width: "50%" }}>
               <TextField
                  label="email"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <TextField
                  label="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Button variant="contained" onClick={handleOnClick}>
                  Login
               </Button>
            </Stack>
         </Box>
         <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => setOpen(false)}
         >
            <Alert
               onClose={() => setOpen(false)}
               severity="error"
               sx={{ width: "100%" }}
            >
               Identifiants invalides
            </Alert>
         </Snackbar>
      </>
   );
}
