import { useEffect, useState } from "react";

function MensajesPanel() {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const res = await fetch("https://conectajr-backend.onrender.com/api/mensajes", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Error al cargar mensajes");

        const data = await res.json();
        setMensajes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMensajes();
  }, []);

  if (loading) return <p>Cargando mensajes...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="mensajes-panel">
      <h2>📩 Mensajes recibidos</h2>
      {mensajes.length === 0 ? (
        <p>No hay mensajes aún.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {mensajes.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.nombre}</td>
                <td>{msg.email}</td>
                <td>{msg.mensaje}</td>
                <td>{new Date(msg.fecha).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MensajesPanel;
