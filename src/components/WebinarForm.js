import { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  IconButton,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import CustomBlueBtn from "./CustomBlueBtn";
import CustomEditBtn from './CustomEditBtn'

import { userIcon, cameraIcon, plusIcon } from "./assets";
import CustomSearcBar from "./CustomSearchBar";


import { useTheme } from "@mui/material/styles";

const commonInputStyle = {
  background: "#F2F4F8",
  borderRadius: "10px",
  "& .MuiInputBase-input::placeholder": {
    color: "#2E333B",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 400,
    opacity: 1,
    // Change the placeholder color
  },
};
const commonInputPropsTextField = {
  style: {
    borderRadius: "10px",
    fontFamily: "Inter, Arial, sans-serif",
    opacity: "none",
    fontWeight: 400,
    zIndex: 1200,
  },
};
const commonDateTimeInputStyle = {
  width: "179px",
  height: "44px",
  background: "#F2F4F8",
  borderRadius: "10px",
  "& .MuiInputBase-input::placeholder": {
    color: "#2E333B",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 400,
    opacity: 1,
    // Change the placeholder color
  },
};

const commonDateTimeInputProps = {
  style: {
    borderRadius: "10px",
    fontFamily: "Inter, Arial, sans-serif",
    opacity: "none",
    fontWeight: 400,
  },
};

const WebinarForm = ({
  formOpen,
  handleClose,
  handleAddWebinars,
  editWebinarData,
}) => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [role, setRole] = useState("");
  const [roleErr, setRoleErr] = useState("");

  const [company, setCompany] = useState("");
  const [companyErr, setCompanyErr] = useState("");

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const [topics, setTopics] = useState("");
  const [topicsErr, setTopicsErr] = useState("");

  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState("");

  const [startDate, setDate] = useState("");
  const [startDateErr, setDateErr] = useState("");

  const [startTime, setStartTime] = useState("");
  const [startTimeErr, setStartTimeErr] = useState("");

  const [endTime, setEndTime] = useState("");
  const [endTimeErr, setEndTimeErr] = useState("");

  const handleButtonClick = () => {
    // Trigger the click event on the file input
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    if (file) {
      // Update the state with the selected file
      setImage(URL.createObjectURL(file));
    }
  };

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);

    // Basic validation: check if the input is empty
    if (value.trim() === "") {
      setNameErr("Instructor name cannot be empty.");
    } else {
      setNameErr("");
    }
  };

  const handleRole = (event) => {
    const value = event.target.value;
    setRole(value);

    if (value.trim() === "") {
      setRoleErr("Instructor name cannot be empty.");
    } else {
      setRoleErr("");
    }
  };

  const handleCompany = (event) => {
    const value = event.target.value;
    setCompany(value);

    if (value.trim() === "") {
      setCompanyErr("Instructor name cannot be empty.");
    } else {
      setCompanyErr("");
    }
  };

  const handleTopics = (event) => {
    const value = event.target.value;
    setTopics(value);

    if (value.trim() === "") {
      setTopicsErr("Instructor name cannot be empty.");
    } else {
      setTopicsErr("");
    }
  };

  const handleTitle = (event) => {
    const value = event.target.value;
    setTitle(value);

    if (value.trim() === "") {
      setTitleErr("Instructor name cannot be empty.");
    } else {
      setTitleErr("");
    }
  };

  const handleDate = (event) => {
    const value = event.target.value;
    setDate(value);

    if (value.trim() === "") {
      setDateErr("Instructor name cannot be empty.");
    } else {
      setDateErr("");
    }
  };

  const handleStartTime = (event) => {
    const value = event.target.value;
    setStartTime(value);

    if (value.trim() === "") {
      setStartTimeErr("Instructor name cannot be empty.");
    } else {
      setStartTimeErr("");
    }
  };

  const handleEndTime = (event) => {
    const value = event.target.value;
    setEndTime(value);

    if (value.trim() === "" || value < startTime) {
      setEndTimeErr("End Time name cannot be empty.");
    } else {
      setEndTimeErr("");
    }
  };

  useEffect(() => {
    if (editWebinarData.id) {
      const {
        name,
        role,
        company,
        image,
        topics,
        title,
        startDate,
        startTime,
        endTime,
      } = editWebinarData;
      setName(name);
      setRole(role);
      setCompany(company);
      setImage(image);
      setTopics(topics);
      setTitle(title);
      setDate(startDate);
      setStartTime(startTime);
      setEndTime(endTime);
    }
  }, []);

  const theme = useTheme();

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

          if (
            name &&
            role &&
            company &&
            topics &&
            title &&
            startDate &&
            startTime &&
            endTime
          ) {
            let addNewFormdata = {
              name,
              role,
              image,
              company,
              topics,
              title,
              startDate,
              startTime,
              endTime,
            };
            let formData = {
              id: editWebinarData.id,
              name,
              role,
              image,
              company,
              topics,
              title,
              startDate,
              startTime,
              endTime,
            };
            handleAddWebinars(editWebinarData.id?formData:addNewFormdata);
            handleClose();
          }
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
            <Typography variant="h2" sx={{ color: "primary.main", ml: 2 }}>
              Instructor Details
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          }}
        >
          <Box sx={{ ml: "40px" }}>
            {/*Instructor Name*/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Name<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor name"
                onChange={handleName}
                InputProps={commonInputPropsTextField}
                value={name}
                sx={commonInputStyle}
                error={Boolean(nameErr)}
                required
              />
            </Box>
            {/*Instructor Role*/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Role<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor role"
                InputProps={commonInputPropsTextField}
                value={role}
                sx={commonInputStyle}
                error={Boolean(roleErr)}
                onChange={handleRole}
                required
              />
            </Box>
            {/*Instructor Company**/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Company<span style={{ color: "red" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the instructor company"
                InputProps={commonInputPropsTextField}
                sx={commonInputStyle}
                onChange={handleCompany}
                error={Boolean(companyErr)}
                value={company}
                required
              />
            </Box>
          </Box>
          {/* Image container & Topics container */}
          <Box sx={{ ml: "40px" }}>
            <Box>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Instructor Image
              </Typography>

              {image ? (
                <div>
                  <img
                    src={image}
                    alt="Selected"

                    style={{ maxWidth: "100%", height: 135, width: 135,borderRadius:"14px" }}
                  />
                </div>
              ) : (
                <Box
                  sx={{
                    height: 135,
                    width: 135,
                    backgroundColor: "#F2F4F8",
                    borderRadius: "17px",
                    border: "2px dashed #D9DBDC",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={handleButtonClick}
                >
                  <input
                    hidden
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                  />
                  <img src={plusIcon}  alt="add-icon" />
                </Box>
              )}
            </Box>

            <Box sx={{ mt: "10px" }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Topics<span style={{ color: "red" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the topics"
                InputProps={commonInputPropsTextField}
                sx={commonInputStyle}
                value={topics}
                onChange={handleTopics}
                error={Boolean(topicsErr)}
                required
              />
            </Box>
          </Box>
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
            <Typography variant="h2" sx={{ color: "primary.main", ml: 2 }}>
              Webinar Details
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3, ml: "2px" }}>
          <Box sx={{ ml: "40px" }}>
            {/*Instructor Name*/}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Webinar Title<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the webinar title"
                InputProps={commonInputPropsTextField}
                sx={commonInputStyle}
                value={title}
                onChange={handleTitle}
                error={Boolean(titleErr)}
                required
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", ml: "40px", flexWrap: "wrap" }}>
            <Box sx={{ mb: 2, mr: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Start Date<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the start date"
                type="date"
                InputProps={commonDateTimeInputProps}
                sx={commonDateTimeInputStyle}
                value={startDate}
                onChange={handleDate}
                error={Boolean(startDateErr)}
                required
              />
            </Box>

            <Box sx={{ mb: 2, mr: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                Start Time<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the start time"
                type="time"
                InputProps={commonDateTimeInputProps}
                sx={commonDateTimeInputStyle}
                value={startTime}
                error={Boolean(startTimeErr)}
                onChange={handleStartTime}
                required
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                End Time<span style={{ color: "#BE1818" }}>*</span>
              </Typography>
              <CustomSearcBar
                placeholder="Type the end time"
                type="time"
                InputProps={commonDateTimeInputProps}
                sx={commonDateTimeInputStyle}
                value={endTime}
                error={Boolean(endTimeErr)}
                onChange={handleEndTime}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "start", ml: 2 }}>
        <CustomBlueBtn sx={{fontWeight:600}} type="submit">Create Webinar</CustomBlueBtn>
        <CustomEditBtn onClick={handleClose}>Cancel</CustomEditBtn>
      </DialogActions>
    </Dialog>
  );
};

export default WebinarForm;
