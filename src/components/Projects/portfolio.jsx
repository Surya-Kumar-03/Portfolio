import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import portfolio from "../../assets/portfolio.svg";
import { createTheme } from "@mui/system";
import ImageLoader from "../Loader/loader";

const theme = createTheme({
  typography: {},
});

export default function Portfolio() {
  return (
    <Card sx={{ maxWidth: 345 }} className="animateCardsProjects">
      <CardHeader
        title="Personal Portfolio"
        subheader="The website you are currently on!"
        subheaderTypographyProps={{ fontFamily:'"Unbounded",cursive', fontSize:"0.90rem" }} 
        titleTypographyProps={{fontFamily:'"Unbounded",cursive', fontSize:"1.5rem"}}
      />
      <ImageLoader
        component="img"
        className="h-[216px] shadow-md rounded-sm m-2"
        height="194"
        src={portfolio}
        alt="Portfolio"
      ></ImageLoader>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          theme={theme}
          className="text-md font-thin"
        >
          HTML5, CSS3, Tailwind CSS, ReactJS, Material UI, Npm & sub-libraries,
          Netlify
        </Typography>
      </CardContent>
    </Card>
  );
}
