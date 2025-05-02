import React, { useState } from 'react';
import Header from './components/Header';
import MenuList from './components/MenuList';
import OrderSummary from './components/OrderSummary';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [order, setOrder] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: 'Cà phê đen',
      description: 'Cà phê đen truyền thống',
      price: 25000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Cà phê sữa',
      description: 'Cà phê với sữa đặc',
      price: 30000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Trà đào',
      description: 'Trà đào cam sả thơm ngon',
      price: 35000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Bánh mì sandwich',
      description: 'Bánh mì kẹp thịt và rau',
      price: 40000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Bánh ngọt',
      description: 'Bánh ngọt tự làm',
      price: 35000,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Nước ép cam',
      description: 'Nước ép cam tươi',
      price: 40000,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const removeFromOrder = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const submitOrder = () => {
    alert(`Đơn hàng của bạn đã được gửi! Tổng cộng: ${order.reduce((sum, item) => sum + item.price, 0)} VND`);
    setOrder([]);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <MenuList menuItems={menuItems} onAddToOrder={addToOrder} />
        <OrderSummary 
          order={order} 
          onRemoveItem={removeFromOrder} 
          onSubmitOrder={submitOrder} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;