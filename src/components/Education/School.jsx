import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SdaImg from "../../assets/Sda.svg";
import ImageLoader from "../Loader/loader";

export default function MediaCard() {
  return (
    <div className="lg:hover:scale-105 transition-all">
      <Card sx={{ maxWidth: 345 }} className="animateCards m-2 border border-gray-400">
        <ImageLoader
          component="img"
          className="h-[329px] shadow-md rounded-sm m-2"
          height="300"
          src={SdaImg}
          alt="SDA School"
        ></ImageLoader>
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
            <p className="cardsFontChanger">
              Seventh-Day Adventist School, Hosur.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
