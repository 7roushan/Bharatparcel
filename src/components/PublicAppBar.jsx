import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { Menu as MenuIcon, ColorLens } from "@mui/icons-material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import TopBar from "./TopBar";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/order", label: "Order" },
];

// Define multiple themes
const themes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" }, // Blue
      secondary: { main: "#f44336" }, // Red
      background: { default: "#ffffff" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#00bcd4" }, // Cyan
      secondary: { main: "#ff9800" }, // Orange
      background: { default: "#121212" },
    },
  }),
  funky: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#9c27b0" }, // Purple
      secondary: { main: "#4caf50" }, // Green
      background: { default: "#f3e5f5" },
    },
  }),
  ocean: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0288d1" }, // Light Blue
      secondary: { main: "#26c6da" }, // Teal
      background: { default: "#e1f5fe" },
    },
  }),
  sunset: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#ff7043" }, // Deep Orange
      secondary: { main: "#ffca28" }, // Amber
      background: { default: "#fff3e0" },
    },
  }),
  forest: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#2e7d32" }, // Dark Green
      secondary: { main: "#8bc34a" }, // Light Green
      background: { default: "#e8f5e9" },
    },
  }),
  midnight: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#673ab7" }, // Deep Purple
      secondary: { main: "#03a9f4" }, // Light Blue
      background: { default: "#1a1a2e" },
    },
  }),
  rose: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#e91e63" }, // Pink
      secondary: { main: "#ffeb3b" }, // Yellow
      background: { default: "#fce4ec" },
    },
  }),
  slate: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#607d8b" }, // Blue Grey
      secondary: { main: "#cfd8dc" }, // Light Grey
      background: { default: "#263238" },
    },
  }),
};

const PublicAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [themeName, setThemeName] = useState("light"); // "light", "dark", "funky"

  const location = useLocation();
  const navigate = useNavigate();
  const baseTheme = useTheme();
  const isMobile = useMediaQuery(baseTheme.breakpoints.down("md"));

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("themeName");
    if (saved && themes[saved]) setThemeName(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("themeName", themeName);
    document.body.style.backgroundColor =
      themes[themeName].palette.background.default;
  }, [themeName]);

  const cycleTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(themeName);
    const next = themeKeys[(currentIndex + 1) % themeKeys.length];
    setThemeName(next);
  };

  const activeTheme = themes[themeName];

  return (
    <ThemeProvider theme={activeTheme}>
      <AppBar
        position="fixed"
        sx={{
          background: activeTheme.palette.primary.main,
          boxShadow: "none",
          zIndex: 1200,
        }}
      >
        <TopBar scrolling={scrolling} />
        <Toolbar
          sx={{ justifyContent: "space-between", px: { sx: 4, md: 10 } }}
        >
          {scrolling && (
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "1.8rem" },
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "1px",
              }}
            >
              BPS
            </Typography>
          )}

          {/* Desktop Nav */}
          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.to;
                return (
                  <Typography
                    key={idx}
                    onClick={() => {
                      navigate(link.to);
                      window.scrollTo(0, 0);
                    }}
                    sx={{
                      color: isActive ? "#000000" : "#fff",
                      fontWeight: 600,
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": { color: "#000000" },
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: isActive ? "100%" : "0%",
                        height: "2px",
                        // backgroundColor: activeTheme.palette.secondary.main,
                        transition: "width 0.3s",
                      },
                      "&:hover:after": { width: "100%" },
                    }}
                  >
                    {link.label}
                  </Typography>
                );
              })}
            </Box>
          ) : (
            <Box>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "#fff" }}
              >
                <MenuIcon />
              </IconButton>

              <Tooltip title="Change Theme">
                <IconButton onClick={cycleTheme}>
                  <ColorLens sx={{ color: "#fff" }} />
                </IconButton>
              </Tooltip>
            </Box>
          )}

          {/* Theme Toggle */}
          {/* <Tooltip title="Change Theme">
                <IconButton onClick={cycleTheme}>
                  <ColorLens sx={{ color: "#fff" }} />
                </IconButton>
              </Tooltip> */}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          sx={{
            justifyContent: "center",
            width: 200,
            height: "100vh",
            backgroundColor: activeTheme.palette.primary.main,
          }}
        >
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <ListItem
                key={i}
                onClick={() => {
                  navigate(link.to);
                  window.scrollTo(0, 0);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText>
                  <Typography
                    sx={{
                      color: isActive ? "#000" : "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    {link.label}
                  </Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default PublicAppBar;
