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
import quickQuizizz from "../../assets/quickquizizz.svg";
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

export default function QuickQuizizz() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="animateCardsProjects">
      <CardHeader
        title="Quick-Quizizz"
        subheader="A responsive online web-based quiz-app with timer."
        subheaderTypographyProps={{ fontFamily:'"Unbounded",cursive', fontSize:"0.90rem" }} 
        titleTypographyProps={{fontFamily:'"Unbounded",cursive', fontSize:"1.5rem"}}
      />
      <ImageLoader
        component="img"
        className="h-[216px] shadow-md rounded-sm m-2"
        height="194"
        src={quickQuizizz}
        alt="Quick-Quizizz"
      ></ImageLoader>
      <CardContent>
        <Typography variant="body2" color="text.secondary" theme={theme} className="text-md font-thin">
          HTML5, CSS3, Bootstrap 5, Vanilla JS ES6, NodeJS, ExpressJS, MongoDB,
          Mongoose, Cyclic
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <a
            href="https://github.com/Surya-Kumar-03/Quick-Quizizz"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="octicon:mark-github-16" width="40" height="40" />
          </a>
        </IconButton>
        <IconButton aria-label="Live">
          <a
            href="https://lazy-erin-seahorse-tux.cyclic.app/"
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
            A responsive and user-friendly full-stack quiz web app for students
            to assess themselves and gain knowledge.
          </Typography>
          <Typography theme={theme}>
            Teachers can add, change or delete questions as needed (CRUD
            Operations) and view students’ results.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
