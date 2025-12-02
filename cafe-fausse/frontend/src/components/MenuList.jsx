import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const MenuList = ({ category, items }) => {
  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <Box sx={{ minWidth: "200px", width:isMobile ? "80%":"45%",  }}>
      <Typography
        sx={{
          fontSize: "36px",
          fontFamily: "Inter",
          textAlign: "center",
          color: "#722F37",
          fontWeight: 500,
          marginBottom: "32px",
          marginTop: "64px",
        }}
      >
        {category}
      </Typography>
      <Box sx={{}}>
        {items.map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "white",
              padding: "10px",
              marginY: "10px",
              borderRadius: "8px",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              boxShadow: '1px 1px 3px rgba(59, 59, 59, 0.1)',
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "black",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#4B5563",
                  textWrap: "wrap",
                  maxWidth: "90%",
                }}
              >
                {item.ingredients}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 700,
                color: "#D4AF37",
              }}
            >
              ${Number(item.price).toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MenuList;
