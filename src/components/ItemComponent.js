import React from 'react'

const ItemComponent = (props) => {
  const { name, category, description, picture, item_quantity } = props.item

  return (
    <div>
      <p>{name}</p>
      <p>{category}</p>
      <p>{description}</p>
      <p>{picture}</p>
      <p>{item_quantity}</p>
    </div>
  )
}

export default ItemComponent
