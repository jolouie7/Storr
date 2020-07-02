import React, {useState, useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import ItemsContainer from "../containers/ItemsContainer";
import { Link } from "react-router-dom";


const CategoryComponent = ({ name, picture, history, match }) => {

  // const handleClick = (e) => {
  //   const new_items = items.filter(item => item.category_id === id)
  //   <ItemsContainer new_items={new_items}/>
  //   // new_items.map((item, id) => <ItemsContainer item={item} key={id} />)
  // }

  return (
    <div>
      {/* <pre>{JSON.stringify(items, undefined, 2)}</pre> */}
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
