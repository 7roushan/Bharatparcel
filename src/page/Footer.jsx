// import React from "react";
// import { Box, Typography, List, ListItem, Link, TextField, Button, Divider } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box component="footer" sx={{ bgcolor: "#333", color: "#fff", py:2 }}>
//       <Box
//         sx={{
//           maxWidth: 1200,
//           mx: "auto",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-between",

//         }}
//       >
//         {/* CEO Statement Section */}
//         <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 3 }}>
//           <Typography variant="h1" sx={{ borderBottom: "2px solid #fff", pb: 1 }}>
//            BPS
//           </Typography>
//           <Typography variant="body2" sx={{ pr: 4, textAlign: "justify" }}>
//           Bharat Parcel Services – Your parcel's whereabouts at your fingertips, delivering peace of mind

//           </Typography>
//           <Box component="img"
//             src="https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/03/sign-light.png"
//             alt="CEO Signature"
//             sx={{ mt: 2, maxWidth: "100%" }}
//             loading="lazy"
//           />
//         </Box>

//         {/* Quick Links Section */}
//         <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 3 }}>
//           <Typography variant="h6" sx={{ borderBottom: "2px solid #fff", pb: 1 }}>
//             QUICK LINKS
//           </Typography>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <List sx={{ p: 0 }}>
//               {[  "About Us", "Service", "How to Track", "Testimonial"].map((text) => (

//                 <ListItem key={text} sx={{ p: 0 }}>
//                   <Link href="#" color="inherit" underline="none">
//                     {text}
//                   </Link>
//                 </ListItem>
//               ))}
//             </List>
//             <List sx={{ p: 0 }}>
//               {["Rail Shipping", "Logistic Solutions", "Cargo Shipping"].map((text) => (
//                 <ListItem key={text} sx={{ p: 0 }}>
//                   <Link href="#" color="inherit" underline="none">
//                     {text}
//                   </Link>
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Box>

//         {/* Newsletter Signup Section */}
//         <Box sx={{ width: { xs: "100%", md: "30%" }, mb: 3 }}>
//           <Typography variant="h6" sx={{ borderBottom: "2px solid #fff", pb: 1 }}>
//             NEWS LETTER SIGNUP
//           </Typography>
//           <Typography variant="body2">
//             If you want to receive our weekly updates about new offers and discounts, signup below.
//           </Typography>
//           <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
//             <TextField
//               type="email"
//               placeholder="Email Address"
//               variant="outlined"
//               size="small"
//               sx={{ bgcolor: "#fff", borderRadius: 1 }}
//               required
//             />
//             <Button variant="contained" sx={{ bgcolor: "#f04", color: "#fff", ":hover": { bgcolor: "#d03" } }}>
//               Submit
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       <Divider sx={{ bgcolor: "#fff", opacity: 0.2, my: 2 }} />

//       {/* Footer Bottom Section */}

//       <Box sx={{ textAlign: "center", px: 2, minHeight: "100px" }}>
//         <Typography variant="body2">
//           Copyright © 2023. All rights Reserved by{" "}
//           <Link href="https://themeforest.net/user/designthemes" color="inherit" underline="none">
//             DesignThemes
//           </Link>
//         </Typography>
//         <Box component="ul" sx={{ listStyle: "none", p: 0, display: "flex",  justifyContent: "center", gap: 2, mt: 1 }}>
//           {["Terms of Use", "Legal Disclaimer", "Privacy Policy", "Support", "Sitemap"].map((text) => (
//             <ListItem key={text} sx={{ display: "inline", p: 0 }}>
//               <Link href="#" color="inherit" underline="none">
//                 {text}
//               </Link>
//             </ListItem>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

// // import React from "react";
// // import {
// //   Box,
// //   Typography,
// //   Grid,
// //   List,
// //   ListItem,
// //   Link,
// //   TextField,
// //   Button,
// //   Divider,
// // } from "@mui/material";

