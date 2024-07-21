import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material/";

import { styled } from "@mui/material/styles";
import { userAvatar } from "./assets";

import CustomEditBtn from "./CustomEditBtn";
import CustomDeleteBtn from "./CustomDeleteBtn";

import {
  convertTimeRange,
  getRandomColor,
  getFormattedDate,
  getDay,
} from "./utils";
import { useTheme } from "@emotion/react";
import { useState,useEffect } from "react";

const CustomCard = styled(Card)(({ theme }) => ({
  width: 380,
  height: 321,
  backgroundColor: "#FFFFFF",
  color: "white",
  margin: "8px 8px 8px 14px",
  padding: theme.spacing(2),
  border: "1px solid #E3E7EC",
  borderRadius: "21px",
  boxShadow: "0px 20px 46px -24px #0E10131F",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

const CustomWebinarCard = ({
  webinarData,
  handleSetSelectedWebinar,
  handleDelete,
}) => {
  // const cutomColor = getRandomColor();
  const theme=useTheme()
  const [customColor, setCustomColor] = useState('');
  useEffect(() => {
    // Call getRandomColor once when the component mounts
    setCustomColor(getRandomColor());
  }, []); // Empty dependency array ensures this runs only once


  const {
    name,
    role,
    company,
    topics,
    image,
    title,
    startDate,
    startTime,
    endTime,
  } = webinarData;
  return (
    <CustomCard>
      <CardContent sx={{ background: customColor, borderRadius: "16px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ color: "light.main" }}>
              {name}
            </Typography>
            <Typography variant="h3" sx={{ color: "light.main" }}>
              {role}
            </Typography>
            <Typography variant="h3" sx={{ color: "light.main" }}>
              {company}
            </Typography>
          </Box>
          <Box>
            <CardMedia
              component="img"
              alt="green iguana"
              height="76"
              image={image || userAvatar}
              sx={{ width: "auto" }}
            />
          </Box>
        </Box>
      </CardContent>

      <CardContent sx={{ paddingLeft: 0 }}>
        <Typography variant="h3" sx={{ color: customColor, mb: 1 }}>
          {topics}
        </Typography>
        <Typography variant="h2" sx={{ color: "primary.main", mb: 1 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("md")]: { display: "block" },
          }}
        >
          <Typography component={"h5"} sx={{ color: "dark.main" }}>
            {getDay(startDate)}
          </Typography>
          <ul style={{ margin: "0", paddingLeft: "30px" }}>
            <li style={{ color: "black" }}>
              <Typography component={""} sx={{ color: "dark.main" }}>
                {getFormattedDate(startDate)},
                {convertTimeRange(startTime, endTime)}
              </Typography>
            </li>
          </ul>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: "15px 0px" }}>
        <CustomDeleteBtn onClick={() => handleDelete(webinarData.id)}>
          Delete
        </CustomDeleteBtn>
        <CustomEditBtn sx={{marginLeft:"30px"}} onClick={() => handleSetSelectedWebinar(webinarData)}>
          Edit
        </CustomEditBtn>
      </CardActions>
    </CustomCard>
  );
};

export default CustomWebinarCard;
