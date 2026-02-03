import "../App.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Box, Typography, Stack, Button, Card, CardActions, CardContent, CardMedia, Grid, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Proyectos() {
  return (
    <Box component="section"
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(255, 255, 255, 0.10)",
        boxShadow: 6,
        borderRadius: 7,
      }}>
      <Typography variant="h1" component="div"
        sx={{
          fontSize: { xs: "2rem", sm: "2rem", md: "2rem", lg: "2.5rem", xl: "2.5rem" },
          marginTop: "2rem",
          color: "#ffff",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          boxShadow: "0 1px 12px rgba(255,255,255,0.8)",
          padding: "1rem"
        }}>Proyectos</Typography>
      <Grid
        container
        spacing={{ xs: 8, sm: 8, md: 13, lg: 13, xl: 13 }}
        flexDirection="column"
        justifyContent="center"
        sx={{
          padding: {
            xs: "2rem",
            sm: "2rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem"
          },
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%"
          },
          margin: {
            xs: "1rem auto",
            sm: "1rem auto",
            md: "1rem auto",
            lg: "0 auto",
            xl: "0 auto"
          }
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            maxWidth: 1000, height: {
              xs: 550,
              sm: 550,
              md: '100%',
              lg: '100%',
              xl: '100%'
            }, margin: "0 auto", color: "#ffff", backgroundColor: "#212121", boxShadow: "0 5px 12px rgba(10, 10, 10, 0.8)", display: "flex", flexDirection: "column"
          }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              src={"/Images/Domus.png"}
            />
            <CardContent sx={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.5rem" } }}>
                Domüs HumanixTech
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem", }, wordBreak: "break-word" }}>
                Aplicación web desarrollada en equipo para simular un entorno de trabajo real. Incluye landing page, login, panel de administración y procesamiento de datos mediante IA.<br />
                Stack tecnológico: Node.js, Express, React, Supabase, OpenAI API.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="Contained" component="a" href="https://landing-domus.vercel.app/" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  ml: 1,
                  mb: 1,
                  backgroundColor: "#37474f",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#263238"
                  }
                }}>Ver proyecto</Button>
              <Button size="medium" variant="text" component="a" href="https://github.com/TobiasRequena/robot-backend" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  mb: 1,
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                  }
                }}><GitHubIcon fontSize="small" sx={{ marginRight: "0.5rem" }} /> Ver codigo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            maxWidth: 1000, height: {
              xs: 550,
              sm: 550,
              md: '100%',
              lg: '100%',
              xl: '100%'
            }, margin: "0 auto", color: "#ffff", backgroundColor: "#212121", boxShadow: "0 5px 12px rgba(10, 10, 10, 0.8)", display: "flex", flexDirection: "column"
          }}>
            <CardMedia
              component="img"
              alt="Corporate website"
              height="300"
              src={"/Images/corporateWebsite.png"}
            />
            <CardContent sx={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.5rem" } }}>
                Corporate Website
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem", }, wordBreak: "break-word" }}>
                Aplicación web desarrollada para simular la gestión de una empresa de distribución de soda.
                Permite visualizar información institucional, iniciar sesión como administrador y gestionar datos internos de los clientes, productos, pedidos y rutas de entrega.<br />
                Stack tecnológico: Node.js, Express, MySQL, React Vite y Material Design.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="Contained" component="a" href="#" disableElevation disabled
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  ml: 1,
                  mb: 1,
                  backgroundColor: "#37474f",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#263238"
                  }
                }}>Ver proyecto</Button>
              <Button size="medium" variant="text" component="a" href="https://github.com/Santino112/Corporate-website" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  mb: 1,
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                  }
                }}><GitHubIcon fontSize="small" sx={{ marginRight: "0.5rem" }} /> Ver codigo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            maxWidth: 1000, height: {
              xs: 550,
              sm: 550,
              md: '100%',
              lg: '100%',
              xl: '100%'
            }, margin: "0 auto", color: "#ffff", backgroundColor: "#212121", boxShadow: "0 5px 12px rgba(10, 10, 10, 0.8)", display: "flex", flexDirection: "column"
          }}>
            <CardMedia
              component="img"
              alt="Wallet Auth0"
              height="300"
              src={"/Images/walletAuth0.png"}
            />
            <CardContent sx={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.5rem" } }}>
                Wallet con Auth0
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem", }, wordBreak: "break-word" }}>
                Version mejorada del anterior proyecto de "Wallet raulo coins". En este proyecto utilizamos un servicio de terceros para ingresar a la billetera virtual. Además, se agregaron nuevas funcionalidades y mejoras.<br />
                Desarrollado con React Vite y Material Design. <br />
                Stack tecnológico: Auth0, React Vite, Material Design.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="Contained" component="a" href="https://wallet-auth0.vercel.app" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  ml: 1,
                  mb: 1,
                  backgroundColor: "#37474f",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#263238"
                  }
                }}>Ver proyecto</Button>
              <Button size="medium" variant="text" component="a" href="https://github.com/Santino112/Wallet-Auth0" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  mb: 1,
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                  }
                }}><GitHubIcon fontSize="small" sx={{ marginRight: "0.5rem" }} /> Ver codigo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            maxWidth: 1000, height: {
              xs: 550,
              sm: 550,
              md: '100%',
              lg: '100%',
              xl: '100%'
            }, margin: "0 auto", color: "#ffff", backgroundColor: "#212121", boxShadow: "0 5px 12px rgba(10, 10, 10, 0.8)", display: "flex", flexDirection: "column"
          }}>
            <CardMedia
              component="img"
              alt="Wallet"
              height="300"
              src={"/Images/walletRaulo.png"}
            />
            <CardContent sx={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.5rem" } }}>
                Wallet raulo coins
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem", }, wordBreak: "break-word" }}>
                Proyecto donde se utiliza una serie de apis para generar una billetera virtual de transacciones entre mis diferentes compañeros universitarios. Esta fue realizada con React Vite, para la estructura y manejo de las api y Material Design para todo el diseño.<br />
                Stack tecnológico: React Vite, Material Design.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="Contained" component="a" href="https://wallet-raulo-coins.vercel.app" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  ml: 1,
                  mb: 1,
                  backgroundColor: "#37474f",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#263238"
                  }
                }}>Ver proyecto</Button>
              <Button size="medium" variant="text" component="a" href="https://github.com/Santino112/Wallet-RauloCoins" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  mb: 1,
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                  }
                }}><GitHubIcon fontSize="small" sx={{ marginRight: "0.5rem" }} /> Ver codigo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            maxWidth: 1000, height: {
              xs: 550,
              sm: 550,
              md: '100%',
              lg: '100%',
              xl: '100%'
            }, margin: "0 auto", color: "#ffff", backgroundColor: "#212121", boxShadow: "0 5px 12px rgba(10, 10, 10, 0.8)", display: "flex", flexDirection: "column"
          }}>
            <CardMedia
              component="img"
              alt="Preguntado"
              height="300"
              src={"/Images/Preguntame.png"}
            />
            <CardContent sx={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.5rem" } }}>
                Preguntame
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem", }, wordBreak: "break-word" }}>
                Aplicación que responde 'Sí' o 'No' en base a una pregunta del usuario, usando una API que devuelve un gif y una respuesta textual, tipo oráculo digital moderno.<br />
                Stack tecnológico: React Vite, Material Design.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="Contained" component="a" href="https://preguntas-ashy.vercel.app" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  ml: 1,
                  mb: 1,
                  backgroundColor: "#37474f",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#263238"
                  }
                }}>Ver proyecto</Button>
              <Button size="medium" variant="text" component="a" href="https://github.com/Santino112/Preguntas" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  mb: 1,
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                  }
                }}><GitHubIcon fontSize="small" sx={{ marginRight: "0.5rem" }} /> Ver codigo</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            maxWidth: 1000, height: {
              xs: 550,
              sm: 550,
              md: '100%',
              lg: '100%',
              xl: '100%'
            }, margin: "0 auto", color: "#ffff", backgroundColor: "#212121", boxShadow: "0 5px 12px rgba(10, 10, 10, 0.8)", display: "flex", flexDirection: "column"
          }}>
            <CardMedia
              component="img"
              alt="Survey Form"
              height="300"
              src={"/Images/surveyForm.png"}
            />
            <CardContent sx={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "1.5rem", sm: "1.1rem", md: "1.5rem" } }}>
                Survey form
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "1.1rem", sm: "1.1rem", md: "1.2rem", }, wordBreak: "break-word" }}>
                Un formulario en línea que se utiliza para recopilar respuestas o datos de los usuarios sobre un tema específico.<br />
                Stack tecnológico: HTML5, CSS, JavaScript, Bootstrap.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant="Contained" component="a" href="https://survey-form-wheat-alpha.vercel.app" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  ml: 1,
                  mb: 1,
                  backgroundColor: "#37474f",
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#263238"
                  }
                }}>Ver proyecto</Button>
              <Button size="medium" variant="text" component="a" href="https://github.com/Santino112/Survey-form" target="_blank" rel="noopener noreferrer" disableElevation
                sx={{
                  fontSize: { xs: "0.80rem", md: "1rem" },
                  mb: 1,
                  color: "#ffff",
                  "&:hover": {
                    color: "#ffff",
                  }
                }}><GitHubIcon fontSize="small" sx={{ marginRight: "0.5rem" }} /> Ver codigo</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}