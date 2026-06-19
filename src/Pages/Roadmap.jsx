import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoadmapBlock from "../components/Roadmap/RoadmapBlock";
import AIRecommendations from "../components/Roadmap/AIRecommendations";
import ProgressTracker from "../components/ProgressTracker/ProgressTracker";
import roadmapData from "../../public/data/roadmap.json";
import { useAuth } from "../context/AuthContext.jsx";

function Roadmap() {
  const [completed, setCompleted] = useState([]);
  const [practicePrompt, setPracticePrompt] = useState(null);
  const [showConstructionAlert, setShowConstructionAlert] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleComplete = (id) => {
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  // --- Lógica de construcción ---
  const handlePractice = (block) => {
    // Para activar cuando el Lab esté 100% listo:
    /*
    const stack = getPrimaryPracticeStack(block);
    if (!stack) return;
    if (isAuthenticated) {
      openPracticeLab(stack);
      return;
    }
    setPracticePrompt({ title: block.title, stack });
    */

    // Aviso temporal
    setShowConstructionAlert(true);
    setTimeout(() => setShowConstructionAlert(false), 4000);
  };

  const closePracticePrompt = () => {
    setPracticePrompt(null);
  };

  const handleLoginRedirect = () => {
    if (!practicePrompt?.stack) return;
    localStorage.setItem("pendingPracticeStack", practicePrompt.stack);
    localStorage.setItem("pendingPracticeSource", "roadmap");
    navigate("/login");
  };

  const handleSignupRedirect = () => {
    if (!practicePrompt?.stack) return;
    localStorage.setItem("pendingPracticeStack", practicePrompt.stack);
    localStorage.setItem("pendingPracticeSource", "roadmap");
    navigate("/signup");
  };

  const handleContinueAsGuest = () => {
    if (!practicePrompt?.stack) return;
    // openPracticeLab(practicePrompt.stack); // Integrar cuando esté listo
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">🧭 Mi Roadmap Junior</h1>
      
      {/* Aviso de construcción */}
      {showConstructionAlert && (
        <div className="alert alert-warning text-center shadow-sm" role="alert">
          🚀 <strong>¡Estamos trabajando en el Practice Lab!</strong> Estará disponible muy pronto para potenciar tu carrera.
        </div>
      )}

      <AIRecommendations completed={completed} />
      <ProgressTracker
        completedCount={completed.length}
        total={roadmapData.length}
      />

      {/* El prompt de práctica (se mantendrá igual para cuando lo actives) */}
      {practicePrompt && (
        <div className="mb-4 rounded-4 border border-success-subtle bg-light p-4 shadow-sm">
          <div className="d-flex flex-column gap-3">
            <div>
              <h2 className="h4 mb-2">Antes de abrir tu Practice Lab</h2>
              <p className="text-muted mb-2">
                Vas a practicar el bloque <strong>{practicePrompt.title}</strong> en <strong>{practicePrompt.stack}</strong>.
              </p>
              <p className="text-muted mb-0">
                Si iniciás sesión o te registrás en <strong>Conecta JR</strong>, vas a poder guardar tu progreso, construir historial real de práctica y seguir tu crecimiento técnico por stack.
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <button type="button" className="btn btn-success" onClick={handleLoginRedirect}>Iniciar sesión para guardar progreso</button>
              <button type="button" className="btn btn-outline-success" onClick={handleSignupRedirect}>Registrarme en Conecta JR</button>
              <button type="button" className="btn btn-light border" onClick={handleContinueAsGuest}>Continuar como invitado</button>
              <button type="button" className="btn btn-link text-muted" onClick={closePracticePrompt}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {roadmapData.map((block) => (
        <RoadmapBlock
          key={block.id}
          block={block}
          completed={completed.includes(block.id)}
          onComplete={() => handleComplete(block.id)}
          onPractice={handlePractice}
        />
      ))}
    </div>
  );
}

export default Roadmap;