import { useState } from "react";

function ShortCard({
  id,
  title,
  description,
  video,
  tags,
  link,
  docLink,
  locked,
  likes: initialLikes,
  liked: initialLiked
}) {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [liked, setLiked] = useState(initialLiked || false);

  const token = localStorage.getItem("token");

  const handleLike = async () => {
    if (!token || locked) return;

    const nextLiked = !liked;

    // 🚀 Optimistic update
    setLiked(nextLiked);
    setLikes((prev) => (nextLiked ? prev + 1 : prev - 1));

    try {
      await fetch(`http://localhost:5000/api/likes/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      // 🔄 revert if fails
      setLiked(!nextLiked);
      setLikes((prev) => (nextLiked ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className={`card h-100 shadow-sm border-0 ${locked ? "opacity-50" : ""}`}>
      <video
        src={video}
        controls={!locked}
        className="w-100 rounded-top"
        style={{ maxHeight: "220px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>

        <div className="d-flex gap-2 flex-wrap mb-3">
          {tags.map((tag, index) => (
            <span key={index} className={`badge ${tag.variant}`}>
              {tag.label}
            </span>
          ))}
        </div>

        {/* ❤️ Like */}
        <div className="mb-3">
          <button
            onClick={handleLike}
            className={`like-btn ${liked ? "liked" : ""}`}
            disabled={locked}
          >
            <span>{liked ? "❤️" : "🤍"}</span>
            <span className="ms-1">{likes}</span>
          </button>
        </div>

        <div className="mt-auto d-flex gap-2">
          {link && !locked && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm"
            >
              📄 Descargar PDF
            </a>
          )}

          {docLink && !locked && (
            <a
              href={docLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              Docs oficiales
            </a>
          )}
        </div>

        {locked && (
          <div className="mt-3 text-danger small">
            🔒 Contenido premium
          </div>
        )}
      </div>
    </div>
  );
}

export default ShortCard;
