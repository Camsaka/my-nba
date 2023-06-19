"use client"
import { Container } from '@mui/material'
import { useState } from 'react'

export default function Home() {

  const [isConnected, setIsConnected] = useState(false);
  function handleOnClick(){
    setIsConnected("true");
  }

  return (
    <>
    <main>
      <Container maxWidth="lg">
        <h1>Bienvenue dans My NBA</h1>
      </Container>
      
    </main>
    </>
  )
}
