import { Typography } from "@mui/material";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Experience() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const work_experience = [
    {
      id: "work_1",
      title: "Software Developer at Techconfer Technologies Pvt. Ltd.",
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
      title: "Software Developer at Fondos Technologies Pvt. Ltd.",
      dates: "July 2021 - December 2021",
      description: `During my tenure at Fondos Technologies Pvt. Ltd., I assumed a leadership role in driving the development of impactful projects. Leading a 5-man team, I orchestrated the creation of e-commerce and lead management systems, notably achieving a remarkable 100% increase in new account registrations for the Heute and Morgen Insurance Brokers Pvt. Ltd. website. Simultaneously, I played a crucial part in contributing to a company website project, showcasing my versatility in handling diverse responsibilities. Spearheading a team of 3 individuals, I successfully developed an e-commerce website and a lead management system using PHP, particularly within the Laravel Framework. This demonstrated my hands-on expertise in crafting robust solutions that align with industry standards. Furthermore, my collaborative efforts in developing the company website underscore my commitment to excellence within a team environment.`,
    },
    {
      id: "work_4",
      title: "Web Developer Intern at Fixl Solutions",
      dates: "January 2021 - June 2021",
      description: `As an integral part of a 5-man team, I made significant contributions to Fixl Solutions during my internship. Utilizing the MERN framework, I developed e-commerce websites for beauty products and computer accessories, showcasing my proficiency in React and Node. Moreover, I played a pivotal role in the revamp of the company's website using PHP within the WordPress environment. One of my notable achievements involved devising a custom algorithm and implementing smart contracts to automate a crypto-based commission payout system. This innovative solution not only streamlined operations but also led to a remarkable 7% reduction in operational costs for the company. Today, this commission payout system stands as a testament to my ability to blend technical expertise with practical solutions.`,
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#2c3e50",
        border: "3px solid white",
        borderRadius: "20px",
        marginTop: "5.5%",
        padding: "5%",
      }}
    >
      <Typography variant="h4" color="white">
        Professional Experience
      </Typography>
      <div>
        {work_experience.map((experience, index) => (
          <Accordion
            key={experience.id}
            expanded={expanded === experience.id}
            onChange={handleChange(experience.id)}
            sx={{
              backgroundColor: "#2c3e50",
              border: "3px solid white",
              marginTop: "3%",
              borderRadius: "20px",
              ":first-of-type": {
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              },
              ":last-of-type": {
                borderBottomLeftRadius:
                  index === work_experience.length - 1 ? "20px" : 0,
                borderBottomRightRadius:
                  index === work_experience.length - 1 ? "20px" : 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls={`${experience.id}-dates`}
              id={`${experience.id}-header`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div>
                  <Typography color="white" variant="h6">
                    {experience.title}
                  </Typography>
                </div>
                <div>
                  <Typography sx={{ color: "white" }} variant="body2">
                    {experience.dates}
                  </Typography>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="white">{experience.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Experience;
