import React, { useState, useEffect } from "react";
import CategoryComponent from "../components/CategoryComponent";
import { Row, Col } from "react-bootstrap";

const CategoryContainer = ({history, match}) => {
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
              id={id}
              name={category.name}
              picture={category.picture}
              history={history}
              match={match}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryContainer;
