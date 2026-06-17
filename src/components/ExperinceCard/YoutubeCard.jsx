import { Card, Button } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";

const YoutubeCard = ({ title, description, link }) => {
  return (
    <Card className="shadow-lg h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{title}</Card.Title>
        <Card.Text className="text-muted mb-3">{description}</Card.Text>

        <Button
          variant="danger"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto align-self-start"
        >
          Ver en YouTube <FaYoutube className="ms-1" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default YoutubeCard;