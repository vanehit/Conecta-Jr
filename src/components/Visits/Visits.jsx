import { FaEye } from "react-icons/fa";
import useRegisterVisit from "../../hooks/useRegisterVisit";
import "../../Styles/styles.scss";

function Visits() {
  const { totalVisitas, loading, error } = useRegisterVisit();

  if (loading) return <span>Cargando...</span>;
  if (error) return <span>Error</span>;

  return (
    <span className="visits-badge">
      <FaEye className="eye-icon" />
      {totalVisitas}
    </span>
  );
}

export default Visits;
