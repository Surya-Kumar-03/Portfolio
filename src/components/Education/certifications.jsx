import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import googleCloud from "../../assets/googleCloud.svg";
import ImageLoader from "../Loader/loader";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "The Complete 2023 Web Development Bootcamp",
    provider: "- Udemy",
    imgPath:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-c5fe0851-7cf0-42d1-b241-073e464fdd28.jpg?v=1675091104000",
  },
  {
    label: "Google Cloud Engineer Fundamentals",
    provider: "- Google Cloud Skills Boost",
    imgPath: googleCloud,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1 }} className="shadow-lg m-2 mt-0">
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: 230,
          height: "auto",
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <div className="flex flex-col w-full justify-center items-center">
          <Typography
            className="text-center px-1 pt-4"
            sx={{ fontSize: "1.5rem", fontFamily: "Unbounded, cursive" }}
          >
            {images[activeStep].label}
          </Typography>
          <p className="font-thin text-2xl text-center">{images[activeStep].provider}</p>
        </div>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className="flex w-full justify-center">
            {Math.abs(activeStep - index) <= 2 ? (
              <ImageLoader
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                className="flex flex-col justify-center items-center h-64 sm:h-96 bg-white w-full border-x-gray-400 border-x-0 border-2"
                src={step.imgPath}
                alt={step.label}
              ></ImageLoader>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
