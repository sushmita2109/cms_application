import { Box, Button, TextField, Typography } from "@mui/material";

export const HeroArea = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage:
          "url('https://custar-next.netlify.app/image/home-1/hero-shap-curve.svg')",
        backgroundSize: "cover",
        backgroundColor: "#0d6efd",
      }}
    >
      <Box sx={{ width: "850px", marginTop: "25px" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Hanken Grotesk",
            fontWeight: "700",
            fontSize: "62px",
            color: "white",
            width: "600px",
          }}
        >
          Create your next mobile app landing page in minutes.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            width: "500px",
            color: "white",
            padding: "8px",
          }}
        >
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          integer at odio velna vitae auctor integer congue magna at pretium
          purus pretium ligula rutrum luctus risus
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Enter your email address"
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "250px",
            borderRadius: "5px",
          }}
        ></TextField>
        <Button
          sx={{ color: "white", backgroundColor: "#fd4c5c", height: "55px" }}
        >
          Start 14 days trial
        </Button>
      </Box>
      <Box sx={{ width: "450px" }}>
        <img
          src="https://custar-next.netlify.app/image/home-1/hero-image-main.png"
          alt="image"
        />
      </Box>
    </Box>
  );
};
