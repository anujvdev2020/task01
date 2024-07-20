import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
  ".MuiSelect-select": {
    padding: "12px 14px",
    fontSize: "16px",
    borderRadius: "10px",
    color:"#2E333B"
  },
  ".MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  ".MuiOutlinedInput-notchedOutline":{
   borderRadius:"10px",
   fontFamily: "Inter, Arial, sans-serif",
   color:"#2E333B"
  },
  
  ".MuiSelect-icon": {
    marginRight:"10px"
  },
}));

export default CustomSelect;
