import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomSearcBar = styled(TextField)(({ theme }) => ({
  borderRadius: "10px",
  width: "380px",
  height: "44px",
  opacity: "0px",
  fontFamily: "Inter, Arial, sans-serif",
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  root:{
    fontFamily: "Inter, Arial, sans-serif",
  },
  
  borderRadius:"10px",
  "& .MuiInputBase-root": {
    height: "100%", // Ensure the input field itself takes the full height
    fontFamily: "Inter, Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16.94px",
    textAlign: "left",
    color: "#636973",
  },
}));

export default CustomSearcBar;
