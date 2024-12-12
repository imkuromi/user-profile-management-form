import { AppBar, Toolbar, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function Header() {
  return (
    <AppBar position="static">
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
        }}
        variant="h3"
        color="inherit"
        component="div"
      >
        User profile management System
      </Typography>
    </AppBar>
  );
}
