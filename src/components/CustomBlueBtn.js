import { styled } from "@mui/material/styles";
import {Button } from "@mui/material/";

const CustomBlueBtn = styled(Button)(({ theme }) => ({
  background: "#0E51F1",
 
  width:"143px",
  height:"44px",
  borderRadius:"10px",
  color: "#FFFFFF",
  textTransform:"none",
  fontFamily: "Inter, Arial, sans-serif",
  '&:hover': {
    backgroundColor: "#0E51F1",
    boxShadow: " 0px 8px 20px -8px #0E51F1",
  },

}));

export default CustomBlueBtn;
