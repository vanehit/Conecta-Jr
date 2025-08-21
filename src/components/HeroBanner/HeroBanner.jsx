import React, { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import "../../Styles/styles.scss";
import logo from "../../../public/images/logo-Conecta-jr-icono.png";

const HeroBanner = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isMoving) return;

    const moveLogo = () => {
      const container = containerRef.current;
      if (!container) return;

      const maxX = container.offsetWidth - 80; // 80px ancho del logo
      const maxY = container.offsetHeight - 80;

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(moveLogo, 2000); // Cambia de posición cada 2s
    return () => clearInterval(interval);
  }, [isMoving]);

  return (
    <motion.section
      className="hero-banner text-white text-center"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ position: "relative", overflow: "hidden" }}
      ref={containerRef}
    >
      <div className="overlay" />
      <div className="container hero-content">
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenidos a <span className="highlight">CONECTA JR</span>
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Consejos, recursos y experiencias para dar tus primeros pasos en el desarrollo web.
        </motion.p>

        {/* aca el Logo que se mueve libremente */}
        <motion.img
          src={logo}
          alt="Logo Conecta Jr"
          className="animated-logo"
          animate={position}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{
            width: "80px",
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "pointer",
          }}
          onClick={() => setIsMoving(!isMoving)}
        />
      </div>
    </motion.section>
  );
};

export default HeroBanner;
