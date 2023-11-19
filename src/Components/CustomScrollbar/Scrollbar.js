import React from "react";

const CustomScrollbar = ({ children }) => {
  const containerStyles = {
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  };

  const scrollbarStyles = {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    scrollbarWidth: "thin",
    WebkitOverflowScrolling: "touch",
    // Additional properties for the scrollbar
    scrollbarColor: "blue lightblue", // Thumb color and track color
    scrollbarTrackColor: "lightblue", // Track color
  };

  const scrollbarThumbStyles = {
    backgroundColor: "blue", // Color for the scrollbar thumb
    width: "12px", // Width of the scrollbar thumb
    borderRadius: "20px", // Border radius of the scrollbar thumb
  };

  const scrollbarTrackStyles = {
    backgroundColor: "lightblue", // Color for the scrollbar track
    width: "12px", // Width of the scrollbar track
  };

  const scrollbarCSS = `
    ::-webkit-scrollbar {
      width: 12px; // Width of the scrollbar
    }
    ::-webkit-scrollbar-thumb {
      ${scrollbarThumbStyles} // Applying the styles for the scrollbar thumb
    }
    ::-webkit-scrollbar-track {
      ${scrollbarTrackStyles} // Applying the styles for the scrollbar track
    }
  `;

  return (
    <div style={containerStyles}>
      <style>{scrollbarCSS}</style>
      <div style={scrollbarStyles}>{children}</div>
    </div>
  );
};

export default CustomScrollbar;