// // const Footer = () => {
// //   return (
// //     <Box
// //       component="footer"
// //       sx={{
// //         bgcolor: "#1a1a1a",
// //         color: "#fff",
// //         pt: 6,
// //         px: { xs: 2, sm: 4, md: 6 },
// //       }}
// //     >
// //       <Grid
// //         container
// //         spacing={4}
// //         sx={{
// //           maxWidth: "1200px",
// //           mx: "auto",
// //           pb: 4,
// //         }}
// //       >
// //         {/* CEO Section */}
// //         <Grid item xs={12} sm={6} md={4}>
// //           <Typography
// //             variant="h5"
// //             sx={{
// //               fontWeight: 700,
// //               borderBottom: "2px solid #fff",
// //               pb: 1,
// //               fontSize: { xs: "1.3rem", sm: "1.5rem" },
// //             }}
// //           >
// //             BPS
// //           </Typography>
// //           <Typography
// //             variant="body2"
// //             sx={{
// //               mt: 2,
// //               textAlign: "justify",
// //               fontSize: { xs: "0.85rem", sm: "0.95rem" },
// //             }}
// //           >
// //             Bharat Parcel Services – Your parcel's whereabouts at your
// //             fingertips, delivering peace of mind.
// //           </Typography>
// //           <Box
// //             component="img"
// //             src="https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/03/sign-light.png"
// //             alt="CEO Signature"
// //             sx={{ mt: 3, maxWidth: { xs: 140, sm: 180 } }}
// //             loading="lazy"
// //           />
// //         </Grid>

// //         {/* Quick Links */}
// //         <Grid item xs={12} sm={6} md={4}>
// //           <Typography
// //             variant="h6"
// //             sx={{
// //               fontWeight: 600,
// //               borderBottom: "2px solid #fff",
// //               pb: 1,
// //               fontSize: { xs: "1rem", sm: "1.2rem" },
// //             }}
// //           >
// //             Quick Links
// //           </Typography>
// //           <Grid container spacing={1}>
// //             <Grid item xs={6}>
// //               <List sx={{ p: 0 }}>
// //                 {["About Us", "Service", "How to Track", "Testimonial"].map(
// //                   (text) => (
// //                     <ListItem key={text} sx={{ p: 0.5 }}>
// //                       <Link
// //                         href="#"
// //                         color="inherit"
// //                         underline="hover"
// //                         fontSize="0.9rem"
// //                       >
// //                         {text}
// //                       </Link>
// //                     </ListItem>
// //                   )
// //                 )}
// //               </List>
// //             </Grid>
// //             <Grid item xs={6}>
// //               <List sx={{ p: 0 }}>
// //                 {["Rail Shipping", "Logistic Solutions", "Cargo Shipping"].map(
// //                   (text) => (
// //                     <ListItem key={text} sx={{ p: 0.5 }}>
// //                       <Link
// //                         href="#"
// //                         color="inherit"
// //                         underline="hover"
// //                         fontSize="0.9rem"
// //                       >
// //                         {text}
// //                       </Link>
// //                     </ListItem>
// //                   )
// //                 )}
// //               </List>
// //             </Grid>
// //           </Grid>
// //         </Grid>

// //         {/* Newsletter */}
// //         <Grid item xs={12} sm={12} md={4}>
// //           <Typography
// //             variant="h6"
// //             sx={{
// //               fontWeight: 600,
// //               borderBottom: "2px solid #fff",
// //               pb: 1,
// //               fontSize: { xs: "1rem", sm: "1.2rem" },
// //             }}
// //           >
// //             Newsletter Signup
// //           </Typography>
// //           <Typography
// //             variant="body2"
// //             sx={{ mt: 2, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
// //           >
// //             Subscribe for weekly updates about new offers and discounts.
// //           </Typography>
// //           <Box
// //             component="form"
// //             sx={{
// //               mt: 2,
// //               display: "flex",
// //               flexDirection: { xs: "column", sm: "row", md: "column" },
// //               gap: 1.5,
// //             }}
// //           >
// //             <TextField
// //               type="email"
// //               placeholder="Enter your email"
// //               variant="outlined"
// //               size="small"
// //               required
// //               sx={{
// //                 bgcolor: "#fff",
// //                 borderRadius: 1,
// //                 input: { color: "#000", fontSize: "0.9rem" },
// //                 flex: 1,
// //               }}
// //             />
// //             <Button
// //               variant="contained"
// //               sx={{
// //                 bgcolor: "#f04",
// //                 ":hover": { bgcolor: "#d03" },
// //                 borderRadius: 2,
// //                 fontWeight: 600,
// //                 whiteSpace: "nowrap",
// //               }}
// //             >
// //               Subscribe
// //             </Button>
// //           </Box>
// //         </Grid>
// //       </Grid>

// //       <Divider sx={{ bgcolor: "#fff", opacity: 0.2 }} />

