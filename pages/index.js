import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@mui/system'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from "@mui/material/Container"
import LinearProgress from '@mui/material/LinearProgress';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const customeSlider = useRef();
  const [expanded, setExpanded] = useState('panel1');
  const [count, setCount] = useState(1)
  const [progress, setProgress] = useState(0);

  const handleChange = (panel, id) => (event, isExpanded) => {
    console.log("Change", panel);
    setProgress(0)
    setCount(id);
    setExpanded(isExpanded ? panel : false);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count => count === 4 ? 1 : count + 1);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  // const handleTimer = () => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 2));
  //   }, 400);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }

  useEffect(() => {

    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 2));
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [])

  useEffect(() => {
    if (progress == 100) {
      setCount(count => count === 4 ? 1 : count + 1);
      setProgress(0);

    }
  }, [progress])

  useEffect(() => {
    setExpanded(`panel${count}`);
    customeSlider.current.slickGoTo(count - 1)
    // handleChange(`panel+${count}`)
    console.log(count);
    // handleTimer()
  }, [count])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 15000,
    vertical: true,
    verticalSwiping: false,
    easing: "linear"
    // fade: true,
    // centerPadding: "60px",
    // centerMode: true,
  };
  return (
    <>
      <Box>
        <Container maxWidth="md">
          {/* {count} {progress} */}
          <Box className="animcont" sx={{ display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <Slider {...settings} ref={customeSlider}>
                <div>
                  <img src="/user1.jpg" alt="" />
                </div>
                <div>
                  <img src="/user2.jpg" alt="" />
                </div>
                <div>
                  <img src="/user1.jpg" alt="" />
                </div>
                <div>
                  <img src="/user2.jpg" alt="" />
                </div>
              </Slider>
            </Box>
            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Box>
                <h1>AIO Solution Animation</h1>
                <p>AIO SOlution Animation Description</p>
              </Box>
              <Box>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1', 1)} TransitionProps={{ unmountOnExit: true }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      General settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                      Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                  </AccordionDetails>
                  {/* {
                count == 1 && progress > 0 && <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={count == 1 ? progress : 0} sx={{
                    ".MuiLinearProgress-bar": {
                      transition: progress == 0 && "none"
                    }
                  }} />
                </Box>
              } */}
                  <Box>
                    <LinearProgress variant="determinate" value={count == 1 ? progress : 0} sx={{
                      ".MuiLinearProgress-bar": {
                        transition: progress == 0 && "none"
                      }
                    }} />
                  </Box>

                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2', 2)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                      varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                      laoreet.
                    </Typography>
                  </AccordionDetails>
                  <Box sx={{ width: '100%', display: count == 2 ? "block" : "none" }}>
                    <LinearProgress variant="determinate" value={count == 2 ? progress : 0} sx={{
                      ".MuiLinearProgress-bar": {
                        transition: progress == 0 && "none"
                      }
                    }} />
                  </Box>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3', 3)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                      Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Filtering has been entirely disabled for whole web server
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                      amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                  </AccordionDetails>
                  <Box sx={{ width: '100%', display: count == 3 ? "block" : "none" }}>
                    <LinearProgress variant="determinate" value={count == 3 ? progress : 0} sx={{
                      ".MuiLinearProgress-bar": {
                        transition: progress == 0 && "none"
                      }
                    }} />
                  </Box>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4', 4)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                      amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                  </AccordionDetails>
                  <Box sx={{ width: '100%', display: count == 4 ? "block" : "none" }}>
                    <LinearProgress variant="determinate" value={count == 4 ? progress : 0} sx={{
                      ".MuiLinearProgress-bar": {
                        transition: progress == 0 && "none"
                      }
                    }} />
                  </Box>
                </Accordion>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box >
    </>
  )
}
