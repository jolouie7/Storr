import React from "react";
import {Button, Card} from "react-bootstrap";


const CategoryComponent = (props) => {
  const { name, picture } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryComponent;
