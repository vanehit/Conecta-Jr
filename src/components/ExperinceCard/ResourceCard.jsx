import { Card, Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

const ResourceCard = ({ title, description, image, link, links }) => {
  const hasLinks = Boolean(link || links?.length);

  return (
    <Card className="resource-card shadow-lg h-100">
      {image && (
        <Card.Img variant="top" src={image} alt={title} />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{title}</Card.Title>
        <Card.Text className="text-muted mb-3">{description}</Card.Text>

        {hasLinks && (
          <div className="d-flex flex-wrap gap-2 mt-auto">
            {link && (
              <Button
                variant="primary"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio <FaExternalLinkAlt className="ms-1" />
              </Button>
            )}

            {links?.map((item) => (
              <Button
                key={item.name}
                variant="secondary"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name} <FaExternalLinkAlt className="ms-1" />
              </Button>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;