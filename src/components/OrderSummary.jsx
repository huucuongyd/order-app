import React from 'react';

const OrderSummary = ({ order, onRemoveItem, onSubmitOrder }) => {
  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      <h2>Đơn hàng của bạn</h2>
      {order.length === 0 ? (
        <p>Chưa có món nào trong đơn hàng</p>
      ) : (
        <>
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} VND
                <button onClick={() => onRemoveItem(index)}>Xóa</button>
              </li>
            ))}
          </ul>
          <p className="total">Tổng cộng: {total} VND</p>
          <button onClick={onSubmitOrder} className="submit-order">
            Đặt hàng
          </button>
        </>
      )}
    </div>
  );
};

export default OrderSummary;