import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "28px",
      fontFamily: "Inter, Arial, sans-serif",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      main: "#0E1013",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  button: {
    blueButton: {
      textTransform: "none", // Disable uppercase transformation for buttons
      fontSize: "16px",
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: "600",
      height: "44px",
      width: "143px",
      boxShadow: "0px 8px 20px -8px rgba(14, 81, 241, 1)"
    },
  },
});

export default theme;
