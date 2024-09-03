import { Box, Typography } from "@mui/material";

export const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Hanken Grotesk",
          fontWeight: "700",
          fontSize: "48px",
          width: "750px",
        }}
      >
        A simple, proven way to boost your team performance.
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "18px", marginTop: "15px", width: "500px" }}
      >
        Fully layered dolor sit amet, consectetur Facere, nobis, id expedita
        dolores officiis laboriosam.
      </Typography>
    </Box>
  );
};
