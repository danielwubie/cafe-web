import React from "react";
import "../styles/main.css";
import { Box, Button, Typography, Icon, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MapIcon from "@mui/icons-material/Map";
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <div className="home">
      <Box
        sx={{
          backgroundImage: `url('/assets/home-cafe-fausse.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover", // make it scale properly
          height: "calc(100vh - 64px)", // or a specific height like 500px
          margin: 0,
          padding: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Inter",
          "&::after": {
            content: '""',
            position: "absolute",
            top: "64px",
            left: 0,
            width: "100%",
            height: "calc(100vh - 64px)",
            backgroundColor: "rgba(0, 0, 0, 0.59)", // adjust 0.5 for darkness
            zIndex: 1,
          },
          "& > *": {
            position: "relative",
            zIndex: 2,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: "bold",
            marginBottom: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          Café Nova
        </Typography>
        <Typography sx={{ fontSize: 20, color: "#e7e7e7ff" }}>
          An Exquisite Journey in Every Bite
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            color: "#c9c9c9ff",
            width: isMobile ? "80%" : "40%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Step into Café Fausse and indulge in an exceptional fine dining
          experience, where every dish tells a story and every detail reflects
          sophistication.
        </Typography>
        <Button
          sx={{
            backgroundColor: "#D4AF37",
            textTransform: "none",
            fontFamily: "Inter",
            fontSize: "14px",
            marginTop: "30px",
            color: "black",
            "&:hover": {
              backgroundColor: "#fffb00ff", // darker shade on hover
            },
          }}
          onClick={() => navigate("/reservations")}
        >
          Make a Reservation
        </Button>
      </Box>
      <Box
        sx={{
          paddingX: isMobile ? "3%" : "30%",
          marginY: "10vh",
          fontFamily: "Inter",
          // maxWidth:"50%",
        }}
      >
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#722F37",
            // width: isMobile ? "80%" : "40%",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Welcome
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            color: "#4B5563",
            // width: isMobile ? "80%" : "40%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          At Café Nova, we invite you to savor a dining experience defined by
          refinement and tradition. Our chefs craft each dish using the finest
          ingredients, blending innovation with classical techniques. Whether
          celebrating a special occasion or enjoying an intimate evening, every
          visit is designed to delight the senses and create unforgettable
          memories
        </Typography>

        {/* <Typography
          sx={{
            fontSize: 18,
            color: "#4B5563",
            // width: isMobile ? "80%" : "40%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Our passion for culinary excellence is evident in every plate. We
          believe in honoring classic methods while infusing them with a modern
          sensibility, resulting in a menu that is both familiar and exciting.
          We partner with local farms and trusted purveyors to source the
          freshest seasonal produce, sustainably raised meats, and artisanal
          products, ensuring every component on your plate is of the highest
          standard.
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            color: "#4B5563",
            // width: isMobile ? "80%" : "40%",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Step into our thoughtfully designed interior and discover an
          atmosphere where elegance meets comfort. The soft glow of our
          lighting, the gentle hum of conversation, and the exquisite aromas
          wafting from our kitchen create a warm, inviting space perfect for any
          occasion. At Café Fausse, we are dedicated to providing not just a
          meal, but an immersive culinary journey.
        </Typography> */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            // alignItems: "center",
            justifyContent: "center",
            marginTop: "80px",
            boxShadow: "1px 1px 3px #d6d6d6ff",
            borderRadius: "4px",
            paddingY: "40px",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "Inter",
                color: "#722F37",
                // width: isMobile ? "80%" : "40%",
                textAlign: "center",
                // display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
                // marginBottom: "20px",
              }}
            >
              <ScheduleIcon
                sx={{
                  verticalAlign: "middle",
                  marginRight: "8px",
                  width: "32px",
                  height: "32px",
                }}
              />
              Open Hours
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#4B5563",
                  // width: isMobile ? "80%" : "40%",
                  textAlign: isMobile ? "center" : "left",
                  marginTop: "20px",
                }}
              >
                Monday–Saturday: 5:00 PM – 11:00 PM
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#4B5563",
                  // width: isMobile ? "80%" : "40%",
                  textAlign: isMobile ? "center" : "left",
                  marginTop: "20px",
                }}
              >
                Sunday: 5:00 PM – 9:00 PM
              </Typography>
            </Box>
          </Box>
          <Divider orientation={isMobile? "horizontal":"vertical"} flexItem></Divider>

          <Box sx={{ flex: 1}}>
            <Typography
              sx={{
                fontSize: 26,
                fontWeight: 700,
                fontFamily: "Inter",
                color: "#722F37",
                // width: isMobile ? "80%" : "40%",
                textAlign: "center",
                // display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
                // marginBottom: "20px",
                // marginTop: "80px",
              }}
            >
              <LocationSearchingIcon
                sx={{
                  verticalAlign: "middle",
                  marginRight: "8px",
                  width: "32px",
                  height: "32px",
                }}
              />
              Contact Us
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#4B5563",
                  // width: isMobile ? "80%" : "40%",
                  textAlign: isMobile ? "center" : "left",
                  marginTop: "20px",
                }}
              >
                <LocalPhoneIcon sx={{ paddingX: "10px" }}></LocalPhoneIcon>
                (202) 555-4567
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#4B5563",
                  // width: isMobile ? "80%" : "40%",
                  textAlign: isMobile ? "center" : "left",
                  marginTop: "20px",
                }}
              >
                <MapIcon sx={{ paddingX: "10px" }}></MapIcon>
                1234 Culinary Ave, Suite 100, Washington, DC 20002
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box>
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 700,
              fontFamily: "Inter",
              color: "#722F37",
              // width: isMobile ? "80%" : "40%",
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "80px",
            }}
          >
            Contact Us
          </Typography>
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                color: "#4B5563",
                // width: isMobile ? "80%" : "40%",
                textAlign: isMobile ? "center" : "left",
                marginTop: "20px",
              }}
            > 
            <LocalPhoneIcon sx={{paddingX:"10px"}}></LocalPhoneIcon>
              (202) 555-4567
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                color: "#4B5563",
                // width: isMobile ? "80%" : "40%",
                textAlign: isMobile ? "center" : "left",
                marginTop: "20px",
              }}
            >
              <MapIcon sx={{paddingX:"10px"}} ></MapIcon>
              1234 Culinary Ave, Suite 100, Washington, DC 20002
            </Typography>
          </Box>
        </Box> */}
      </Box>
      {/* <Awards /> */}
    </div>
  );
};

export default Home;
