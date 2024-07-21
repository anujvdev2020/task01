import moment from "moment";

//return the time string in hh:mm : hh:mm A format eg: 04:00 - 05:00 PM

const convertTimeRange = (startTime, endTime) => {
  const start = moment(startTime, "HH:mm").format("h:mm A");
  const end = moment(endTime, "HH:mm").format("h:mm A");
  return `${start} - ${end}`;
};

// return random colors for the cards
const getRandomColor = () => {
  const colorScheme = [
    "#741DE3",
    "#E72174",
    "#08A79E",
    "#0E51F1",
    "#FFB023",
    "#088761",
  ];
  const index = Math.floor(Math.random() * 6);
  return colorScheme[index];
};

//return date in Month Date format eg: April 22
const getFormattedDate = (dateString) => {
  return moment(dateString).format("MMMM D");
};

const getDay = (date) => {
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(date);
  return daysArray[d.getDay()];
};

export { convertTimeRange, getRandomColor, getFormattedDate,getDay };
