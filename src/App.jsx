import { BrowserRouter, Routes, Route } from "react-router-dom";

import './Styles/styles.scss'
import Home from "./Pages/Home";
import MiExperiencia from "./Pages/MiExperiencia";
import Consejos from "./Pages/Consejos";
import Contacto from "./Pages/Contacto";
import CustomNavbar from "./components/Nabvar/Navbar";
import Proyectos from "./Pages/Proyectos";
import News from "./components/Dashboard/News";
import TrendingLanguages from "./components/Dashboard/TrendingLanguages";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";



function App() {
  
  return (
    <>
      <BrowserRouter>
      <CustomNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mi-experiencia" element={<MiExperiencia />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/news" element={<News />} /> 
        <Route path="/tendencias" element={<TrendingLanguages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
