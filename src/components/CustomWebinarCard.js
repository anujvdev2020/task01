import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material/";

import { styled } from "@mui/material/styles";
import { userAvatar } from "./assets";

import CustomEditBtn from "./CustomEditBtn";
import CustomDeleteBtn from "./CustomDeleteBtn";

import { convertTimeRange,getRandomColor ,getFormattedDate,getDay} from "./utils";


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
  const cutomColor = getRandomColor();

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
      <CardContent sx={{ background: cutomColor, borderRadius: "16px" }}>
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
              image={image ?? userAvatar}
              sx={{ width: "auto" }}
            />
          </Box>
        </Box>
      </CardContent>

      <CardContent sx={{ paddingLeft: 0 }}>
        <Typography variant="h3" sx={{ color: cutomColor, mb: 1 }}>
          {topics}
        </Typography>
        <Typography variant="h2" sx={{ color: "primary.main", mb: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component={"body1"} sx={{ color: "dark.main" }}>
            {getDay(startDate)}
          </Typography>
          <ul style={{ margin: "0", paddingLeft: "30px" }}>
            <li style={{ color: "black" }}>
              <Typography component={"body1"} sx={{ color: "dark.main" }}>
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
        <CustomEditBtn onClick={() => handleSetSelectedWebinar(webinarData)}>
          Edit
        </CustomEditBtn>
      </CardActions>
    </CustomCard>
  );
};

export default CustomWebinarCard;
