import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ustar
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">Demos </Typography>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">Pages</Typography>
              <Button>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Button>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">Blog</Typography>
              <Button>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Button>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h6">Contact</Typography>
              <Button>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button sx={{ color: "white" }}>Login</Button>
            <Button sx={{ backgroundColor: "#fd4c5c", color: "white" }}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
