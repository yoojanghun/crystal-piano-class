import { createTheme } from "@mui/material";

const btnTheme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ef5350",
      dark: "#d32f2f",
      contrastText: "#fff"
    }
  },
});

export default btnTheme;