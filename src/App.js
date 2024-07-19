// Css imports
import { Container, Grid, Box, Typography } from "@mui/material/";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
//components imports
import Header from "./components/Header";
import CustomSearchBar from "./components/CustomSearchBar";
import searchIcon from "./assets/search.svg";
import CustomScrollbarContainer from "./components/CustomScrollContainer";
import CustomSelect from "./components/CustomSelect";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 3 }}>
        <Header />
        <Box sx={{ marginTop: 3 }}>
          <Divider component="div" />
          <CustomScrollbarContainer>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Box sx={{ padding: 2 }}>
                  <CustomSearchBar
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={searchIcon}
                            height={"20px"}
                            width={"20px"}
                          />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Custom Width and Height"
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={{ padding: 2 }}>
                  <FormControl sx={{ minWidth: 120 }}>
                   
                    <CustomSelect
                      labelId="custom-select-label"
                      id="custom-select"
                      defaultValue=""
                     displayEmpty
                    
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <h1>Hi</h1>
              <h1>Hi</h1>
            </Grid>
          </CustomScrollbarContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
