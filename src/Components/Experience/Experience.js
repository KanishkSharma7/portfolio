import {
  Typography,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TestimonialSlider from "../Testimonials/Testimonials";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Experience() {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Set the breakpoint as needed
    };

    handleResize(); // Call once on initial render

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const work_experience = [
    {
      id: "work_1",
      title: "Software Developer @ Techconfer Technologies",
      dates: "August 2022 - June 2023",
      description: `As a Software Developer at Techconfer Technologies Pvt. Ltd., I played a crucial role in a dynamic team of seven members. My primary focus was on two significant MERN stack-based projects. The first project, Artsmiley, stood as an innovative online art gallery that seamlessly connected artists, curators, and buyers from across the globe. In this venture, I utilized MongoDB, Express JS, React JS, and Node JS to craft a platform that facilitated the global art community.
      In the second project, I continued to contribute within the same collaborative team, working on a distinct venture called Whiteline. This property listing portal specialized in the online buying and selling of land properties. My role involved implementing robust solutions using the MERN stack, ensuring a smooth and efficient experience for users navigating the platform. Additionally, I had the opportunity to contribute to the development of the company's website, showcasing our commitment to a strong online presence. These experiences not only honed my technical skills but also allowed me to thrive in a collaborative and dynamic development environment.`,
    },
    {
      id: "work_2",
      title: "Freelance Software Developer",
      dates: "December 2021 - August 2022",
      description: `During my freelance stint, I spearheaded the development of an NFT Marketplace utilizing the Ethereum Blockchain, Solidity, and Next JS. This groundbreaking application facilitates users in minting, trading, auctioning, and selling Non-Fungible Tokens (NFTs). Deployed globally, the platform has garnered users from various corners of the world, showcasing the global impact of blockchain technology.`,
    },
    {
      id: "work_3",
      title: "Software Developer @ Fondos Technologies",
      dates: "July 2021 - December 2021",
      description: `During my tenure at Fondos Technologies Pvt. Ltd., I assumed a leadership role in driving the development of impactful projects. Leading a 5-man team, I orchestrated the creation of e-commerce and lead management systems, notably achieving a remarkable 100% increase in new account registrations for the Heute and Morgen Insurance Brokers Pvt. Ltd. website. Simultaneously, I played a crucial part in contributing to a company website project, showcasing my versatility in handling diverse responsibilities. Spearheading a team of 3 individuals, I successfully developed an e-commerce website and a lead management system using PHP, particularly within the Laravel Framework. This demonstrated my hands-on expertise in crafting robust solutions that align with industry standards. Furthermore, my collaborative efforts in developing the company website underscore my commitment to excellence within a team environment.`,
    },
    {
      id: "work_4",
      title: "Web Developer Intern @ Fixl Solutions",
      dates: "January 2021 - June 2021",
      description: `As an integral part of a 5-man team, I made significant contributions to Fixl Solutions during my internship. Utilizing the MERN framework, I developed e-commerce websites for beauty products and computer accessories, showcasing my proficiency in React and Node. Moreover, I played a pivotal role in the revamp of the company's website using PHP within the WordPress environment. One of my notable achievements involved devising a custom algorithm and implementing smart contracts to automate a crypto-based commission payout system. This innovative solution not only streamlined operations but also led to a remarkable 7% reduction in operational costs for the company. Today, this commission payout system stands as a testament to my ability to blend technical expertise with practical solutions.`,
    },
  ];
  return (
    <Container>
      <Typography
        variant="h3"
        color="white"
        sx={{ textAlign: "center", marginBottom: "5%" }}
      >
        Work Experience
      </Typography>
      <Timeline position="alternate">
        {work_experience.map((experience, index) => (
          <TimelineItem key={experience.id}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ flex: 1, position: "relative" }}>
              <Card
                sx={{
                  border: "3px solid white",
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="white"
                      sx={{ textAlign: "left", marginRight: "8px" }}
                    >
                      {experience.title}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      <Collapse
                        in={expanded === experience.id}
                        timeout="auto"
                        unmountOnExit
                      >
                        <IconButton
                          sx={{
                            color: "white",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "black",
                            },
                          }}
                          onClick={() => handleExpand(experience.id)}
                        >
                          {expanded === experience.id ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </IconButton>
                      </Collapse>
                    </div>
                  </div>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ marginBottom: "8px", textAlign: "left" }}
                  >
                    {experience.dates}
                  </Typography>
                  <Collapse
                    in={expanded === experience.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Typography color="white" sx={{ textAlign: "justify" }}>
                      {experience.description}
                    </Typography>
                  </Collapse>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <TestimonialSlider />
    </Container>
  );
}

export default Experience;
