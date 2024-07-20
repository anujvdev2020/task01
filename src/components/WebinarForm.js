import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  Grid,
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import CustomBlueBtn from "./CustomBlueBtn";

import { userIcon, cameraIcon } from "./assets";
import { styled } from "@mui/material/styles";
import CustomSearcBar from "./CustomSearchBar";

// create a custom red asterik mark
const RedAsterisk = styled("span")(({ theme }) => ({
  color: "red",
}));

const WebinarForm = ({ formOpen, handleClose }) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={formOpen}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log("EMAA", email);
          handleClose();
        },
      }}
    >
      {/* Dialog Header Section */}
      <DialogTitle>
        <Typography variant="h1" sx={{ color: "primary.main" }}>
          Create webinar
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Dialog Container */}
      <DialogContent dividers>
        {/* Instructor Details Form Section */}
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={userIcon} alt="user" />
            <Typography variant="h4" sx={{ color: "primary.main", ml: 2 }}>
              Instructor Details
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Box sx={{ ml: "40px" }}>
            {/*Instructor Name*/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Name<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>
            {/*Instructor Role*/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Role<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>
            {/*Instructor Company**/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Company*<span style={{ color: "red" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>
          </Box>

          <Box></Box>
        </Box>

        {/* Webinar Details Form Section */}
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={cameraIcon} alt="user" />
            <Typography variant="h4" sx={{ color: "primary.main", ml: 2 }}>
              Webinar Details
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Box sx={{ ml: "40px" }}>
            {/*Instructor Name*/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Webinar Title<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                    width:"100%",
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex" ,ml: "40px"}}>
            <Box sx={{ mb: 2 ,mr:2}}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Start Date<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                  width: "200px",
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 2,mr:2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Start Date<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                  width: "200px",
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Start Date<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    fontFamily: "Inter, Arial, sans-serif",
                    opacity: "none",
                    fontWeight: 400,
                    zIndex: 1200,
                  },
                }}
                sx={{
                  width: "179px",
                  background: "#F2F4F8",
                  borderRadius: "10px",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#2E333B",
                    fontFamily: "Inter, Arial, sans-serif",
                    fontWeight: 400,
                    opacity: 1,
                    // Change the placeholder color
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "start", ml: 2 }}>
        <CustomBlueBtn type="submit">Create Webinar</CustomBlueBtn>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WebinarForm;
