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
import { createTheme } from "@mui/system";
import ImageLoader from "../Loader/loader";

const theme = createTheme({
  typography: {},
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

export default function CardProj(props) {
  const { title, subheader, src, tech, description, github, live } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const hasLinks = github || live;
  console.log(github);
  console.log(hasLinks);

  return (
    <Card
      sx={{ maxWidth: 345, boxShadow: "1" }}
      className="animateCardsProjects border border-gray-300"
    >
      <CardHeader
        title={title}
        subheader={subheader}
        subheaderTypographyProps={{
          fontFamily: '"Unbounded",cursive',
          fontSize: "0.90rem",
        }}
        titleTypographyProps={{
          fontFamily: '"Unbounded",cursive',
          fontSize: "1.5rem",
        }}
      />
      <ImageLoader
        component="img"
        className="mx-2 border"
        height="194"
        src={src}
        alt={title}
      >
        <div className="flex items-center justify-center h-full rounded-sm w-full border border-gray-300 p-2 animate-pulse">
          {" "}
          <svg
            className="text-gray-300 h-36"
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
        <Typography
          variant="body2"
          color="text.secondary"
          theme={theme}
          className="text-md font-thin"
        >
          {tech}
        </Typography>
      </CardContent>
      {hasLinks && (
        <CardActions disableSpacing>
          {github && (
            <IconButton aria-label="GitHub">
              <a href={github} target="_blank" rel="noreferrer">
                <Icon icon="octicon:mark-github-16" width="40" height="40" />
              </a>
            </IconButton>
          )}
          {live && (
            <IconButton aria-label="Live">
              <a href={live} target="_blank" rel="noreferrer">
                <Icon icon="fluent-mdl2:website" width="40" height="40" />
              </a>
            </IconButton>
          )}
          {description && (
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          )}
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="text-md font-thin">
          <Typography paragraph theme={theme} className="font-medium">
            Description:
          </Typography>
          <Typography paragraph theme={theme}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
