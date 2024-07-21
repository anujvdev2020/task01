import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
  ".MuiSelect-select": {
    padding: "12px 10px 10px 15px",
    fontSize: "16px",
    borderRadius: "10px",
    color:"#2E333B",
  },
  ".MuiOutlinedInput-root": {
    
  },
  ".MuiOutlinedInput-notchedOutline":{
   borderRadius:"10px",
   fontFamily: "Inter, Arial, sans-serif",
   color:"#2E333B",
   borderColor: '#E3E7EC', //custom border color
  },
  
  ".MuiSelect-icon": {
    marginRight:"10px"
  },
}));

export default CustomSelect;
