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
import quickQuizizz from "../../assets/quickquizizz.svg";

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
    <Card sx={{ maxWidth: 345 }} className="sm:mr-3 mt-3 animateCardsProjects">
      <CardHeader
        title="Quick-Quizizz"
        subheader="A responsive online web-based quiz-app with timer."
      />
      <CardMedia
        component="img"
        height="194"
        image={quickQuizizz}
        alt="Quick-Quizizz"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
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
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            A responsive and user-friendly full-stack quiz web app for students
            to assess themselves and gain knowledge.
          </Typography>
          <Typography>
            Teachers can add, change or delete questions as needed (CRUD
            Operations) and view students’ results.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
