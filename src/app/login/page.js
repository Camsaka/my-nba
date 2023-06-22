"use client";
import LoginForm from "@/components/login/LoginForm";
import { Container } from "@mui/material";

export default function Home() {
   return (
      <>
         <main>
            <Container maxWidth="lg">
               <LoginForm></LoginForm>
            </Container>
         </main>
      </>
   );
}
