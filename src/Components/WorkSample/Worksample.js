import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Container, styled } from "@mui/system";
import artsmiley from "../../Images/artsmiley.png";
import handm from "../../Images/handm.png";
import suzuki from "../../Images/suzuki.png";
import techt from "../../Images/techt.png";
import fixl from "../../Images/fixl.png";
import fondos from "../../Images/fondos.png";
import Acadprojs from "../AcadProjs/Acadprojs";


function WorkSample() {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const buttonStyles = {
    border: "2px solid white",
    transition: "background-color 0.3s, color 0.3s",
    display: "flex",
    alignItems: "center",
    marginTop: "2.5%",
  };

  const checkButtonStyles = {
    ...buttonStyles,
    backgroundColor: "transaparent",
    color: "white",
    marginRight: "5%",
    ":hover": {
      backgroundColor: "white",
      color: "black",
    },
  };
  const CustomCard = styled(Card)(({ theme }) => ({
    border: "2px solid white",
    borderRadius: "20px",
    backgroundColor: "transparent",
    position: "relative",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.5)",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    border: "1px solid white",
    marginTop: "7.5%",
    fontFamily: "Raleway",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  }));

  const toggleExpanded = (panelId) => {
    if (expanded === panelId) {
      // If the clicked card is already expanded, collapse it
      setExpanded("");
    } else {
      // If another card is clicked, expand it
      setExpanded(panelId);
    }
  };

  const professional_projects = [
    {
      id: "work_1",
      title: "ArtSmiley",
      description: `ArtSmiley is a sophisticated online art gallery that seamlessly connects buyers, curators, and artists in a collaborative space for art transactions. The platform boasts a multi-level user interface catering to roles like admin, superadmin, curator, artist, and buyer. As a key contributor to the project, my focus centered on crafting intuitive user interfaces for the superadmin, curator, and user panels, leveraging the power of React JS and Material UI. Moreover, I played a pivotal role in developing robust APIs, ensuring seamless functionality across various panels. The project is currently live, providing an engaging and dynamic environment for art enthusiasts worldwide.`,
      link: "https://artsmiley.com/",
      imageUrl: artsmiley,
    },
    {
      id: "work_2",
      title: "Heute and Morgen Insurance",
      description: `Heute and Morgen Insurance Brokers is a comprehensive web application designed to empower users in comparing and purchasing insurance policies, spanning categories like vehicle insurance and life insurance. The application, developed with a tech stack comprising HTML, CSS, JQuery, AJAX ,and Laravel (PHP), offers a seamless and user-friendly experience. In my capacity on this project, I took charge of developing robust APIs that facilitated key features, including policy searches, filter creation, payment integrations, and more. Additionally, I actively contributed to shaping the user interface, ensuring a visually appealing and intuitive design for an enhanced user experience.`,
      link: "https://www.heuteandmorgen.com/",
      imageUrl: handm,
    },

    {
      id: "work_3",
      title: "Suzuki Motorcycles India",
      description: `The Suzuki Motorcycles India official website stands as a testament to cutting-edge web development, employing Laravel, HTML, CSS, jQuery, and AJAX technologies. This dynamic platform caters to a diverse range of user needs, offering features like updates on new releases, dealership information, and seamless motorcycle booking and purchasing. As a pivotal member of the development team, my responsibilities encompassed crafting an engaging and user-centric User Interface. In addition to this, I played a crucial role in overseeing the SQL databases integral to the web application's functionality. A distinctive contribution to this project was the implementation of APIs aimed at preventing the hoarding of popular motorbikes, particularly the iconic Hayabusas, showcasing my innovative problem-solving skills.`,
      link: "https://www.suzukimotorcycle.co.in/",
      imageUrl: suzuki,
    },
    {
      id: "work_4",
      title: "Techconfer Technologies",
      description: `Techconfer Technologies' official website, a cornerstone of the company's online presence, was a testament to the prowess of the MERN stack. During my tenure at Techconfer Technologies, I played a pivotal role in shaping the user interface of the website, ensuring a seamless and engaging experience for visitors. Beyond UI development, my responsibilities extended to the creation of diverse APIs, ranging from email automation to the integration of chatbots. This multifaceted contribution underscored my versatility and proficiency in leveraging the capabilities of the MERN stack for comprehensive web development.`,
      link: "https://techconfer.com/",
      imageUrl: techt,
    },
    {
      id: "work_5",
      title: "Fixl Solutions",
      description: `Fixl Solutions' company website, a testament to its digital presence, was crafted with precision and efficiency using WordPress (PHP). As a key contributor to this project, I took charge of developing the user interface, ensuring an aesthetically pleasing and user-friendly design. Through meticulous attention to detail, I brought the Fixl Solutions website to life, aligning it with the company's branding and values. This endeavor showcased my proficiency in utilizing PHP within the WordPress framework to deliver a compelling and visually appealing online platform for the organization.`,
      link: "https://fixlsolutions.com/",
      imageUrl: fixl,
    },
    {
      id: "work_6",
      title: "Fondos Technologies",
      description: `At Fondos Technologies, during the early stages of my career, I played a significant role in the development of the company website using Laravel. My responsibilities extended to crafting a user-friendly and visually engaging user interface, contributing to the overall appeal of the website. Additionally, I ventured into the realm of API creation, with a notable accomplishment being the integration of WhatsApp functionality. While my contributions were substantial in the context of my evolving expertise, they marked a valuable stepping stone in my professional journey.`,
      link: "https://fondostech.in/",
      imageUrl: fondos,
    },
  ];
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="white"
            sx={{
              textAlign: "center",
              marginBottom: "2%",
            }}
            fontFamily="Raleway"
          >
            Check out my work!
          </Typography>
        </Grid>
        {professional_projects.map((worksample) => (
          <Grid key={worksample.id} item xs={12} sm={6} md={4}>
            <CustomCard
              sx={{
                border: "2px solid white",
                borderRadius: "20px",
                backgroundColor: "transparent",
                position: "relative",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={worksample.imageUrl}
                title={worksample.title}
              />
              <CardContent
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                    fontFamily="Raleway"
                  >
                    {worksample.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "white", textAlign: "justify" }}
                    fontFamily="Raleway"
                  >
                    {expanded === worksample.id
                      ? worksample.description // Show full description if expanded
                      : worksample.description.substring(0, 100) + " ..."}{" "}
                    {/* Show truncated description */}
                    {worksample.description.length > 100 && (
                      <span
                        style={{
                          color: "white",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleExpanded(worksample.id)}
                      >
                        {expanded === worksample.id ? "Read less" : "Read more"}
                      </span>
                    )}
                  </Typography>
                </div>
                <CardActions>
                  <CustomButton
                    size="small"
                    onClick={() => window.open(worksample.link, "_blank")}
                    sx={{ color: "white", border: "1px solid white", marginTop: "7.5%", fontFamily: "Raleway" }}
                  >
                    Check it out
                  </CustomButton>
                </CardActions>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
      <Acadprojs />
    </Container>
  );
}

export default WorkSample;
