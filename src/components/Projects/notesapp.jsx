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
import notesApp from "../../assets/notesApp.svg";

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

export default function NotesApp() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="sm:mr-3 mt-3">
      <CardHeader
        title="Notes-App"
        subheader="A simple notes web app for everyday productivity."
      />
      <CardMedia
        component="img"
        height="194"
        image={notesApp}
        alt="Notes-App"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          HTML5, CSS3, ReactJS, Firebase
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub">
          <a
            href="https://github.com/Surya-Kumar-03/Notes-App"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="octicon:mark-github-16" width="40" height="40" />
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
            A simple and responsive notes web app for everyday productivity and
            keeping track of ideas.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
