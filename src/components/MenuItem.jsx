import React from 'react';

const MenuItem = ({ item, onAddToOrder }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">{item.price} VND</p>
      <button onClick={() => onAddToOrder(item)}>Thêm vào đơn hàng</button>
    </div>
  );
};

export default MenuItem;