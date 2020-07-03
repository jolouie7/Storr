import React from "react";
import {Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";


const CategoryComponent = ({ name, picture, history, match }) => {


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={`/categories/${name}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryComponent;
