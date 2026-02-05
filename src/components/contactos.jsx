import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { motion } from "framer-motion";
import { Box, Typography, Stack, Button, Card, CardActions, CardContent, CardMedia, Grid, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
const MotionBox = motion(Box);

export default function Contactos() {
  return (
    <Box component="section" sx={{
      width: "100%",
      minHeight: "100dvh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <MotionBox
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Stack spacing={6} direction="column" justifyContent="center" alignItems="center" sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.10)",
          boxShadow: "0 1px 12px rgba(255,255,255,0.8)",
          borderRadius: 3,
          width: {
            xs: "80%",
            sm: "80%",
            md: "80%",
            lg: "80%",
            xl: "65%"
          },
          height: {
            xs: 600,
            sm: 600,
            md: 500,
            lg: 400,
            xl: 500
          },
        }}>
          <Typography variant="h2" sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "2rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "2.5rem"
            },
            color: "#ffff",
            wordBreak: "break-word"
          }}>¿Tienes algún proyecto en mente?</Typography>
          <Typography variant="body" sx={{
            fontSize: {
              xs: "1.3rem",
              sm: "1.7rem",
              md: "1.7rem",
              lg: "2rem",
              xl: "2rem"
            },
            color: "#ffff",
            wordBreak: "break-word",
          }}>Hablemos <HandshakeRoundedIcon fontSize="large" sx={{ verticalAlign: "middle", ml: 1 }} /></Typography>
          <Stack spacing={{ xs: 3, sm: 3, md: 5, lg: 6, xl: 6 }} direction={{ xs: "column", sm: "column", md: "row" }}>
            <Button component="a" href="https://github.com/Santino112" target="_blank" rel="noopener noreferrer" sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.6rem",
                md: "1.4rem",
                lg: "1.7rem",
                xl: "1.7rem"
              },
              backgroundColor: "transparent",
              textShadow: "3px 3px 3px #1f1f1f",
              transition: "transform 0.4s ease",
              color: "#ffff",
              "&:hover": {
                color: "#181717",
                backgroundColor: "transparent",
                transform: "scale(1.10)"
              },
            }}><GitHubIcon fontSize="long" sx={{ marginRight: "0.3rem" }} /> GitHub</Button>
            <Button component="a" href="https://www.linkedin.com/in/santino-scampone-garcia-4baa002aa/" target="_blank" rel="noopener noreferrer" sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.6rem",
                md: "1.4rem",
                lg: "1.7rem",
                xl: "1.7rem"
              },
              backgroundColor: "transparent",
              textShadow: "3px 3px 3px #1f1f1f",
              transition: "transform 0.4s ease",
              color: "#ffff",
              "&:hover": {
                color: "#0A66C2",
                backgroundColor: "transparent",
                transform: "scale(1.10)"
              },
            }}><LinkedInIcon fontSize="long" sx={{ marginRight: "0.3rem" }} />LinkedIn</Button>
            <Button component="a" href="https://www.instagram.com/_santiscampone/" target="_blank" rel="noopener noreferrer" sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.6rem",
                md: "1.4rem",
                lg: "1.7rem",
                xl: "1.7rem"
              },
              backgroundColor: "transparent",
              textShadow: "3px 3px 3px #1f1f1f",
              transition: "transform 0.4s ease",
              color: "#ffff",
              "&:hover": {
                color: "#FF0069",
                backgroundColor: "transparent",
                transform: "scale(1.10)"
              },
            }}><InstagramIcon fontSize="long" sx={{ marginRight: "0.3rem" }} />Instagram</Button>
            <Button component="a" href="https://x.com/Santino_S13" target="_blank" rel="noopener noreferrer" sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.6rem",
                md: "1.4rem",
                lg: "1.7rem",
                xl: "1.7rem"
              },
              backgroundColor: "transparent",
              textShadow: "3px 3px 3px #1f1f1f",
              transition: "transform 0.4s ease",
              color: "#ffff",
              "&:hover": {
                color: "#000000",
                backgroundColor: "transparent",
                transform: "scale(1.10)"
              },
            }}><XIcon fontSize="long" sx={{ marginRight: "0.3rem" }} />Twitter</Button>
          </Stack>
        </Stack>
      </MotionBox>
    </Box >
  )
}