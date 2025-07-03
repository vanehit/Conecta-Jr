import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import "../../Styles/styles.scss";

const HeroBanner = () => {
  return (
    <section className="hero-banner text-white text-center">
      <div className="overlay" /> {/* Capa oscura encima de la imagen */}
      <div className="container hero-content">
        <motion.h1
          className="display-4 fw-bold mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenidos a <span className="highlight">Conecta Jr</span>
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Consejos, recursos y experiencias para dar tus primeros pasos en el desarrollo web.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button onClick={() => alert("¡Explorá el blog!")}>Descubrí más</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
