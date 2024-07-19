import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
  ".MuiSelect-select": {
    padding: "12px 14px",
    fontSize: "16px",
  },
  ".MuiOutlinedInput-root": {
    width: "220px",
    height: "44px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  ".MuiSelect-icon": {
    color: theme.palette.primary.main,
  },
}));

export default CustomSelect;
