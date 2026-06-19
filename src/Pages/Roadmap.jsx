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
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleComplete = (id) => {
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const getInterviewAppUrl = () => {
    return import.meta.env.VITE_INTERVIEW_APP_URL || "http://localhost:5174";
  };

  const buildPracticeUrl = (stack) => {
    const url = new URL(getInterviewAppUrl());
    url.searchParams.set("stack", stack);
    url.searchParams.set("source", "roadmap");
    return url.toString();
  };

  const getPrimaryPracticeStack = (block) => {
    if (
      Array.isArray(block.practiceStacks) &&
      block.practiceStacks.length > 0
    ) {
      return block.practiceStacks[0];
    }

    return null;
  };

  const getAuthSessionPayload = () => {
    return {
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
      userName: localStorage.getItem("userName"),
    };
  };

  const sendAuthSessionToPracticeLab = (practiceWindow) => {
    const session = getAuthSessionPayload();

    if (!session.token || !practiceWindow) {
      return;
    }

    const targetOrigin = new URL(getInterviewAppUrl()).origin;

    const message = {
      type: "CONECTA_JR_AUTH_SESSION",
      payload: session,
    };

    let attempts = 0;
    const maxAttempts = 10;

    const intervalId = window.setInterval(() => {
      if (practiceWindow.closed || attempts >= maxAttempts) {
        window.clearInterval(intervalId);
        return;
      }

      practiceWindow.postMessage(message, targetOrigin);
      attempts += 1;
    }, 500);
  };

  const openPracticeLab = (stack) => {
    const practiceUrl = buildPracticeUrl(stack);
    const practiceWindow = window.open(practiceUrl, "_blank");

    if (!practiceWindow) {
      window.location.href = practiceUrl;
      return;
    }

    if (isAuthenticated) {
      sendAuthSessionToPracticeLab(practiceWindow);
    }
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

    openPracticeLab(practicePrompt.stack);
  };

  const handlePractice = (block) => {
    const stack = getPrimaryPracticeStack(block);

    if (!stack) {
      console.warn("No hay stack configurado para este bloque", block);
      return;
    }

    if (isAuthenticated) {
      openPracticeLab(stack);
      return;
    }

    setPracticePrompt({
      title: block.title,
      stack,
    });
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">🧭 Mi Roadmap Junior</h1>
      <AIRecommendations completed={completed} />
      <ProgressTracker
        completedCount={completed.length}
        total={roadmapData.length}
      />

      {practicePrompt && (
        <div className="mb-4 rounded-4 border border-success-subtle bg-light p-4 shadow-sm">
          <div className="d-flex flex-column gap-3">
            <div>
              <h2 className="h4 mb-2">Antes de abrir tu Practice Lab</h2>
              <p className="text-muted mb-2">
                Vas a practicar el bloque{" "}
                <strong>{practicePrompt.title}</strong> en{" "}
                <strong>{practicePrompt.stack}</strong>.
              </p>
              <p className="text-muted mb-0">
                Si iniciás sesión o te registrás en <strong>Conecta JR</strong>,
                vas a poder guardar tu progreso, construir historial real de
                práctica y seguir tu crecimiento técnico por stack.
              </p>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleLoginRedirect}
              >
                Iniciar sesión para guardar progreso
              </button>

              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleSignupRedirect}
              >
                Registrarme en Conecta JR
              </button>

              <button
                type="button"
                className="btn btn-light border"
                onClick={handleContinueAsGuest}
              >
                Continuar como invitado
              </button>

              <button
                type="button"
                className="btn btn-link text-muted"
                onClick={closePracticePrompt}
              >
                Cancelar
              </button>
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
