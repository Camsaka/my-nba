import { Box, Container } from "@mui/material";
import MainNav from "./MainNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }) {
   return (
      <Box>
         <MainNav></MainNav>
         <Box
            sx={{ flex: 1, display: "flex", flexGrow: 1 }}
            component={"main"}
         ></Box>
         <Container>{children}</Container>
      </Box>
   );
}
