import "./App.css"
import Presentacion from "./components/presentacion.jsx";
import Proyectos from "./components/proyectos.jsx";
import Contactos from "./components/contactos.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Skills from "./components/skills.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="background"></div>

      <Presentacion />
      <Proyectos />
      <Skills />
      <Contactos />
    </>
  );
}

export default App;
