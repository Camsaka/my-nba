import { UserContext, UserDispatchContext } from "@/context/userContext";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
export default function MyButton(){

  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  let action = {};

  if(user.isConnected){
    action.type = "logout";
  } else {
    action.type ="login";
    action.user = {
      username : "Camille",
      avatarUrl : "https://hoopshype.com/wp-content/uploads/sites/92/2023/06/i_fb_02_c2_lebron-james.png"
    }
  }

  function handleOnClick(){
    dispatch(action)
  }

  return (
    <Button
      variant="contained"
      {...(user.isConnected && {color:"error"})}
      onClick={handleOnClick}
    >
      {user.isConnected ? "Se déconnecter" : "Se connecter"}
    </Button>
  )
}