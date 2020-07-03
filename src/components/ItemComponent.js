import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemComponent = (props) => {
  const { name, category, description, picture, item_quantity } = props.item;
  console.log(props.item.id)

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
          <Card.Link href="#">
            <Button variant="primary">Edit</Button>
          </Card.Link>
          <Card.Link href="#">
            <Button variant="danger">Delete</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemComponent;
