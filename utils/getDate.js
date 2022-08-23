const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDate = () => {
  const date = new Date();
  const formattedDate =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  return formattedDate;
};
