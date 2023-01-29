import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SathyabamaImg from "../../assets/Sathyabama.svg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, }} className="animateCards m-2">
      <CardMedia
        sx={{ height: 300 }}
        image={SathyabamaImg}
        title="Sathyabama University"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1 className="cardsFontChanger">
            Bachelor's in Computer Science and Engineering
          </h1>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <p className="cardsSubtitleFont text-3xl">(2020 - 2024)</p>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <h1 className="cardsFontChanger">Sathyabama University, Chennai.</h1>
        </Typography>
      </CardContent>
    </Card>
  );
}
