import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Botón para abrir/cerrar en móviles */}
      <button
        className="d-md-none position-absolute top-4 left-4 bg-dark text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "❌ Cerrar" : "📂 Menú"}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar bg-dark text-white p-4 ${isOpen ? "open" : "closed"}`}
      >
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/proyectos" className="d-block py-2 px-3 text-white text-decoration-none">
                📊 Tendencias
              </Link>
            </li>
            <li>
              <Link to="/news" className="d-block py-2 px-3 text-white text-decoration-none">
                📰 Noticias Tech
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
