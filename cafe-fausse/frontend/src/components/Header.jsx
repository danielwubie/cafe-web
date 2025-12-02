import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:800px)");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Reservations", path: "/reservations" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "playfair display",
          color: "#722F37",
          p: 2,
          fontWeight: 700,
        }}
      >
        Café Nova
      </Typography>
      <Divider />
      <List>
        {navItems.map((it) => (
          <ListItem key={it.path} disablePadding>
            <ListItemButton onClick={() => navigate(it.path)}>
              <ListItemText primary={it.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
        padding:0,
        height:"64px",
        margin:"auto",
        maxWidth:"100%",
      }}
    >
      <Box sx={{display:"flex", justifyContent:"center", marginX:isMobile?"3%":"5%", width:"auto"}}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", width: "100%" }}>
          {/* Logo */}
          <Typography
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "30px",
              fontFamily: "playfair display",
              color: "#722F37",
            }}
          >
            Café Nova
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1, justifySelf:"end" }}>
              {navItems.map((it) => (
                <Button
                  key={it.path}
                  onClick={() => navigate(it.path)}
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Inter",
                    }}
                  >
                    {it.label}
                  </Typography>
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {DrawerList}
              </Drawer>
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
