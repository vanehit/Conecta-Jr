function ShortCard({
  id,
  title,
  description,
  video,
  tags,
  link,
  docLink,
  locked
}) {
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

        {/* Tags */}
        <div className="d-flex gap-2 flex-wrap mb-3">
          {tags && tags.map((tag, index) => (
            <span key={index} className={`badge ${tag.variant}`}>
              {tag.label}
            </span>
          ))}
        </div>

        {/* Botones de acción */}
        <div className="mt-auto d-flex gap-2">
          {link && !locked && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm"
            >
              {link.toLowerCase().endsWith(".pdf") ? "📄 Descargar PDF" : "🖼️ Ver Guía Visual"}
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

        {/* Aviso de bloqueo */}
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