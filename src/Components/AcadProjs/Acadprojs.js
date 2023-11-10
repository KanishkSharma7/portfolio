import React, { useState } from "react";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Acadprojs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const academic_projects = [
    {
      id: "work_1",
      title: "Ethereum-based NFT Marketplace",
      description: "Some cool PD here",
    },
    {
      id: "work_2",
      title: "Blockchain-based Chain of Custody Form ",
      description: "Some cool PD here",
    },
    {
      id: "work_3",
      title: "Ball Tracking in Sports using Deep Learning ",
      description: "Some cool PD here",
    },
    {
      id: "work_4",
      title:
        "Social media application using the ethereum blockchain and Next JS ",
      description: "Some cool PD here",
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
        My Academic Projects!
      </Typography>
      <div>
        {academic_projects.map((experience, index) => (
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
                <Typography color="white" variant="h6">
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
