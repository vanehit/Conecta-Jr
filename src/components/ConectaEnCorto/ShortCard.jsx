function ShortCard({
  title,
  description,
  video,
  tags,
  link,
  docLink
}) {
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

        <div className="d-flex gap-2 flex-wrap mb-3">
          {tags.map((tag, index) => (
            <span key={index} className={`badge ${tag.variant}`}>
              {tag.label}
            </span>
          ))}
        </div>

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
