import { useState } from "react";
import RoadmapBlock from "../components/Roadmap/RoadmapBlock";
import AIRecommendations from "../components/Roadmap/AIRecommendations";
import ProgressTracker from "../components/ProgressTracker/ProgressTracker";
import roadmapData from "../../public/data/roadmap.json";

function Roadmap() {
  const [completed, setCompleted] = useState([]);

  const handleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">🧭 Mi Roadmap Junior</h1>
      <AIRecommendations completed={completed} />
      <ProgressTracker
        completedCount={completed.length}
        total={roadmapData.length}
      />

      {roadmapData.map((block) => (
        <RoadmapBlock
          key={block.id}
          block={block}
          completed={completed.includes(block.id)}
          onComplete={() => handleComplete(block.id)}
        />
      ))}

     
    </div>
  );
}

export default Roadmap;
