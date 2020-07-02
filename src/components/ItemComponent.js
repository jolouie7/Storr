import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemComponent = (props) => {
  const { name, category, description, picture, item_quantity } = props.item;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/logo192.png" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{item_quantity}</Card.Text>
          <Card.Text>{picture}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemComponent;
