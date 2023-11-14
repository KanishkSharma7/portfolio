import React, { useState } from "react";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Acadprojs() {
  const [expanded, setExpanded] = useState("work_1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const academic_projects = [
    {
      id: "work_1",
      title: "Ethereum-based NFT Marketplace",
      description: `I designed and implemented an Ethereum-based NFT Marketplace, taking charge of both the frontend development and the creation of smart contracts. The project involved utilizing the Solidity programming language and adhering to ERC-721 standards to ensure compatibility with the Ethereum blockchain. This comprehensive approach not only covered the user interface but also implemented the underlying smart contracts governing the creation, ownership, and transfer of non-fungible tokens (NFTs). This initiative contributed to the creation of a robust and decentralized marketplace tailored for the unique digital asset ecosystem.`,
    },
    {
      id: "work_2",
      title: "Blockchain-based Chain of Custody Form ",
      description: `I developed a digital equivalent of a chain of custody form using my own blockchain, focusing on enhancing the traditional process. This project aimed to create a secure and transparent digital ledger, ensuring a tamper-resistant record of the custody journey. Each transaction within the blockchain represented a step in the custody process, fostering data security, trust, and accountability. The development involved the implementation of smart contracts, consensus mechanisms, and cryptographic principles to establish a robust and decentralized chain of custody solution. The overarching goal was to showcase the transformative potential of blockchain technology in improving established processes within custody management.`,
    },
    {
      id: "work_3",
      title: "Ball Tracking in Sports using Deep Learning ",
      description: `I successfully developed a cutting-edge real-time tennis ball tracking system employing deep learning techniques. This project was designed to elevate sports analysis, coaching, and broadcasting by addressing challenges related to occlusions and fast ball movement. The system not only enhances the understanding of sports events but also contributes to an elevated level of enjoyment for viewers. The implementation involved advanced deep learning algorithms that enabled accurate tracking of the tennis ball, even in scenarios where occlusions and rapid ball movement traditionally posed challenges. This innovative solution signifies a significant advancement in sports technology, offering potential applications across various sporting contexts.`,
    },
    // {
    //   id: "work_4",
    //   title:
    //     "Social media application using the ethereum blockchain and Next JS ",
    //   description: "Some cool PD here",
    // },
  ];
  return (
    <div
      style={{
        backgroundColor: "transparent",
        border: "3px solid white",
        borderRadius: "20px",
        marginTop: "5.5%",
        padding: "5%",
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{
          "&.MuiTypography-root": {
            fontSize: "1.8rem", // Default font size for title
            "@media (max-width:600px)": {
              fontSize: "1rem", // Adjust font size for smaller screens
            },
          },
        }}
      >
        My Academic Projects!
      </Typography>
      <div>
        {academic_projects.map((experience, index) => (
          <Accordion
            key={experience.id}
            expanded={expanded === experience.id}
            onChange={handleChange(experience.id)}
            sx={{
              backgroundColor: "transparent",
              border: "3px solid white",
              marginTop: "3%",
              borderRadius: "20px",
              ":first-of-type": {
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              },
              ":last-of-type": {
                borderBottomLeftRadius:
                  index === academic_projects.length - 1 ? "20px" : 0,
                borderBottomRightRadius:
                  index === academic_projects.length - 1 ? "20px" : 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls={`${experience.id}-dates`}
              id={`${experience.id}-header`}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  color="white"
                  variant="h6"
                  sx={{
                    "&.MuiTypography-root": {
                      fontSize: "1.2rem", // Default font size for title
                      "@media (max-width:600px)": {
                        fontSize: "0.85rem", // Adjust font size for smaller screens
                      },
                    },
                  }}
                >
                  {experience.title}
                </Typography>
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

export default Acadprojs;
