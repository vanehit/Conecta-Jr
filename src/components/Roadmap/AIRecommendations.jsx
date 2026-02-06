import PropTypes from "prop-types";

function AIRecommendations({ completed }) {
  let message = "Empezá por el primer bloque del roadmap 👇";

  if (completed.includes("html-css") && !completed.includes("javascript")) {
    message = "Buenísimo 👏 Ahora metele a JavaScript, es clave para avanzar.";
  }

  if (completed.includes("javascript") && !completed.includes("react")) {
    message = "Ya tenés base sólida. Es momento de React ⚛️";
  }

  if (completed.length >= 3) {
    message =
      "Excelente progreso 🚀 Empezá a crear proyectos reales y pulí tu portfolio.";
  }

  return (
    <div className="alert alert-info mt-5 rounded-4">
      <strong>Recomendación personalizada:</strong>
      <p className="mb-0 mt-2">{message}</p>
    </div>
  );
}

AIRecommendations.propTypes = {
  completed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AIRecommendations;
