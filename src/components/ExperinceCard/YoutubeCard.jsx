import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";

const YoutubeCard = ({ title, description, link }) => {
  return (
    <Card className="shadow-lg h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="danger" href={link} target="_blank">
          Ver en YouTube <FaYoutube />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default YoutubeCard;