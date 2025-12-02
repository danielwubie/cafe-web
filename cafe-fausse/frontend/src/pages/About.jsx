import React from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const About = () => {
  const isMobile = useMediaQuery('(max-width:1100px)');
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column":"row",
        paddingX: isMobile ? "3%":"20%",
        paddingY: "10vh",
      }}
    >
      <Box
        sx={{
          paddingX: "30px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontFamily: "playfair display",
            // textAlign: "center",
            color: "#722F37",
            fontWeight: 700,
          }}
        >
          About Café Nova
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "inter",
            // textAlign: "center",
            color: "#4B5563",
          }}
        >
          Founded in 2018, Café Fausse represents the pinnacle of fine dining in
          Washington, DC. Our commitment to culinary excellence and impeccable
          service has earned us recognition as one of the city's premier dining
          destinations.
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "inter",
            // textAlign: "center",
            color: "#4B5563",
          }}
        >
          Under the direction of Executive Chef Antoine Laurent, our kitchen
          creates innovative dishes that honor classic French techniques while
          embracing modern culinary artistry. Every ingredient is carefully
          sourced from local farms and premium suppliers worldwide.
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "inter",
            // textAlign: "center",
            color: "#4B5563",
          }}
        >
          We invite you to experience the perfect harmony of exceptional
          cuisine, elegant ambiance, and personalized service that defines the
          Café Fausse experience.
        </Typography>
      </Box>
      <Box
        component="img"
        src="/assets/home-cafe-fausse.webp"
        alt="image"
        sx={{
          width: isMobile ? "90%" : "calc(33.333% - 16px)", // 3 per row (adjust as needed)
          alignSelf: isMobile ? "center" : "auto",
          marginTop: isMobile ? "40px" : 0,
          //   aspectRatio: "1 / 1",
          flex: 1,
          //   overflow: "hidden",
          objectFit: "cover", // 👈 ensures no stretching, just crop
          borderRadius: 2,
          cursor: "pointer",
          //   transition: "transform 0.2s ease",
          //   "&:hover": {
          //     transform: "scale(1.02)",
          //   },
        }}
      />
    </Box>
  );
};

export default About;
