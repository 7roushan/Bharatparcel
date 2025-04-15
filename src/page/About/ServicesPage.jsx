import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import PublicIcon from "@mui/icons-material/Public";

const services = [
  {
    icon: <PersonIcon sx={{ color: "#1976D2", fontSize: 30 }} />,
    title: "Warehousing Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
  },
  {
    icon: <LocalShippingIcon sx={{ color: "#1976D2", fontSize: 30 }} />,
    title: "Surface Transport by Road",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
  },
  {
    icon: <AirplanemodeActiveIcon sx={{ color: "#1976D2", fontSize: 30 }} />,
    title: "Air Freight Movements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
  },
  {
    icon: <PublicIcon sx={{ color: "#1976D2", fontSize: 30 }} />,
    title: "Global Shipping Destinations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus.",
  },
];

function ServicesPage() {
  return (
    <Box
      sx={{
        pt: { xs: 2, md: 6 },
        pb: { xs: 4, md: 6 },
        px: { xs: 4, md: 17 },
      }}
    >
      <Grid container spacing={3}>
        {/* Left Section: Heading, Description, and Button */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#333",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Defining Moments
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              mb: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            You are known by the company you keep. Take a look at our satisfied
            corporate customers. We’re honoured.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1976D2",
              color: "white",
              px: 4,
              py: 1,
              fontWeight: 600,
              "&:hover": { bgcolor: "#1565C0" },
            }}
          >
            READ MORE
          </Button>
        </Grid>

        {/* Right Section: Service Cards */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "#F9FAFB",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#E3F2FD",
                      transform: "translateY(-5px)",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box sx={{ mr: 2 }}>{service.icon}</Box>
                  {/* Text Content */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#333",
                        mb: 1,
                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        lineHeight: 1.6,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServicesPage;
