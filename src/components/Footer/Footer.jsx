import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ('../../Styles/styles.scss')

function Footer() {
  return (
    <footer className="footer text-center py-3 bg-dark text-light mt-auto">
      <p className="mb-1">
        © 2024 <strong>CONECTA-JR</strong> | Desarrollado por <strong>Vanesa Paola Soria</strong> | <strong>Todos los Derechos Reservados</strong>
      </p>
      <div className="d-flex justify-content-center gap-4 mt-2 fs-4">
        <a
          href="https://www.linkedin.com/in/vanesa-paola-soria-40170a1b3/"
          className="text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vanehit"
          className="text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
