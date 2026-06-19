import { Card, Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";

function RoadmapBlock({ block, completed, onComplete, onPractice }) {
  return (
    <Card className="mb-4 shadow-sm rounded-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title>{block.title}</Card.Title>
            <Card.Text className="text-muted">{block.description}</Card.Text>
          </div>

          {completed && <Badge bg="success">Completado</Badge>}
        </div>

        <ul className="mt-3">
          {block.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        <div className="mt-3 d-flex flex-wrap gap-2">
          {block.practiceEnabled && (
            <Button variant="success" onClick={() => onPractice(block)}>
              {block.practiceLabel || "Validar este bloque"}
            </Button>
          )}

          {!completed && (
            <Button variant="outline-success" onClick={onComplete}>
              Marcar como completado
            </Button>
          )}
        </div>
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
    practiceEnabled: PropTypes.bool,
    practiceMode: PropTypes.string,
    practiceStacks: PropTypes.arrayOf(PropTypes.string),
    practiceLabel: PropTypes.string,
  }).isRequired,
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onPractice: PropTypes.func.isRequired,
};

export default RoadmapBlock;
