import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ menuItems, onAddToOrder }) => {
  return (
    <div className="menu-list">
      <h2>Menu</h2>
      <div className="items-container">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;