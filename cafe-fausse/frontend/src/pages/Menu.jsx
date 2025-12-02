import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import { fetchMenu } from "../api/api";
import { Box, CircularProgress, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Menu = () => {
  const [menuItems, setMenuItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  useEffect(() => {
    const getMenu = async () => {
      try {
        const data = await fetchMenu();
        setMenuItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMenu();
  }, []);

  if (loading) {
    return <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20%", height:"90vh", width:"100%" }}><CircularProgress /></Box>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{
        paddingX:isMobile ? "3%":"20%",
        paddingY:"10vh"
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
        Our Menu
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "inter",
          textAlign: "center",
          color: "#4B5563",
        }}
      >
        Carefully crafted dishes using the finest ingredients, prepared by our
        award-winning chefs
      </Typography>
      <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"20px", justifyContent:"space-around"}}>
        {Object.keys(menuItems).reverse().map((category) => {
            return <MenuList key={category} category={category} items={menuItems[category]} />;
        })}
      </Box>
    </Box>
  );
};

export default Menu;
