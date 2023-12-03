import React from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../Cart/CartSlice';
const cx = classNames.bind(styles);
function Cart() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <strong>{item.courseName}</strong>
                {/* Hiển thị các thông tin khác về khóa học */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
