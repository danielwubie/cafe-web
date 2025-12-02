import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import useMediaQuery from '@mui/material/useMediaQuery';

const Awards = () => {
  const isMobile = useMediaQuery("(max-width:800px)");
return (      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          // marginX: isMobile ? "3%" : "20%",

          marginTop: "40px",
          paddingY: "80px",
        }}
      >
        <Typography
          noWrap
          sx={{
            mr: 4,
            textDecoration: "none",
            color: "text.primary",
            fontWeight: 700,
            fontSize: "30px",
            fontFamily: "playfair display",
            color: "#722F37",
            cursor: "pointer",
            height: "100%",
            textAlign: "center",
            margin: 0,
            padding: 0,
          }}
        >
          Awards & Reviews
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "48px",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <EmojiEventsIcon
              sx={{ color: "#D4AF37", alignSelf: "center" }}
              fontSize="large"
            ></EmojiEventsIcon>
            <Typography
              sx={{
                fontFamily: "playfair display",
                fontSize: "20px",
                fontWeight: 700,
                alignSelf: "center",
              }}
            >
              Restaurant of the Year
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#4B5563",
                alignSelf: "center",
              }}
            >
              Washington Fine Dining Awards 2023
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <StarIcon
              sx={{ color: "#D4AF37", alignSelf: "center" }}
              fontSize="large"
            ></StarIcon>
            <Typography
              sx={{
                fontFamily: "playfair display",
                fontSize: "20px",
                fontWeight: 700,
                alignSelf: "center",
              }}
            >
              Michelin Star
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#4B5563",
                alignSelf: "center",
              }}
            >
              Recognized for exceptional cuisine
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginX: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              fontFamily: "Inter",
              color: "#374151",
            }}
          >
            "An extraordinary culinary experience that exceeded all
            expectations. The attention to detail and flavors are simply
            remarkable." - <span>Sarah M.</span>
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              fontFamily: "Inter",
              color: "#374151",
            }}
          >
            "Café Fausse sets the standard for fine dining in DC. Every dish is
            a work of art." - <span>James R.</span>
          </Typography>
        </Box>
      </Box>);
};
export default Awards;