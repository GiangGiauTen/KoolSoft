import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { StarFilled, CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectCartItems } from '../../Redux/Cart/CartSlice.js';
import {
  selectPayItems,
  toggleSelectedItems,
} from '../../Redux/Pay/PaySlice.js';
const cx = classNames.bind(styles);

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const payItems = useSelector(selectPayItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = course => {
    dispatch(removeFromCart(course));
  };
  const handleCheckboxChange = index => {
    dispatch(toggleSelectedItems(index));
  };

  const handleSelectAll = () => {
    const allIndices = cartItems.map((_, index) => index);
    allIndices.forEach(index => {
      dispatch(toggleSelectedItems(index));
    });
  };
  const calculateTotalPrice = () => {
    return payItems.reduce(
      (total, index) => total + parseFloat(cartItems[index].price),
      0,
    );
  };

  return (
    <div>
      <Header />
      <div className={cx('path-link-background')}>
        <div className={cx('css-1ll7j1d')}>
          <nav className={cx('nav-container')}>
            <ol class={cx('css-nhb8h9')}>
              <li class={cx('MuiBreadcrumbs-li')}>
                <div class={cx('breadcrumb-item')}>Trang chủ</div>
              </li>
              <li aria-hidden="true" class={cx('css-3mf706')}>
                ›
              </li>
              <li class={cx('MuiBreadcrumbs-li')}>
                <div class={cx('breadcrumb-last-item')}>Giỏ hàng</div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className={cx('item-cart-panel')}>
        {cartItems.length === 0 ? (
          <div class={cx('cart-page')}>
            <div class={cx('empty-cart-container')}>
              <div>
                <div class={cx('empty-cart-icon')}>
                  <svg
                    class={cx('css-vubbuv')}
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="AddShoppingCartIcon">
                    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path>
                  </svg>
                </div>
                <div class={cx('empty-cart-text')}>
                  Bạn chưa có khoá học nào trong giỏ hàng
                </div>
              </div>
              <div class={cx('empty-cart-div')}>
                <a class={cx('empty-cart-button')}>Tiếp tục mua sắm</a>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx('item-cart-container')}>
            <div className={cx('item-cart-list')}>
              <div>
                {cartItems.map((item, index) => (
                  <div className={cx('item-course-in-cart')} key={index}>
                    <div className={cx('check-box')}>
                      <Checkbox
                        className={cx('cart-check-box')}
                        onChange={() => handleCheckboxChange(index)}
                        checked={payItems.includes(index)}></Checkbox>
                    </div>
                    <div className={cx('item-course-box')}>
                      <div className={cx('left-course')}>
                        <div className={cx('image')}>
                          <img src={item.imgSrc} alt="Course Image" />
                        </div>
                      </div>
                      <div className={cx('right-course')}>
                        <div className={cx('inf-course')}>
                          <div className={cx('inf-top')}>
                            <div className={cx('title-course')}>
                              {item.courseName}
                            </div>
                            <div className={cx('rate-course')}>
                              <span>(0)</span>
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                              <StarFilled />
                            </div>
                            <div className={cx('short-decription')}>
                              Khóa học Toán cao cấp 2 gồm các kiến thức trọng
                              tâm các chương, bài tập vận dụng và các bài kiểm
                              tra giữa kì và cuối kì có đáp án chi tiết.
                            </div>
                          </div>
                          <div>Kết thúc:</div>
                        </div>
                        <div class={cx('price-item')}>
                          <div class={cx('cost-real')}>{item.price}VND</div>
                          <div class={cx('remove-course')}>
                            <CloseOutlined
                              onClick={() => handleRemoveFromCart(item)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx('pay-course-container')}>
              <div className={cx('pay-course')}>
                <label class={cx('thong-tin-don-hang')}>
                  Thông tin đơn hàng
                </label>
                <div className={cx('item-price', 'tam-tinh')}>
                  <span>Tạm tính</span>
                  <div>{calculateTotalPrice()} ,000VND</div>
                </div>
                <div className={cx('item-price', 'tong-tien')}>
                  <strong>Tổng Tiền</strong>
                  <div>{calculateTotalPrice()} ,000VND</div>
                </div>
                <Button
                  className={cx('btn-thanh-toan')}
                  onClick={() => {
                    console.log(cartItems);
                  }}>
                  THANH TOÁN
                  <span class={cx('.css-w0pj6f ')}></span>
                </Button>
              </div>
              <div className={cx('select-all')}>
                <Button className={cx('btn-all')} onClick={handleSelectAll}>
                  {payItems.length == cartItems
                    ? 'Bỏ chọn tất cả'
                    : 'Chọn tất cả'}
                  <span class={cx('.css-w0pj6f ')}></span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
