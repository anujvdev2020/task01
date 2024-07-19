import React from "react";
import { styled } from "@mui/system";

const CustomScrollbarContainer = styled("div")(({ theme }) => ({
  marginTop: "20px",
  width: "100%",
  height: "300px",
  overflowY: "scroll",
  scrollbarWidth: "thin", // For Firefox
  "scrollbar-color": "#D5DBE4", // For Firefox
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#FFFF",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#D5DBE4",
    borderRadius: "4px",
    border: `2px solid ${theme.palette.background.paper}`,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#FFFF",
  },
}));

const App = ({ children }) => {
  return <CustomScrollbarContainer>{children}</CustomScrollbarContainer>;
};

export default App;
