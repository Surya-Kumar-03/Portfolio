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
import brainBusters from "../../assets/brainBusters.avif";
import udemyCert from "../../assets/udemyCert.avif";
import dbms from "../../assets/dbms.avif";
import ImageLoader from "../Loader/loader";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "The Complete 2023 Web Development Bootcamp",
    provider: "- Udemy",
    imgPath: udemyCert,
  },
  {
    label: "Google Cloud Engineer Fundamentals",
    provider: "- Google Cloud Skills Boost",
    imgPath: googleCloud,
  },
  {
    label: "Database Management System",
    provider: "- NPTEL",
    imgPath: dbms,
  },
  {
    label: "Brain Busters (Winner)",
    provider: "- ACM SIST",
    imgPath: brainBusters,
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
          height: "auto",
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <div className="flex flex-col h-56 w-full justify-center items-center overflow-hidden">
          <Typography
            className="text-center w-80 sm:w-96 p-1"
            sx={{ fontSize: "1.5rem", fontFamily: "Unbounded, cursive" }}
          >
            {images[activeStep].label}
          </Typography>
          <p className="font-thin text-2xl text-center">
            {images[activeStep].provider}
          </p>
        </div>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="w-[22rem] sm:w-[25rem] md:w-full"
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
                className="flex flex-col justify-center items-center h-64 md:h-96 bg-white w-full border-x-gray-400 border-x-0 border-2"
                src={step.imgPath}
                alt={step.label}
              >
                <div className="flex items-center justify-center h-64 w-full p-2 animate-pulse">
                  {" "}
                  <svg
                    className="text-gray-300 h-56"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
              </ImageLoader>
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
