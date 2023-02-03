import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import portfolio from "../../assets/portfolio.svg";


export default function Portfolio() {
  return (
    <Card sx={{ maxWidth: 345 }} className="sm:mr-3 mt-3 animateCardsProjects">
      <CardHeader
        title="Personal Portfolio"
        subheader="The website you are currently on!"
      />
      <CardMedia
        component="img"
        height="194"
        image={portfolio}
        alt="Portfolio"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          HTML5, CSS3, Tailwind CSS, ReactJS, Material UI, Npm & sub-libraries, Netlify
        </Typography>
      </CardContent>
    </Card>
  );
}