import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import events from "../../assets/events.svg";
import { createTheme } from "@mui/system";
import ImageLoader from "../Loader/loader";

const theme = createTheme({
  typography: {
  },
});

export default function EventsSathyabama() {
  return (
    <Card sx={{ maxWidth: 345 }} className="animateCardsProjects border border-gray-300">
      <CardHeader
        title="Events@Sathyabama"
        subheader="A Event Management System to effortlessly manage all college events."
        subheaderTypographyProps={{ fontFamily:'"Unbounded",cursive', fontSize:"0.90rem" }} 
        titleTypographyProps={{fontFamily:'"Unbounded",cursive', fontSize:"1.5rem"}}
      />
      <ImageLoader
        component="img"
        className="h-[216px] shadow-md rounded-md m-2 border border-gray-300"
        height="194"
        src={events}
        alt="Events@Sathyabama"
      ></ImageLoader>
      <CardContent>
        <Typography variant="body2" color="text.secondary" theme={theme} className="text-md font-thin">
          HTML5, CSS3, Material UI, NextJS, ReactJS,
        </Typography>
      </CardContent>
    </Card>
  );
}
