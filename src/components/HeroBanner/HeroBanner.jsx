import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../Styles/styles.scss";
import logo from "../../../public/images/logo-Conecta-jr-icono.png";

const HeroBanner = () => {
  return (
    <motion.section
      className="hero-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        {/* LOGO IZQUIERDA */}
        <motion.div
          className="hero-logo"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Logo Conecta JR" />
        </motion.div>

        {/* TEXTO DERECHA */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CONECTA JR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Recursos, acompañamiento y experiencias reales para programadores
            juniors que quieren dar su primer paso profesional.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/consejos" className="primary">
              Explorar recursos
            </Link>

            <Link to="MiExperiencia" className="secondary">
              Mi Experiencia
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
