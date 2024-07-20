// Css imports
import { Container, Grid, Box } from "@mui/material/";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./components/theme";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
//components imports
import Header from "./components/Header";
import CustomSearchBar from "./components/CustomSearchBar";
import { searchIcon, downArrow } from "./components/assets";
import CustomSelect from "./components/CustomSelect";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CustomWebinarCard from "./components/CustomWebinarCard";
import { useState } from "react";

function App() {
  const [selectTopic, setTopic] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ padding: 2 }}>
        <Header />
        <Box sx={{ marginTop: 3 }}>
          <Divider component="div" />
          
          <div className="scroll-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <Box sx={{ padding: 2 }}>
                  <CustomSearchBar
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        fontFamily:"Inter, Arial, sans-serif",
                        color:"#636973"
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={searchIcon}
                            height={"20px"}
                            width={"20px"}
                            alt="searchIcon"
                          />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiInputBase-input::placeholder': {
                        color:"#636973", // Placeholder text color
                      },
                    }}
                    placeholder="Search for webinar"
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={3}>
                <Box sx={{ padding: 2 }}>
                  <FormControl
                    sx={{ minWidth: 220, height: 44,color:"#2E333B"}}
                  >
                    <CustomSelect
                      labelId="custom-select-label"
                      id="custom-select"
                      displayEmpty
                      value={selectTopic}
                      IconComponent={() => (
                        <img style={{marginRight:"10px",height:"20px",width:"20px"}} src={downArrow} alt="arrowicon" />
                      )}
                    >
                      <MenuItem value="">Topic</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              {[
                { id: 1, name: "Anuj" },
                { id: 2, name: "Anuj" },
                { id: 3, name: "Anuj" },
                { id: 4, name: "Anuj" },
                { id: 5, name: "Anuj" },
                { id: 6, name: "Anuj" },
              ].map((item) => (
                <Grid item lg={4} sm={6} md={6}>
                  <CustomWebinarCard />
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
