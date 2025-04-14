

// import React from "react";
// import { Box, Button, TextField, Typography, keyframes } from "@mui/material";
// import img1 from "../../assets/image1/warehouse.jpg";

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const gradientBackground = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// function LandingPage() {
//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: `
//           linear-gradient(135deg, 
//             rgba(118, 136, 202, 0.41) 0%, 
//             rgba(152, 155, 158, 0.85) 100%),
//           url(${img1})
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundBlendMode: "multiply",
//         animation: `${gradientBackground} 20s ease infinite`,
//         color: "white",
//         overflow: "hidden",
//          pt: { xs: "5" },
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           textAlign: "center",
//           maxWidth: "1200px",
//           padding: { xs: 3, sm: 4 },
//           animation: `${fadeIn} 1s ease-out`,
//         }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             fontWeight: 900,
//             lineHeight: 1.1,
//             fontSize: {
//               xs: "1.5rem",
//               sm: "2.5rem",
//               md: "4rem",
//             },
//             textShadow: "4px 4px 8px rgba(48, 41, 41, 0.6)",
//             mb: { xs: 2, sm: 3 },
//             background: "linear-gradient(45deg,rgb(232, 236, 20) 30%,rgb(236, 214, 214) 90%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           <Typography component="span" sx={{ fontWeight: 900, color: "blueviolet" }}>
//             BHARAT Parcel
//           </Typography>
//           <br />
//           Services Pvt Ltd.
//         </Typography>

//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 500,
//             fontSize: {
//               xs: "0.875rem",
//               sm: "1.25rem",
//               md: "1.5rem",
//             },
//             mb: { xs: 2, sm: 4 },
//             letterSpacing: "0.05em",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
//             maxWidth: "800px",
//             mx: "auto",
//           }}
//         >
//           Your parcel's whereabouts at your fingertips, delivering peace of mind
//           with every shipment
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             gap: 2,
//             justifyContent: "center",
//             alignItems: "center",
//             maxWidth: "700px",
//             mx: "auto",
//           }}
//         >
//           <TextField
//             variant="outlined"
//             placeholder="Enter tracking ID"
//             InputProps={{
//               sx: {
//                 backgroundColor: "rgba(213, 205, 205, 0.15)",
//                 borderRadius: "50px",
//                 color: "white",
//                 "& .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "rgba(255,255,255,0.3)",
//                 },
//                 "&:hover .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "rgba(255,255,255,0.5)",
//                 },
//                 "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                   borderColor: "#ffd700",
//                   borderWidth: "2px",
//                 },
//                 padding: "8px 24px",
//                 fontSize: { xs: "0.9rem", sm: "1.1rem" },
//                 transition: "all 0.3s ease",
//               },
//             }}
//             sx={{
//               width: { xs: "100%", sm: "400px" },
//               backdropFilter: "blur(5px)",
//               "& input": {
//                 padding: "10px 20px",
//               },
//             }}
//           />

//           <Button
//             variant="contained"
//             sx={{
//               py: { xs: 1.2, sm: 1.5 },
//               px: { xs: 3, sm: 4 },
//               borderRadius: "50px",
//               fontSize: { xs: "0.9rem", sm: "1.1rem" },
//               fontWeight: 700,
//               background: "linear-gradient(45deg, #ffd700 30%, #ffea00 90%)",
//               color: "#1a237e",
//               textTransform: "uppercase",
//               letterSpacing: "1px",
//               boxShadow: "0 4px 15px rgba(255,215,0,0.4)",
//               "&:hover": {
//                 transform: "translateY(-2px)",
//                 boxShadow: "0 6px 20px rgba(255,215,0,0.6)",
//                 background: "linear-gradient(45deg, #ffd700 10%, #ffea00 90%)",
//               },
//               transition: "all 0.3s ease",
//             }}
//           >
//             Track Package
//           </Button>
//         </Box>

//         <Typography
//           variant="body2"
//           sx={{
//             mt: 3,
//             opacity: 0.2,
//             fontStyle: "italic",
//             fontSize: { xs: "0.75rem", sm: "0.9rem" },
//             "&:hover": {
//               opacity: 1,
//             },
//             transition: "opacity 0.3s ease",
//           }}
//         >
//           Trusted by over 50,000+ businesses nationwide
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default LandingPage;  


import React from "react";
import { Box, Button, TextField, Typography, keyframes } from "@mui/material";
import img1 from "../../assets/image1/warehouse.jpg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

function LandingPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `
          linear-gradient(135deg, rgba(118,136,202,0.41) 0%, rgba(152,155,158,0.85) 100%),
          url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        animation: `${gradientBackground} 20s ease infinite`,
        overflow: "hidden",
        color: "white",
        "@media (orientation: landscape) and (max-height: 500px)": {
          paddingY: 6,
        },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "1200px",
          padding: { xs: 3, sm: 4 },
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        {/* Header */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            lineHeight: 1.1,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4rem" },
            textShadow: "4px 4px 8px rgba(0,0,0,0.6)",
            mb: 3,
            background: "linear-gradient(45deg, #e8ec14 30%, #ecd6d6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Typography
            component="span"
            sx={{ color: "blueviolet", fontWeight: 900 }}
          >
            BHARAT Parcel
          </Typography>
          <br />
          Services Pvt Ltd.
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            letterSpacing: "0.03em",
          }}
        >
          Your parcel's whereabouts at your fingertips, delivering peace of mind
          with every shipment
        </Typography>

        {/* Input Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter Tracking ID"
            aria-label="Enter your tracking ID"
            InputProps={{
              sx: {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "50px",
                color: "white",
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
              width: { xs: "100%", sm: "400px" },
              backdropFilter: "blur(6px)",
              "& input": {
                padding: "12px 20px",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              py: 1.4,
              px: 4,
              borderRadius: "50px",
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              fontWeight: 700,
              background: "linear-gradient(45deg, #ffd700 30%, #ffea00 90%)",
              color: "#1a237e",
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 4px 15px rgba(255,215,0,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(255,215,0,0.6)",
              },
            }}
          >
            Track Package
          </Button>
        </Box>

        {/* Footer Text */}
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            fontStyle: "italic",
            opacity: 0.3,
            fontSize: "0.85rem",
            "&:hover": {
              opacity: 1,
            },
            transition: "opacity 0.3s ease",
          }}
        >
          Trusted by over 50,000+ businesses nationwide
        </Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;

