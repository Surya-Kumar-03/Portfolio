  import useScrollTrigger from '@mui/material/useScrollTrigger';
  import Box from '@mui/material/Box';
  import Fade from '@mui/material/Fade';

  export default function BackTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      document.documentElement.scrollTop = 0;
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', top: 10}}
        >
          {children}
        </Box>
      </Fade>
    );
  }