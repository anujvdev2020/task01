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
      fontFamily: "Inter, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: "600",
      textAlign: "left",
      lineHeight: "28px",
    },
    h3:{
      fontFamily: "Inter, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "24px",
      textAlign: "left",
    },
    h4:{
      fontFamily: "Inter, Arial, sans-serif",
      fontSize: "13px",
      fontWeight: "600",
      lineHeight: "24px",
      textAlign: "left",
    },
    body1:{
      fontFamily: "Inter, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "24px",
      textAlign: "left",
    },
  },
  palette: {
    primary: {
      main: "#0E1013",
    },
    secondary: {
      main: "#dc004e",
    },
    light:{
      main:"#FFFF"
    },
    dark:{
      main:"#2E333B"
    }
  },
  button: {
    blueButton: {
      textTransform: "none", // Disable uppercase transformation for buttons
      fontSize: "16px",
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: "600",
      height: "44px",
      width: "143px",
      boxShadow: "0px 8px 20px -8px rgba(14, 81, 241, 1)",
    },
  },
});

export default theme;
