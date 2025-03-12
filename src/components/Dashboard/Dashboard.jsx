import React from "react";
import TrendingLanguages from "./TrendingLanguages";
import News from "./News";

const Dashboard = () => {
  return (
    <div className="container p-4">
      {/* Componente TrendingLanguages */}
      <div className="mb-4">
        <TrendingLanguages />
      </div>

      {/* Componente News */}
      <div>
        <News />
      </div>
    </div>
  );
};

export default Dashboard;
