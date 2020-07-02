import React, {useState, useEffect} from 'react'
import ItemComponent from '../components/ItemComponent'

const ItemsContainer = ({match}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:3000/items");
      response = await response.json();
      setItems(response);
    }

    fetchMyAPI();
  }, []);
  
  const filteredItems = items.filter(item => item.category === match.params.id)

  return (
    <div>
      {filteredItems.map((item, id) => (
        <ItemComponent item={item} key={id} />
      ))}
    </div>
  );
}

export default ItemsContainer
