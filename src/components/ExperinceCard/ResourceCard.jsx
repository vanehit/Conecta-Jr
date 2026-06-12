import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

const ResourceCard = ({ title, description, image, link, links }) => {
  return (
    <Card className="shadow-lg h-100">
      {image && <Card.Img variant="top" src={image} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        
        {/* Caso 1: Un solo enlace */}
        {link && (
          <Button variant="primary" href={link} target="_blank">
            Ir al sitio <FaExternalLinkAlt />
          </Button>
        )}
        
        {/* Caso 2: Múltiples enlaces */}
        {links && links.map((l, i) => (
          <Button key={i} variant="secondary" href={l.url} target="_blank" className="ms-2">
            {l.name} <FaExternalLinkAlt />
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;