import { FaEye } from "react-icons/fa";
import useRegisterVisit from "../../hooks/useRegisterVisit";
import "../../Styles/styles.scss";

function Visits({ user }) {
  const { totalVisitas, loading, error } = useRegisterVisit(user ? user._id : null);

  if (loading) return <span>Cargando...</span>;
  if (error) return <span>Error al cargar visitas</span>;

  return (
    <span className="visits-badge">
      <FaEye className="eye-icon" />
      {totalVisitas}
    </span>
  );
}

export default Visits;
