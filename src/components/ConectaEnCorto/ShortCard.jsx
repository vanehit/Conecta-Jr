import { Card, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

function ShortCard({ title, text, tags }) {
  return (
    <Card className="shadow-lg h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>

        <div className="mb-3">
          {tags.map((tag, index) => (
            <span key={index} className={`badge ${tag.variant} me-2`}>
              {tag.label}
            </span>
          ))}
        </div>

        <Button variant="dark">
          Ver en corto - Próximamente <FaPlay className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShortCard;
