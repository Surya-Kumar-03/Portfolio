import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImageLoader from "../Loader/loader";

export default function CardEdu({ src, alt, course, duration, location }) {
  return (
    <Card
      sx={{ maxWidth: 345, boxShadow: "1" }}
      className="animateCards m-2 border border-gray-400"
    >
      <ImageLoader
        component="img"
        className="h-[329px] shadow-md rounded-sm m-2"
        height="300"
        src={src}
        alt={alt}
      >
        <div className="flex items-center h-full rounded-sm w-full border border-gray-300 p-2 animate-pulse">
          {" "}
          <svg
            className="text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
      </ImageLoader>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p className="cardsFontChanger">{course}</p>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <p className="cardsSubtitleFont text-3xl">{duration}</p>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <p className="cardsFontChanger">{location}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
