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
          <div className="hero-text-inner">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            Sabés programar, pero no sabés cómo llegar a tu primer trabajo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
            En CONECTA JR ordenás qué estudiar, mejorás tus proyectos y te preparás para entrevistas reales, sin vueltas ni promesas falsas.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link to="/roadmap" className="primary">
                👉 Empezar mi roadmap junior
              </Link>
            </motion.div>
            <p className="hero-note">
              Creado por una developer junior para acompañar a otros juniors.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
