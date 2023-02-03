import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import spaceShip from "../../assets/spaceShip.svg";
import { createTheme } from "@mui/system";

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

export default function SpaceShip() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="sm:mr-3 mt-3 animateCardsProjects">
      <CardHeader
        title="Space-Ship Model"
        subheader="A cross-domain (Web-ML) application that predicts an astronaut's survival rate."
        subheaderTypographyProps={{ fontFamily:'"Unbounded",cursive', fontSize:"0.90rem" }} 
        titleTypographyProps={{fontFamily:'"Unbounded",cursive', fontSize:"1.5rem"}}
      />
      <CardMedia
        component="img"
        height="194"
        image={spaceShip}
        alt="Space-Ship"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" theme={theme} className="text-md font-thin">
          ReactJS, HTML5, CSS3, Material UI, Bootstrap, NodeJS, ExpressJS, Netlify
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="GitHub">
          <a
            href="https://github.com/Surya-Kumar-03/Space-Ship-Model"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="octicon:mark-github-16" width="40" height="40" />
          </a>
        </IconButton>
        <IconButton aria-label="Live">
          <a
            href="https://space-ship-model.netlify.app/"
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
          <Typography paragraph theme={theme} className="font-medium">Description:</Typography>
          <Typography paragraph theme={theme}>
            A cross-domain (Web-ML) application that makes appropriate
            predictions for an astronaut's survival by passing necessary
            parameters.
          </Typography>
          <Typography theme={theme}>
            It was a sarcastic project made for a hypothetical situation.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
