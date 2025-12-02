import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for footer styles
import { Box, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Box
      sx={{
        paddingX: isMobile ? "3%" : "10%",
        paddingY: "48px",
        backgroundColor: "#2C2C2C",
        color: "#D1D5DB",
        fontFamily: "Inter",
      }}
    >
      {isMobile ? (
        <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              gap:2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  marginBottom: "16px",
                  color: "#D4AF37",
                  fontFamily: "playfair display",
                  fontSize: "24px",
                }}
              >
                Café Nova
              </Typography>
              <Typography>
                An exquisite fine dining experience in the heart of Washington,
                DC.
              </Typography>
              <Box>icons</Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  marginBottom: "16px",
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Quick Links
              </Typography>
              <Typography
                sx={{
                  marginBottom: "8px",
                  "&:hover": {
                    color: "#fefefe", // darker shade on hover
                  },
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  marginBottom: "8px",
                  "&:hover": {
                    color: "#fefefe", // darker shade on hover
                  },
                }}
                onClick={() => navigate("/reservations")}
              >
                Reservation
              </Typography>
              <Typography
                sx={{
                  marginBottom: "8px",
                  "&:hover": {
                    color: "#fefefe", // darker shade on hover
                  },
                }}
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </Typography>
              <Typography
                sx={{
                  marginBottom: "8px",
                  "&:hover": {
                    color: "#fefefe", // darker shade on hover
                  },
                }}
                onClick={() => navigate("/about")}
              >
                About Us
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                marginBottom: "16px",
                color: "white",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Contact Info
            </Typography>
            <Typography sx={{ marginBottom: "8px" , textAlign: "center"}}>
              1234 Culinary Ave Washington, DC
            </Typography>
            <Typography sx={{ marginBottom: "8px" , textAlign: "center"}}>(202) 555-4567</Typography>
            <Typography sx={{ marginBottom: "8px" , textAlign: "center"}}>
              Mon-Sat: 5:00 PM - 11:00 PM Sun: 5:00 PM - 9:00 PM
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap:2,
          }}
        >
          <Box sx={{display: "flex", flexDirection: "column", gap:2}}>
            <Typography
              sx={{
                color: "#D4AF37",
                fontFamily: "playfair display",
                fontSize: "24px",
              }}
            >
              Café Fausse
            </Typography>
            <Typography>
              An exquisite fine dining experience in the heart of Washington,
              DC.
            </Typography>
            <Box>
              <FacebookIcon sx={{marginRight:"8px", cursor:"pointer"}}></FacebookIcon>
              <TwitterIcon sx={{marginRight:"8px", cursor:"pointer"}}></TwitterIcon>
              <InstagramIcon sx={{cursor:"pointer"}}></InstagramIcon>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                marginBottom: "16px",
                color: "white",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Quick Links
            </Typography>
            <Typography
              sx={{
                marginBottom: "8px",
                "&:hover": {
                  color: "#fefefe", // darker shade on hover
                },
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>
            <Typography
              sx={{
                marginBottom: "8px",
                "&:hover": {
                  color: "#fefefe", // darker shade on hover
                },
              }}
              onClick={() => navigate("/reservations")}
            >
              Reservation
            </Typography>
            <Typography
              sx={{
                marginBottom: "8px",
                "&:hover": {
                  color: "#fefefe", // darker shade on hover
                },
              }}
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </Typography>
            <Typography
              sx={{
                marginBottom: "8px",
                "&:hover": {
                  color: "#fefefe", // darker shade on hover
                },
              }}
              onClick={() => navigate("/about")}
            >
              About Us
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginBottom: "16px",
                color: "white",
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Contact Info
            </Typography>
            <Typography sx={{ marginBottom: "8px" }}>
              1234 Culinary Ave Washington, DC
            </Typography>
            <Typography sx={{ marginBottom: "8px" }}>(202) 555-4567</Typography>
            <Typography sx={{ marginBottom: "8px" }}>
              Mon-Sat: 5:00 PM - 11:00 PM Sun: 5:00 PM - 9:00 PM
            </Typography>
          </Box>
        </Box>
      )}
      <Divider sx={{ backgroundColor: "#374151", marginY: "32px" }} />
      <Typography sx={{ textAlign: "center" }}>
        © 2024 Café Fausse. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
