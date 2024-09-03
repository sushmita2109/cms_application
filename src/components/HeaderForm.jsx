import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputLabel,
  TextField,
} from "@mui/material";

export const HeaderForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          minWidth: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardHeader title="Header Content" />
        <CardContent>
          <Box sx={{ display: "flex", gap: "2px", padding: "5px" }}>
            <InputLabel>Enter Text</InputLabel>
            <TextField variant="standard" />
          </Box>
          <Box sx={{ display: "flex", gap: "2px", padding: "5px" }}>
            <InputLabel>Enter Subtext</InputLabel>
            <TextField variant="standard" />
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained">Submit</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
