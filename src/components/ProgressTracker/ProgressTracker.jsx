import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

function ProgressTracker({ completedCount, total }) {
  const percentage =
    total === 0 ? 0 : Math.round((completedCount / total) * 100);

  return (
    <div className="mb-5">
      <h5 className="mb-2">Tu progreso</h5>
      <ProgressBar now={percentage} label={`${percentage}%`} />
    </div>
  );
}

ProgressTracker.propTypes = {
  completedCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressTracker;
