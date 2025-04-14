// import React from "react";
// import {
//   AppBar,
//   Box,
//   IconButton,
//   Typography,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// function TopBar({ scrolling }) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   if (scrolling) return null;

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "transparent",
//         boxShadow: "none",
//         transition: "all 0.3s ease-in-out",
//         minHeight: { xs: 30, sm: 36 },
//         py: 0.5,
//       }}
//     >
//       <Box sx={{ px: { xs: 1, sm: 2, md: 6 } }}>
//         <Toolbar
//           disableGutters
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             minHeight: "unset",
//             py: { xs: 0.4, sm: 0.6 },
//           }}
//         >
//           {/* Logo */}
//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: { xs: "1.2rem", sm: "1.5rem" },
//               fontWeight: 700,
//               color: "#1976d2",
//               letterSpacing: "1px",
//               fontFamily: "'Segoe UI', sans-serif",
//             }}
//           >
//             BPS
//           </Typography>

//           {/* Contact Info */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <IconButton
//               sx={{
//                 color: "#1976d2",
//                 p: 0.6,
//                 bgcolor: "#e3f2fd",
//                 "&:hover": { bgcolor: "#bbdefb" },
//               }}
//             >
//               <LocalPhoneIcon fontSize="small" />
//             </IconButton>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "row", sm: "column" },
//                 alignItems: { xs: "center", sm: "flex-start" },
//                 gap: { xs: 0.5, sm: 0 },
//                 lineHeight: 1.2,
//               }}
//             >
//               <Typography
//                 variant="caption"
//                 sx={{
//                   display: { xs: "none", sm: "block" },
//                   fontWeight: 500,
//                   fontSize: "0.7rem",
//                   color: "#333",
//                 }}
//               >
//                 CALL US NOW
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   fontWeight: 700,
//                   fontSize: "0.8rem",
//                   color: "#1976d2",
//                 }}
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

  if (scrolling) return null;

  return (
    <AppBar
      position="static"
      sx={{
        // backgroundColor: "transparent",
        // boxShadow: "none",
        // transition: "all 0.3s ease-in-out",
        // minHeight: { xs: 40, sm: 36 },
        // py: 0,

        background: "linear-gradient(40deg, #1976d2, #42a5f5)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
        // minHeight: { xs: 48, sm: 56 }, // Slightly taller for better presence
        py: 0.5,
      }}
    >
      <Box sx={{ px: { xs: 2, sm: 3 , md: 4 } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 36, sm: 36 },
            py: 0,
            px: 0,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem" },
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "1px",
              lineHeight: 1,
            }}
          >
            BPS
          </Typography>

          {/* Contact Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                color: "#fff",
                p: 0.3,
                height: 24,
                width: 24,
                minHeight: "unset",
              }}
            >
              <LocalPhoneIcon sx={{ fontSize: "16px" }} />
            </IconButton>

            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#fff",
              }}
            >
              +91-6386963004
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>



  );
}

export default TopBar;

