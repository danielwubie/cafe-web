import React from "react";
import "../styles/main.css";
import { Box, Button, Typography, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageGalleryBox from "../components/Gallery.jsx";
import Awards from "../components/Awards.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';

const Gallery = () => {
    const images = [
    "/assets/gallery-cafe-interior.webp",
    "/assets/gallery-ribeye-steak.webp",
    "/assets/gallery-special-event.webp",
    "/assets/home-cafe-fausse.webp",
  ];
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Box sx={{
        paddingX: isMobile ? "3%":"20%",
        paddingY:"10vh",
        display:"flex",
        flexDirection:"column",
        gap:4,
        
    }}>
      <Typography
        sx={{
          fontSize: "48px",
          fontFamily: "playfair display",
          textAlign: "center",
          color: "#722F37",
          fontWeight: 700,
        }}
      >
        Gallery
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "inter",
          textAlign: "center",
          color: "#4B5563",
        }}
      >
        A glimpse into our culinary artistry and elegant atmosphere
      </Typography>
      <ImageGalleryBox imagePaths={images} />
      <Awards/>
    </Box>
  );
};

export default Gallery;
