import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Box, Typography, Stack, Button, Card, CardActions, CardContent, CardMedia, Grid, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Contactos() {
  return (
    <Box component="section" sx={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
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
            xs: "2rem",
            sm: "2rem",
            md: "2rem",
            lg: "2.5rem",
            xl: "3rem"
          },
          color: "#ffff",
          wordBreak: "break-word"
        }}>Trabajemos juntos...</Typography>
        <Typography variant="body" sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "2rem",
            xl: "2rem"
          },
          color: "#ffff",
          wordBreak: "break-word",
        }}>Mis redes de contacto</Typography>
        <Stack spacing={{ xs: 3, sm: 3, md: 7 }} direction={{ xs: "column", sm: "column", md: "row" }}>
          <Button component="a" href="https://github.com/Santino112" target="_blank" rel="noopener noreferrer" sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.4rem",
              md: "1.4rem",
              lg: "1.7rem",
              xl: "2rem"
            },
            backgroundColor: "transparent",
            textShadow: "3px 3px 3px #1f1f1f",
            transition: "transform 0.3s ease-out",
            color: "#ffff",
            "&:hover": {
              color: "#ffff",
              backgroundColor: "transparent",
              transform: "scale(1.10)"
            },
          }}><GitHubIcon fontSize="long" sx={{ marginRight: "0.3rem" }} /> GitHub</Button>
          <Button component="a" href="https://www.linkedin.com/in/santino-scampone-garcia-4baa002aa/" target="_blank" rel="noopener noreferrer" sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.4rem",
              md: "1.4rem",
              lg: "1.7rem",
              xl: "2rem"
            },
            backgroundColor: "transparent",
            textShadow: "3px 3px 3px #1f1f1f",
            transition: "transform 0.3s ease-out",
            color: "#ffff",
            "&:hover": {
              color: "#ffff",
              backgroundColor: "transparent",
              transform: "scale(1.10)"
            },
          }}><LinkedInIcon fontSize="long" sx={{ marginRight: "0.3rem" }} />LinkedIn</Button>
          <Button component="a" href="https://www.instagram.com/_santiscampone/" target="_blank" rel="noopener noreferrer" sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.4rem",
              md: "1.4rem",
              lg: "1.7rem",
              xl: "2rem"
            },
            backgroundColor: "transparent",
            textShadow: "3px 3px 3px #1f1f1f",
            transition: "transform 0.3s ease-out",
            color: "#ffff",
            "&:hover": {
              color: "#ffff",
              backgroundColor: "transparent",
              transform: "scale(1.10)"
            },
          }}><InstagramIcon fontSize="long" sx={{ marginRight: "0.3rem" }} />Instagram</Button>
          <Button component="a" href="https://x.com/Santino_S13" target="_blank" rel="noopener noreferrer" sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.4rem",
              md: "1.4rem",
              lg: "1.7rem",
              xl: "2rem"
            },
            backgroundColor: "transparent",
            textShadow: "3px 3px 3px #1f1f1f",
            transition: "transform 0.3s ease-out",
            color: "#ffff",
            "&:hover": {
              color: "#ffff",
              backgroundColor: "transparent",
              transform: "scale(1.10)"
            },
          }}><XIcon fontSize="long" sx={{ marginRight: "0.3rem" }} />Twitter</Button>
        </Stack>
      </Stack>
    </Box >
  )
}