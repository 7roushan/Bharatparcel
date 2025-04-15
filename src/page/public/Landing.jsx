

// import React from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Typography,
//   keyframes,
// } from "@mui/material";

// import img2 from "../../assets/image1/truck-1.png";
// import img1 from "../../assets/image1/globe.png";

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// function LandingPage() {
//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         minHeight: "80vh",
//         backgroundImage: `
//           linear-gradient(135deg, rgba(69, 87, 158, 0.41) 0%, rgba(21, 76, 131, 0.85) 100%),
//           url(${img1})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundColor: "#194493",
//         color: "white",
//         pl: { xs: 2, sm: 4, md: 10, lg: 16 },
//         pr: { xs: 2, sm: 2, md: 0, lg: 0 },
//         py: { xs:6, md: 8 },
//       }}
//     >
//       <Grid container spacing={5} alignItems="center">
//         {/* Left Content */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               animation: `${fadeIn} 2s ease-out`,
//               textAlign: { xs: "center", md: "left" },
              
//             }}
//           >
//             <Typography
//               variant="h1"
//               sx={{
//                 fontWeight: 900,
//                 fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
//                 textShadow: "4px 4px 8px rgba(0,0,0,0.6)",
//                   mb: 3,
//                  mt: { xs: 5 },
//                 background: "linear-gradient(45deg, #e8ec14 30%, #d0f916 90%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               <Typography
//                 component="span"
//                 sx={{  color: "blueviolet", fontWeight: 900 }}
//               >
//                 BHARAT Parcel
//               </Typography>
//               <br />
//               Services Pvt Ltd.
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 500,
//                 fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
//                 mb: 4,
//                 maxWidth: "600px",
//                 textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//                 letterSpacing: "0.03em",
//               }}
//             >
//               Your parcel's whereabouts at your fingertips, delivering peace of
//               mind with every shipment.
//             </Typography>

//             {/* Input + Button */}
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" },
//                 alignItems: "center",
//                 gap: 2,
//                 flexWrap: "wrap",
//               }}
//             >
//               <TextField
//                 variant="outlined"
//                 placeholder="Enter Tracking ID"
//                 InputProps={{
//                   sx: {
//                     backgroundColor: "rgba(213, 206, 206, 0.47)",
//                     borderRadius: "50px",
//                     color: "white",
//                     "& .MuiOutlinedInput-notchedOutline": {
//                       borderColor: "rgba(255,255,255,0.3)",
//                     },
//                     "&:hover .MuiOutlinedInput-notchedOutline": {
//                       borderColor: "rgba(255,255,255,0.5)",
//                     },
//                     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                       borderColor: "#ffd700",
//                       borderWidth: "2px",
//                     },
//                   },
//                 }}
//                 sx={{
//                   width: { xs: "100%", sm: "60%" },
//                   backdropFilter: "blur(6px)",
//                   "& input": {
//                     padding: "12px 20px",
//                     fontSize: "1rem",
//                     color:"#000",
//                   },
//                 }}
//               />

//               <Button
//                 variant="contained"
//                 sx={{
//                   py: 1.4,
//                   px: 2,
//                   borderRadius: "50px",
//                   fontSize: "0.9rem",
//                   fontWeight: 700,
//                   background:
//                     "linear-gradient(45deg, #ffd700 30%, #ffea00 90%)",
//                   color: "#1a237e",
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                   boxShadow: "0 4px 15px rgba(255,215,0,0.4)",
//                   "&:hover": {
//                     transform: "translateY(-2px)",
//                     boxShadow: "0 6px 20px rgba(255,215,0,0.6)",
//                   },
//                 }}
//               >
//                 Track Package
//               </Button>
//             </Box>

//             <Typography
//               variant="body2"
//               sx={{
//                 mt: 3,
//                 fontStyle: "italic",
//                 opacity: 0.3,
//                 fontSize: "0.85rem",
//                 "&:hover": { opacity: 1 },
//                 transition: "opacity 0.3s ease",
//               }}
//             >
//               Trusted by over 50,000+ businesses nationwide
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Image */}
//         <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
//           <Box
//             sx={{
//               width: "100%",
//               height: { md: "500px", lg: "600px" },
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               component="img"
//               src={img2}
//               alt="Truck"
//               sx={{
//                 maxWidth: "100%",
//                 maxHeight: "100%",
//                 objectFit: "contain",
//               }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default LandingPage; 
import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  keyframes,
} from "@mui/material";

import img2 from "../../assets/image1/truck-1.png";
import img1 from "../../assets/image1/globe.png";

// Entrance animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function LandingPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        // minHeight: "100vh",
        backgroundImage: `
          linear-gradient(135deg, rgba(69, 87, 158, 0.41) 0%, rgba(21, 76, 131, 0.85) 100%),
          url(${img1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#194493",
        color: "white",
         pr: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0},
        pl: { xs: 2, sm: 4, md: 8, lg: 16, xl: 20 },
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              animation: `${fadeIn} 1.2s ease-out`,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem",
                  lg: "4rem",
                  xl: "4.5rem",
                },
                mb: 3,
                mt: { xs: 2, sm: 4 },
                textShadow: "4px 4px 8px rgba(0,0,0,0.6)",
                background: "linear-gradient(45deg, #e8ec14 30%, #d0f916 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Box component="span" sx={{ color: "blueviolet", fontWeight: 900 }}>
                BHARAT Parcel
              </Box>
              <br />
              Services Pvt Ltd.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.6rem" },
                mb: 4,
                maxWidth: { xs: "100%", sm: "90%", md: "600px" },
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Your parcel's whereabouts at your fingertips, delivering peace of mind with every shipment.
            </Typography>

            {/* Search Bar & Button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Tracking ID"
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.3)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.5)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ffd700",
                      borderWidth: "2px",
                    },
                  },
                }}
                sx={{
                  width: { xs: "100%", sm: "60%", md: "60%" },
                  backdropFilter: "blur(6px)",
                  "& input": {
                    padding: "12px 20px",
                    fontSize: "1rem",
                    color: "#000",
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  py: 1.4,
                  px: 4,
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #ffd700 30%, #ffea00 90%)",
                  color: "#1a237e",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  boxShadow: "0 4px 15px rgba(255,215,0,0.4)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(255,215,0,0.6)",
                  },
                }}
              >
                Track Package
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                mt: 3,
                fontStyle: "italic",
                opacity: 0.4,
                fontSize: "0.85rem",
                textAlign: { xs: "center", md: "left" },
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            >
              Trusted by over 50,000+ businesses nationwide
            </Typography>
          </Box>
        </Grid>

        {/* Right Side Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "200px",
                sm: "300px",
                md: "400px",
                lg: "550px",
                xl: "650px",
              },
              display: { xs: "none", sm: "flex" }, 
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src={img2}
              alt="Truck"
              sx={{
                width: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage;
