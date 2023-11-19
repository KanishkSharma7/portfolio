import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Great experience! The service provided exceeded my expectations.",
    name: "John Doe",
  },
  {
    id: 2,
    quote: "Outstanding work! The team was highly professional and skilled.",
    name: "Jane Smith",
  },
  {
    id: 3,
    quote: "Exceptional service and quality. Would highly recommend!",
    name: "Alex Johnson",
  },
  {
    id: 4,
    quote: "Impressed by the dedication and attention to detail.",
    name: "Emily Brown",
  },
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
      >
        Testimonials
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
                  backgroundColor: "black",
                  border: "2px solid white",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="body1" color="white">
                    {testimonial.quote}
                  </Typography>
                  <Typography variant="subtitle2" color="white">
                    - {testimonial.name}
                  </Typography>
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
