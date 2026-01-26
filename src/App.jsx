import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import MiExperiencia from "./Pages/MiExperiencia";
import Consejos from "./Pages/Consejos";
import ConectaEnCorto from "./Pages/ConectaEnCorto"
import Contacto from "./Pages/Contacto";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Proyectos from "./Pages/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout principal */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/miExperiencia" element={<MiExperiencia />} />
          <Route path="/consejos" element={<Consejos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/conecta-en-corto" element={<ConectaEnCorto />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>

        {/* Layout auth (sin navbar) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
