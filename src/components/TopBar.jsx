// import React from "react";
// import {
//   AppBar,
//   Box,
//   IconButton,
//   Typography,
//   Toolbar,
//   Container,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// function TopBar({ scrolling }) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   if (scrolling) return null; // Hide when scrolling

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "white",

//         transition: "all 0.1s ease-in-out",
//       }}
//     >
//       <Box
//         sx={{
//           px: {
//             xs: 2,
//             sm: 4,
//             md: 10,
//           },
//         }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexDirection: isMobile ? "row" : "row",
//             textAlign: "Start",
//             py: isMobile ? 1 : 0,
//           }}
//         >
//           {/* Logo */}
//           <Box sx={{ textAlign: "center" }}>
//             <Typography
//               variant="h1"
//               sx={{
//                 height: "40px",
//                 color: "blue",
//                 fontWeight: "bold",
//                 fontSize: isMobile ? "1.8rem" : "2.2rem",
//                 letterSpacing: "2px",
//               }}
//             >
//               BPS
//             </Typography>
//           </Box>

//           {/* Phone Contact */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <IconButton sx={{ color: "blue" }}>
//               <LocalPhoneIcon />
//             </IconButton>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//               }}
//             >
//               <Typography
//                 variant="body2"
//                 sx={{ color: "black", fontWeight: "bold" }}
//               >
//                 CALL US NOW
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{ color: "blue", fontWeight: "bold" }}
//               >
//                 +91-6386963004
//               </Typography>
//             </Box>
//           </Box>
//         </Toolbar>
//       </Box>
//     </AppBar>
//   );
// }

// export default TopBar;


import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function TopBar({ scrolling }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (scrolling) return null; // Hide when scrolling

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        height: {
          xs: "48px",
          sm: "auto",
        },
        transition: "all 0.1s ease-in-out",
      }}
    >
      <Box
        sx={{
          px: {
            xs: 2,
            sm: 4,
            md: 10,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            textAlign: "start",
            py: isMobile ? 1 : 0,
          }}
        >
          {/* Logo */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                color: "blue",
                fontWeight: 800,
                fontSize: isMobile ? "1.2rem" : "2rem",
                letterSpacing: "2px",
              }}
            >
              BPS
            </Typography>
          </Box>

          {/* Phone Contact */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton sx={{ color: "blue" }}>
              <LocalPhoneIcon
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                  },
                }}
              />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "0.8rem",
                  },
                }}
              >
                CALL US NOW
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "blue",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "0.8rem",
                  },
                }}
              >
                +91-6386963004
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default TopBar;


