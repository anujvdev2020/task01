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
import WebinarForm from "./components/WebinarForm";
import { useEffect, useState } from "react";


const filterData = (data, searchTerm, selectedCategory) => {
  return data.filter((item) => {
    const searchMatch = Object.keys(item)?.some((key) =>
      item[key]?.toString()?.toLowerCase()?.includes(searchTerm.toLowerCase())
    );
    const categoryMatch = selectedCategory
      ? item.topics === selectedCategory
      : true;

    return searchMatch && categoryMatch;
  });
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setTopic] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [webinars, setWebinars] = useState([]);
  const [selectedWebinar, setSelectedWebinar] = useState({});
  const [filteredData, setFilteredData] = useState([...webinars]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredData(filterData(webinars, event.target.value, selectedTopic));
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    setFilteredData(filterData(webinars, searchTerm, event.target.value));
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  const handleAddWebinars = (webinarData) => {
    if (webinarData.id != undefined) {
      let webinarArr = webinars.map((item) => {
        return item.id == webinarData.id ? { ...webinarData } : item;
      });
      setWebinars([...webinarArr]);
    } else {
      let item = { id: webinars.length + 1, ...webinarData };
      setWebinars([...webinars, item]);
    }
    handleClose();
    setSelectedWebinar({});
  };
  const handleDelete = (id) => {
    const filteredArr = webinars.filter((item) => item.id !== id);
    setWebinars([...filteredArr]);
  };
  const handleSetSelectedWebinar = (webinarData) => {
    setSelectedWebinar(webinarData);
    setFormOpen(true);
  };
  const handleAddWebinarClick = () => {
    setSelectedWebinar({});
    setFormOpen(true);
  };

  useEffect(() => {
    setFilteredData([...webinars]);
  }, [webinars]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ padding: 2 }}>
        <Header setFormOpen={handleAddWebinarClick} />
        <Divider component="div" sx={{marginLeft:"18px",mb:3}} />
        <Box sx={{ marginTop: 3 }}>
          

          <div className="scroll-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <Box sx={{ padding: 2 }}>
                  <CustomSearchBar
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                        fontFamily: "Inter, Arial, sans-serif",
                        color: "#636973",
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
                      "& .MuiInputBase-input::placeholder": {
                        color: "#636973", // Placeholder text color
                      },
                    }}
                    placeholder="Search for webinar"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={2}>
                <Box
                  sx={{
                    padding: 2,
                    ml: 2,
                    [theme.breakpoints.down("md")]: { ml: 0 },
                  }}
                >
                  <FormControl
                    sx={{
                      minWidth: 220,
                      [theme.breakpoints.down("md")]: { width: "100%" },
                      height: 44,
                      color: "#2E333B",
                    }}
                  >
                    <CustomSelect
                      labelId="custom-select-label"
                      id="custom-select"
                      displayEmpty
                      value={selectedTopic}
                      IconComponent={() => (
                        <img
                          style={{
                            marginRight: "10px",
                            height: "20px",
                            width: "20px",
                          }}
                          src={downArrow}
                          alt="arrowicon"
                        />
                      )}
                      onChange={handleTopicChange}
                    >
                      <MenuItem value="">Topic</MenuItem>
                      <MenuItem value={"React"}>React</MenuItem>
                      <MenuItem value={"Interviews"}>Interviews</MenuItem>
                      <MenuItem value={"FAQs"}>FAQs</MenuItem>
                    </CustomSelect>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              {filteredData && filteredData.length > 0 ? (
                filteredData?.map((item) => (
                  <Grid key={item.id} item lg={4} sm={6} md={6}>
                    <CustomWebinarCard
                      webinarData={item}
                      handleSetSelectedWebinar={handleSetSelectedWebinar}
                      handleDelete={handleDelete}
                    />
                  </Grid>
                ))
              ) : (
                <Grid  item lg={4} sm={6} md={6}>
                  {"No records found. Kindly add a webinar"}
                </Grid>
              )}
            </Grid>
          </div>
        </Box>
        {formOpen && (
          <WebinarForm
            editWebinarData={selectedWebinar}
            handleAddWebinars={handleAddWebinars}
            formOpen={formOpen}
            handleClose={handleClose}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
