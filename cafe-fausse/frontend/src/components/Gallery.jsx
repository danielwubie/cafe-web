import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function ImageGalleryBox({ imagePaths = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      {/* Image Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between", // even spacing
          gap: 2, // spacing between images
        }}
      >
        {imagePaths.map((path, index) => (
          <Box
            key={index}
            component="img"
            src={path}
            alt={`Image ${index}`}
            onClick={() => setSelectedImage(path)}
            sx={{
              width: isMobile ? "calc(50% - 16px)": "calc(33.333% - 16px)", // 3 per row (adjust as needed)
              aspectRatio: "1 / 1",
            //   overflow: "hidden",
              objectFit: "cover", // 👈 ensures no stretching, just crop
              borderRadius: 2,
              cursor: "pointer",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        ))}
      </Box>

      {/* Enlarge Modal */}
      <Modal
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Enlarged"
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: 2,
            boxShadow: 5,
          }}
        />
      </Modal>
    </>
  );
}
