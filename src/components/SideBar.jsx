import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
export const SideBar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "250px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Link to="/home">Hero</Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link to="#">About</Link>
        </AccordionDetails>
        <AccordionDetails>
          <Link to="#">Pricing</Link>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
