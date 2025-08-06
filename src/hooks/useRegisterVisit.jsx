import { useEffect, useState } from "react";

function useRegisterVisit(userId) {
  const [totalVisitas, setTotalVisitas] = useState(null);

  useEffect(() => {
    const body = userId ? { userId } : {};
    fetch("http://localhost:5000/api/visits/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => setTotalVisitas(data.total))
      .catch(console.error);
  }, [userId]);

  return totalVisitas;
}

export default useRegisterVisit;
