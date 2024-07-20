import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material/";

import { styled } from "@mui/material/styles";
import { userAvatar } from "./assets";

import CustomEditBtn from "./CustomEditBtn";
import CustomDeleteBtn from "./CustomDeleteBtn";

const CustomCard = styled(Card)(({ theme }) => ({
  width: 380,
  height: 321,
  backgroundColor: "#FFFFFF",
  color: "white",
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  border: "1px solid #E3E7EC",
  borderRadius: "21px",
  boxShadow: "0px 20px 46px -24px #0E10131F",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const getRandomIndex = () => {
  const color = [
    "#741DE3",
    "#E72174",
    "#08A79E",
    "#0E51F1",
    "#FFB023",
    "#088761",
  ];
  const index = Math.floor(Math.random() * 6);
  return color[index];
};

const CustomWebinarCard = () => {
  const cutomColor = getRandomIndex();

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
              Webinar
            </Typography>
            <Typography variant="h3" sx={{ color: "light.main" }}>
              Lead Front End Developer Google
            </Typography>
          </Box>
          <Box>
            <CardMedia
              component="img"
              alt="green iguana"
              height="76"
              image={userAvatar}
              sx={{ width: "auto" }}
            />
          </Box>
        </Box>
      </CardContent>

      <CardContent sx={{ paddingLeft: 0 }}>
        <Typography variant="h3" sx={{ color: cutomColor, mb: 1 }}>
          Front End Engineering
        </Typography>
        <Typography variant="h2" sx={{ color: "primary.main", mb: 1 }}>
          React and React Native
        </Typography>
        <Box sx={{ display: "flex",alignItems:"center" }}>
          <Typography component={"body1"} sx={{ color: "dark.main" }}>
            Tuesday
          </Typography>
          <ul style={{margin:"0",paddingLeft:"30px"}}>
            <li style={{color:"black"}}>
              <Typography component={"body1"} sx={{ color: "dark.main" }}>
                April 22, 4:00 - 5:00 PM
              </Typography>
            </li>
          </ul>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: "15px 0px" }}>
        <CustomDeleteBtn>Delete</CustomDeleteBtn>
        <CustomEditBtn>Edit</CustomEditBtn>
      </CardActions>
    </CustomCard>
  );
};

export default CustomWebinarCard;
