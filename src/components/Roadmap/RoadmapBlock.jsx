import { Card, Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

function RoadmapBlock({ block, completed, onComplete }) {
  return (
    <Card className="mb-4 shadow-sm rounded-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title>{block.title}</Card.Title>
            <Card.Text className="text-muted">
              {block.description}
            </Card.Text>
          </div>

          {completed && <Badge bg="success">Completado</Badge>}
        </div>

        <ul className="mt-3">
          {block.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        {!completed && (
          <Button
            variant="outline-success"
            className="mt-3"
            onClick={onComplete}
          >
            Marcar como completado
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

RoadmapBlock.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default RoadmapBlock;
