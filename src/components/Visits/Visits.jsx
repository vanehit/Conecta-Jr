import { FaEye } from "react-icons/fa";
import useRegisterVisit from "../../hooks/useRegisterVisit";
import "../../Styles/styles.scss";

function Visits({ user }) {
  const { totalVisitas, loading, error } = useRegisterVisit(user?._id);

  if (loading || error) {
    return (
      <span className="visits-badge">
        <FaEye className="eye-icon" /> —
      </span>
    );
  }

  return (
    <span className="visits-badge">
      <FaEye className="eye-icon" />
      {totalVisitas}
    </span>
  );
}

export default Visits;
