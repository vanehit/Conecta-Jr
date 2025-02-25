import { BrowserRouter, Routes, Route } from "react-router-dom";

import './Styles/styles.scss'
import Home from "./Pages/Home";
import MiExperiencia from "./Pages/MiExperiencia";
import Consejos from "./Pages/Consejos";
import Contacto from "./Pages/Contacto";
import CustomNavbar from "./components/Nabvar/Navbar";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <CustomNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mi-experiencia" element={<MiExperiencia />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
