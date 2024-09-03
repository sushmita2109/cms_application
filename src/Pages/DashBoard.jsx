import { Box, Typography } from "@mui/material";
import { SideBar } from "../components/SideBar";
import { HeaderForm } from "../components/HeaderForm";

export const DashBoard = () => {
  return (
    <Box>
      <SideBar />
      <Typography>Dashboard</Typography>
      <HeaderForm />
    </Box>
  );
};
