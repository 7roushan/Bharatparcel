

 
import React from "react";
import { Myservices1 } from "../../data/Myservices";
import { useNavigate } from "react-router-dom";
import {
  CardContent,
  Grid,
  Typography,
  Card as MuiCard,
  Container,
  Box,
} from "@mui/material";

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 8, md: 10 , lg:18 }, py:{ xs: 1.2, sm: 3, md: 3 }}}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "700",
          letterSpacing: "-0.5px",
          mb: 4,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          textTransform: "uppercase",
          background: "linear-gradient(45deg, #2d3436, #007bff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        The BPS delivery service
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {Myservices1.map((service, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <MuiCard
              sx={{
                boxShadow: 2,
                cursor: "pointer",
                height: "100%",
                borderRadius: 2,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.03)" },
              }}
              onClick={() => handleCardClick(service.id)}
            >
              <img
                src={service.imgpath}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#002b5b", mb: 1 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
                {/* <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "#002b5b",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  read more &gt;
                </Typography> */}
              </CardContent>
            </MuiCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Card;
