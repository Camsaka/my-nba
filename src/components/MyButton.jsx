import { Button } from "@mui/material";
import { useState } from "react";
export default function MyButton({isConnected, handleOnClick}){
  return (
    <Button
      variant="contained"
      {...(isConnected && {color:"error"})}
      onClick={handleOnClick}
    >
      {isConnected ? "Se déconnecter" : "Se connecter"}
    </Button>
  )
}