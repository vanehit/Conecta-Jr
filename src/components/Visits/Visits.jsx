import useRegisterVisit from "../../hooks/useRegisterVisit";

function Visits() {
  const totalVisitas = useRegisterVisit();

  return (
    <p style={{ fontSize: "14px", color: "gray" }}>
      {totalVisitas !== null ? `Visitas totales: ${totalVisitas}` : "Cargando visitas..."}
    </p>
  );
}

export default Visits;