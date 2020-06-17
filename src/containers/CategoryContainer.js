import React, { useState, useEffect } from "react";
import CategoryComponent from "../components/CategoryComponent";
import { Container, Row, Col, CardImg } from "react-bootstrap";

const CategoryContainer = (props) => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3000/categories");
      response = await response.json();
      setstate(response);
    }

    fetchMyAPI();
  }, []);

  // map through the categories object
  return (
    <div className="container">
      <Row xs={1} md={3}>
        {state.map((category, id) => (
          <Col>
            <CategoryComponent
              key={id}
              name={category.name}
              picture={category.picture}
            />
          </Col>
        ))}
        {/* <div>{JSON.stringify(state)}</div> */}
      </Row>
    </div>
  );
};

export default CategoryContainer;
