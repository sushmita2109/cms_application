import { Box } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { HeroArea } from "../components/HeroArea";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";

export const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <HeroArea />
      <Section2 />
      <Section3 />
    </Box>
  );
};
