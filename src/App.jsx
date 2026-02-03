import Presentacion from "./components/presentacion.jsx";
import Proyectos from "./components/proyectos.jsx";
import Contactos from "./components/contactos.jsx";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <>
        <Presentacion />
      </>
      <>
        <Proyectos />
      </>
      <>
        <Contactos />
      </>
    </>
  );
}

export default App;