// //       {/* Bottom Section */}
// //       <Box sx={{ textAlign: "center", py: 3 }}>
// //         <Typography
// //           variant="body2"
// //           sx={{ mb: 1, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
// //         >
// //           © {new Date().getFullYear()} All rights reserved by{" "}
// //           <Link
// //             href="https://themeforest.net/user/designthemes"
// //             color="inherit"
// //             underline="hover"
// //           >
// //             DesignThemes
// //           </Link>
// //         </Typography>
// //         <Box
// //           component="ul"
// //           sx={{
// //             listStyle: "none",
// //             p: 0,
// //             m: 0,
// //             display: "flex",
// //             flexWrap: "wrap",
// //             justifyContent: "center",
// //             textAlign: "center",
// //             gap: 2,
// //           }}
// //         >
// //           {[
// //             "Terms of Use",
// //             "Legal Disclaimer",
// //             "Privacy Policy",
// //             "Support",
// //             "Sitemap",
// //           ].map((item) => (
// //             <ListItem
// //               key={item}
// //               sx={{
// //                 display: "inline",
// //                 p: 0,
// //                 fontSize: { xs: "0.75rem", sm: "0.875rem" },
// //                 alignItems:"center",
// //               }}
// //             >
// //               <Link href="#" color="inherit" underline="hover">
// //                 {item}
// //               </Link>
// //             </ListItem>
// //           ))}
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Footer;

import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  Link,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "#fff",
        pt: 6,
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          pb: 4,
          px: { xs: 1, sm: 3, md: 6 },
        }}
      >
        {/* CEO Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              borderBottom: "2px solid #fff",
              pb: 1,
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
            }}
          >
            BPS
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              textAlign: "justify",
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
            }}
          >
            Bharat Parcel Services – Your parcel's whereabouts at your
            fingertips, delivering peace of mind.
          </Typography>
          <Box
            component="img"
            src="https://dtlogistics.wpenginepowered.com/wp-content/uploads/2017/03/sign-light.png"
            alt="CEO Signature"
            sx={{ mt: 3, maxWidth: { xs: 140, sm: 180 } }}
            loading="lazy"
          />
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              borderBottom: "2px solid #fff",
              pb: 1,
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            Quick Links
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <List sx={{ p: 0 }}>
                {["About Us", "Service", "How to Track", "Testimonial"].map(
                  (text) => (
                    <ListItem key={text} sx={{ p: 0.5 }}>
                      <Link
                        href="#"
                        color="inherit"
                        underline="hover"
                        fontSize="0.9rem"
                      >
                        {text}
                      </Link>
                    </ListItem>
                  )
                )}
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ p: 0 }}>
                {["Rail Shipping", "Logistic Solutions", "Cargo Shipping"].map(
                  (text) => (
                    <ListItem key={text} sx={{ p: 0.5 }}>
                      <Link
                        href="#"
                        color="inherit"
                        underline="hover"
                        fontSize="0.9rem"
                      >
                        {text}
                      </Link>
                    </ListItem>
                  )
                )}
              </List>
            </Grid>
          </Grid>
        </Grid>

        {/* Newsletter Signup */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              borderBottom: "2px solid #fff",
              pb: 1,
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            Newsletter Signup
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 2, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
          >
            Subscribe for weekly updates about new offers and discounts.
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "row", sm: "column", md: "column" },
              gap: 1.5,
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              required
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                input: { color: "#000", fontSize: "0.9rem" },
                flex: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#f04",
                ":hover": { bgcolor: "#d03" },
                borderRadius: 2,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: "#fff", opacity: 0.2 }} />

      {/* Bottom Section */}
      <Box sx={{ textAlign: "center", py: 3 }}>
        <Typography
          variant="body2"
          sx={{ mb: 1, fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
        >
          © {new Date().getFullYear()} All rights reserved by{" "}
          <Link
            href="https://themeforest.net/user/designthemes"
            color="inherit"
            underline="hover"
          >
            DesignThemes
          </Link>
        </Typography>
        {/* <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
            gap: 1,
          }}
        >
          {[
            "Terms of Use",
            "Legal Disclaimer",
            "Privacy Policy",
            "Support",
            "Sitemap",
          ].map((item) => (
            <ListItem
              key={item}
              sx={{
                display: "inline",
                alignItems: "center",
                justifyContent: "center",

                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                {item}
              </Link>
            </ListItem>
          ))}
        </Box> */}
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 2, // optional: space between items
          }}
        >
          {[
            "Terms of Use",
            "Legal Disclaimer",
            "Privacy Policy",
            "Support",
            "Sitemap",
          ].map((item) => (
            <ListItem
              key={item}
              sx={{
                width: "auto", // ensures it doesn't stretch
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 0,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              <Link href="#" color="inherit" underline="hover">
                {item}
              </Link>
            </ListItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
