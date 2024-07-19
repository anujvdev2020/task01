import { Grid, Box, Typography, Button } from "@mui/material/";
import CustomBlueBtn from "./CustomBlueBtn";

const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h1"
            sx={{ color: "primary.main", marginBottom: 2 }}
          >
            Webinar
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box sx={{ padding: 2 }}>
          <CustomBlueBtn>Add Webinar</CustomBlueBtn>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
