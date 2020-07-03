import React, {useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap";
import ItemComponent from './ItemComponent';

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3000/items");
      response = await response.json();
      setItems(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="container">
      <Row xs={1} md={3}>
        {items.map((item, id) => (
          <Col>
            <ItemComponent item={item} key={id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DisplayAllItems
