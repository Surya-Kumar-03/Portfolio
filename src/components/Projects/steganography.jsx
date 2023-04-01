import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import steganography from "../../assets/steganography.svg";
import { createTheme } from "@mui/system";
import ImageLoader from "../Loader/loader";

const theme = createTheme({
  typography: {
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Steganography() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="animateCardsProjects border border-gray-300">
      <CardHeader
        title="Steganography Implementation"
        subheader="A basic implementation of the idea of steganography."
        subheaderTypographyProps={{ fontFamily:'"Unbounded",cursive', fontSize:"0.90rem" }} 
        titleTypographyProps={{fontFamily:'"Unbounded",cursive', fontSize:"1.5rem"}}
      />
      <ImageLoader
        component="img"
        className="h-[216px] shadow-md rounded-md m-2 border border-gray-300"
        height="194"
        src={steganography}
        alt="Steganography"
      ></ImageLoader>
      <CardContent>
        <Typography variant="body2" color="text.secondary" theme={theme} className="text-md font-thin">
          HTML5, CSS3, Bootstrap 5, Tailwind CSS, Javascript ES6
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="GitHub">
          <a
            href="https://github.com/Aryanamish/Steganography"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="octicon:mark-github-16" width="40" height="40" />
          </a>
        </IconButton>
        <IconButton aria-label="Live">
          <a
            href="https://aryanamish.github.io/Steganography/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="fluent-mdl2:website" width="40" height="40" />
          </a>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="text-md font-thin">
          <Typography paragraph theme={theme} className= "font-medium">Description:</Typography>
          <Typography paragraph theme={theme}>
            Steganography is the practice of hiding information within other,
            seemingly innocent media. This can include hiding a message within
            an image, audio file, or even other text. The goal of steganography
            is to conceal the existence of the message, rather than encrypting
            it, making it more difficult to detect.
          </Typography>
          <Typography theme={theme}>
            Steganography is often used to protect sensitive information, such
            as communication between espionage agents, but it can also be used
            for illegal activities like hiding malware within seemingly innocent
            files. This project is a basic implementation of the idea
            of steganography.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
