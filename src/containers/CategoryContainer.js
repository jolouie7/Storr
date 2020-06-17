import React, { useState, useEffect } from "react";
import CategoryComponent from "../components/CategoryComponent";

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
    <>
      {state.map((category, id) => (
        <CategoryComponent
          key={id}
          name={category.name}
          picture={category.picture}
        />
      ))}
      {/* <div>{JSON.stringify(state)}</div> */}
    </div>
  );
};

export default CategoryContainer;
