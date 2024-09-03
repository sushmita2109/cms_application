import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { DashBoard } from "./Pages/DashBoard";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Box>
  );
}

export default App;
