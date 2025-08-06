import { useEffect, useState } from "react";

 function useRegisterVisit() {
  const [totalVisitas, setTotalVisitas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/register", { method: "POST" }) // Cambiar URL si es necesario
      .then(res => res.json())
      .then(data => setTotalVisitas(data.total))
      .catch(console.error);
  }, []);

  return totalVisitas;
}

export default useRegisterVisit;