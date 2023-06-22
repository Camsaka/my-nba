"use client"
import { UserContext } from '@/context/userContext'
import { Container } from '@mui/material'
import { COMPILER_INDEXES } from 'next/dist/shared/lib/constants'
import { useContext, useState } from 'react'

export default function Home() {
  const user = useContext(UserContext);
  console.log(user);
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
