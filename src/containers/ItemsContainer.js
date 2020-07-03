import React, { useState, useEffect } from "react";
import ItemComponent from "../components/ItemComponent";
import { Row, Col } from "react-bootstrap";

const ItemsContainer = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3000/items");
      response = await response.json();
      setItems(response);
    }

    fetchMyAPI();
  }, []);

  const filteredItems = items.filter(
    (item) => item.category === match.params.id
  );

  return (
    <div className="container">
      <Row xs={1} md={3}>
        {filteredItems.map((item, id) => (
          <Col>
            <ItemComponent item={item} key={id}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemsContainer;
