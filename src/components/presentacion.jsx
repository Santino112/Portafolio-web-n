import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Box, Typography, Stack, Button, Card, CardActions, CardContent, CardMedia, Grid, Divider } from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import StayCurrentPortraitRoundedIcon from '@mui/icons-material/StayCurrentPortraitRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

export default function Presentacion() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "transparent",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row"
        },
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        padding: '2rem'
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row"
        },
        justifyContent: 'center',
        gap: {
          xs: 3,
          sm: 4,
          md: 6,
          lg: 6,
          xl: 6
        },
      }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "55%",
              lg: "35%",
              xl: "20%"
            },
            padding: "1.5rem",
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            boxShadow: "0 1px 12px rgba(255,255,255,0.8)",
          }}
        >
          <Box sx={{
            width: {
              xs: "50%",
              sm: "40%",
              md: "55%",
              lg: "55%",
              xl: "60%",
            },
            maxWidth: '100%',
            aspectRatio: "1 / 1",
            overflow: 'hidden',
            borderRadius: "20%",
            boxShadow: "0 1px 12px rgba(255,255,255,0.8)",
            marginBottom: "2rem",

          }}>
            <Box
              component="img"
              src="/Images/FotoPerfill.jpeg"
              alt="Foto de perfil"
              sx={{
                height: "auto",
                width: '100%',
                objectFit: "cover",
                objectPosition: "50% 30%"
              }}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c2b2b58',
            width: '100%',
            padding: '1rem',
            borderRadius: 3,
            boxShadow: 7,
          }}>
            <Typography variant="body1" sx={{
              color: '#ffff',
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              mb: 1,
              wordBreak: "break-word" 
            }}><EmailRoundedIcon fontSize="medium" />santinoscampone1@gmail.com</Typography>
            <Typography variant="body1" sx={{
              color: '#ffff',
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              mb: 1,
              wordBreak: "break-word" 
            }}><StayCurrentPortraitRoundedIcon fontSize="medium" /> 3534244165</Typography>
            <Typography variant="body1" sx={{
              color: '#ffff',
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              mb: 1,
              wordBreak: "break-word" 
            }}><FmdGoodRoundedIcon fontSize="medium" />Villa Maria, Córdoba</Typography>
            <Divider
              sx={{
                width: "90%",
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.38)",
                my: 1
              }}
            />
            <Typography variant="body1" onClick={() => window.open("https://www.linkedin.com/in/santino-scampone-garcia-4baa002aa/", "_blank")} sx={{
              color: '#ffff',
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              mb: 1,
              wordBreak: "break-word",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#0A66C2"
              }
            }}><LinkedInIcon fontSize="medium" />LinkedIn</Typography>
            <Typography variant="body1" onClick={() => window.open("https://github.com/Santino112?tab=overview&from=2026-02-01&to=2026-02-02", "_blank")} sx={{
              color: '#ffff',
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              mb: 1,
              transition: "color 0.3s ease",
              wordBreak: "break-word",
              "&:hover": {
                color: "#181717"
              }
            }}><GitHubIcon fontSize="medium" />GitHub</Typography>
            <Divider
              sx={{
                width: "90%",
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.38)",
                my: 1
              }}
            />
            <Typography variant="body1" sx={{
              color: '#ffff',
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              mb: 1,
              wordBreak: "break-word",
            }}><EventAvailableRoundedIcon fontSize="medium" />Disponibilidad: Full time</Typography>
          </Box>
        </Stack>
        <Stack
          flexDirection='column'
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            maxWidth: 1000,
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            boxShadow: "0 1px 12px rgba(255,255,255,0.8)",
          }}
        >
          <Stack
            spacing={{ xs: 3, sm: 6, md: 5, lg: 5, xl: 5 }}
            direction="column"
            justifyContent="center"
            sx={{
              padding: {
                xs: "2rem",
                sm: "2rem",
                md: "1rem",
                lg: "1rem",
                xl: "1rem"
              }
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "1.6rem",
                  sm: "2.5rem",
                  md: "2rem",
                  lg: "2.5rem",
                  xl: "2.7rem"
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                  xl: "start"
                },
                color: "#ffff",
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(0, 0, 0, 0.29)",
                boxShadow: 3,
                padding: "0.4rem",
                width: "100%",
                wordBreak: "break-word",
                borderRadius: 3,
              }}
            >
              Santino Scampone Garcia
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center"
              sx={{
                width: "100%",
                maxWidth: "900px"
              }}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.5rem",
                    md: "1.7rem",
                    lg: "1.6rem",
                    xl: "1.6rem"
                  },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "start",
                    lg: "start",
                    xl: "start"
                  },
                  color: "#ffff",
                  wordBreak: "break-word"
                }}
              >
                Analista de Sistemas de Computación con enfoque en desarrollo web y experiencia digital. Tengo experiencia en la creación de sitios web y landing pages,
                el desarrollo de interfaces web y la integración de servicios externos mediante API.</Typography>
            </Stack>
            <Grid
              container
              direction="row"
              spacing={{ xs: 5, md: 1 }}
              columns={{ xs: 3, sm: 3, md: 6 }}
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: 800
                }
              }}>
              <Grid size={1}>
                <Box
                  component="svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "64%",
                      lg: "63%",
                      xl: "63%"
                    },
                    fill: "#F7DF1E"
                  }}
                >
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </Box>
              </Grid>
              <Grid size={1}>
                <Box
                  component="svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "64%",
                      lg: "63%",
                      xl: "63%"
                    },
                    fill: "#5FA04E"
                  }}
                >
                  <title>NodeJs</title>
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                </Box>
              </Grid>
              <Grid size={1}>
                <Box
                  component="svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "64%",
                      lg: "63%",
                      xl: "63%"
                    },
                    fill: "#fbfafa"
                  }}
                >
                  <title>NodeJs</title>
                  <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                </Box>
              </Grid>
              <Grid size={1}>
                <Box
                  component="svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "64%",
                      lg: "63%",
                      xl: "63%"
                    },
                    fill: "#61DAFB"
                  }}
                >
                  <title>React</title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </Box>
              </Grid>
              <Grid size={1}>
                <Box
                  component="svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "65%",
                      lg: "63%",
                      xl: "63%"
                    },
                    fill: "#007FFF"
                  }}
                >
                  <title>Material</title>
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MUI</title><path d="M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z" /></svg>
                </Box>
              </Grid>
              <Grid size={1}>
                <Box
                  component="svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "65%",
                      md: "64%",
                      lg: "63%",
                      xl: "63%"
                    },
                    fill: "#C21325"
                  }}
                >
                  <title>Jest</title>
                  <path d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z" />
                </Box>
              </Grid>
            </Grid>
            <Stack spacing={3} direction="row" justifyContent={{ xs: "center", sm: "center", md: "center", lg: "flex-start" }} sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "start",
                xl: "start"
              },
              paddingBottom: {
                xs: 0,
                sm: 0,
                md: "1rem",
                lg: "1rem",
                xl: "1rem"
              }
            }}>
              <Button
                href="/Images/Curriculum Vitae - Scampone Garcia Santino.pdf"
                download
                component="a"
                variant="contained"
                sx={{
                  fontSize: { xs: "0.80rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "1rem" },
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  boxShadow: 7,
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#1E1E1E"
                  }
                }}
              >
                <FileDownloadIcon fontSize="medium" sx={{ marginRight: "0.3rem" }} />Curriculum
              </Button>
              <Button
                href="https://wa.me/5493534244165?text=Hola%2C%20estoy%20interesado%20en%20tu%20trabajo"
                target="_blank"
                rel="noopener noreferrer"
                component="a"
                variant="contained"
                sx={{
                  fontSize: { xs: "0.80rem", sm: "0.80rem", md: "1rem", lg: "1rem", xl: "1rem" },
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  boxShadow: 7,
                  "&:hover": {
                    color: "#ffff",
                    backgroundColor: "#1E1E1E"
                  },
                }}
              >
                <WhatsAppIcon fontSize="medium" sx={{ marginRight: "0.3rem" }} />Contacto
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box >
  );
}