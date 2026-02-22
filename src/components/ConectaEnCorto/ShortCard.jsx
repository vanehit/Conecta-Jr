import { useEffect, useState } from "react";

function ShortCard({
  id,
  title,
  description,
  video,
  tags,
  link,
  docLink
}) {
  const [likes, setLikes] = useState(0);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  // Cargar estado desde localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes-${id}`);
    const liked = localStorage.getItem(`liked-${id}`);

    if (storedLikes) {
      setLikes(Number(storedLikes));
    }

    if (liked) {
      setAlreadyLiked(true);
    }
  }, [id]);

  // Toggle like
  const handleLike = () => {
    let newLikes;

    if (alreadyLiked) {
      newLikes = likes - 1;
      setAlreadyLiked(false);
      localStorage.removeItem(`liked-${id}`);
    } else {
      newLikes = likes + 1;
      setAlreadyLiked(true);
      localStorage.setItem(`liked-${id}`, "true");
    }

    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes.toString());
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <video
        src={video}
        controls
        className="w-100 rounded-top"
        style={{ maxHeight: "220px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>

        {/* Tags */}
        <div className="d-flex gap-2 flex-wrap mb-3">
          {tags.map((tag, index) => (
            <span key={index} className={`badge ${tag.variant}`}>
              {tag.label}
            </span>
          ))}
        </div>

        {/* Like social minimal */}
        <div className="mb-3">
          <button
            onClick={handleLike}
            className={`like-btn ${alreadyLiked ? "liked" : ""}`}
          >
            <span className="heart">
              {alreadyLiked ? "❤️" : "🤍"}
            </span>
            <span className="ms-1">{likes}</span>
          </button>
        </div>

        {/* Botones */}
        <div className="mt-auto d-flex gap-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm"
            >
              📄 Descargar PDF
            </a>
          )}

          {docLink && (
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
      </div>
    </div>
  );
}

export default ShortCard;