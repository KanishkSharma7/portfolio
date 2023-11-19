import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Kanishk and his team skillfully managed the development of our website, navigating challenging tasks such as creating a user interface with intricate 3D representation of bike models and dynamic, sophisticated animations. Their commitment ensured timely delivery, and Kanishk's exceptional work with the anti-spam API showcased remarkable precision and expertise.",
    name: "Shailendra, Suzuki Motorcycles India",
  },
  {
    id: 2,
    quote: "Exceptional performance! Kanishk is a dedicated and meticulous software developer who surpassed expectations. All tasks were completed promptly and with precision. His stellar communication skills further enriched the process. Overall, I highly recommend Kanishk as a proficient software developer.",
    name: "Shashank Sharma, CEO, DtoC Launchpad",
  },
  // {
  //   id: 3,
  //   quote: "Exceptional service and quality. Would highly recommend!",
  //   name: "Alex Johnson",
  // },
  // {
  //   id: 4,
  //   quote: "Impressed by the dedication and attention to detail.",
  //   name: "Emily Brown",
  // },
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextIndex = startIndex + 2;
  const prevIndex = startIndex - 2;

  const goToPrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 2);
    }
  };

  const goToNext = () => {
    if (startIndex < testimonials.length - 2) {
      setStartIndex((prevIndex) => prevIndex + 2);
    }
  };

  return (
    <div>
      <Typography
        variant="h3"
        color="white"
        sx={{ textAlign: "center", marginTop: "5%", marginBottom: "2.5%" }}
        fontFamily="Raleway"
      >
        Client Testimonials
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={goToPrev}
          disabled={startIndex === 0}
          style={{ color: "white" }}
        >
          <NavigateBefore />
        </IconButton>
        <Grid container spacing={2}>
          {testimonials.slice(startIndex, startIndex + 2).map((testimonial) => (
            <Grid key={testimonial.id} item xs={12} sm={6}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "transparent",
                  border: "2px solid white",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <Typography variant="body1" color="white" fontFamily="Raleway">
                      {testimonial.quote}
                    </Typography>
                  </div>
                  <div style={{ marginTop: "auto" }}>
                    <Typography variant="subtitle2" color="white" fontFamily="Raleway">
                      - {testimonial.name}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <IconButton
          onClick={goToNext}
          disabled={startIndex === testimonials.length - 2}
          style={{ color: "white" }}
        >
          <NavigateNext />
        </IconButton>
      </div>
    </div>
  );
};

export default TestimonialSlider;
