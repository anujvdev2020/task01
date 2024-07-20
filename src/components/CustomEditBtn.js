import { styled } from "@mui/material/styles";
import {Button } from "@mui/material/";

const CustomEditBtn = styled(Button)(({ theme }) => ({
    backgroundColor: "#FFFF",
    width: "50px",
    height: "36px",
    borderRadius: "24px",
    color:"#0E51F1",
    textTransform:"none",
    fontWeight:600,
    fontSize:"14px",
    fontFamily: "Inter, Arial, sans-serif",
  
  
}));

export default CustomEditBtn