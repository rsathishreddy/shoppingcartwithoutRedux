import React from "react";

const products = props => {
  const items = props.items.map(item => {
    return (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <button onClick={e => props.handlerAddToCart(e, item)}>
          Add to cart{" "}
        </button>
      </div>
    );
  });
  return <div>{items}</div>;
};

export default products;
