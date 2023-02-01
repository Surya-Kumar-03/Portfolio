import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SdaImg from "../../assets/Sda.svg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="animateCards m-2">
      <CardMedia sx={{ height: 300 }} image={SdaImg} title="SDA School" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p className="cardsFontChanger">
            Elementary to Higher Secondary Education
          </p>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <p className="cardsSubtitleFont text-3xl">(2006 - 2020)</p>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <p className="cardsFontChanger">Seventh-Day Adventist School, Hosur.</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
