import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../Cart/CartSlice';
import { StarFilled, CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const cx = classNames.bind(styles);

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = index => {
    const updatedSelectedItems = [...selectedItems];
    const selectedIndex = updatedSelectedItems.indexOf(index);

    if (selectedIndex === -1) {
      updatedSelectedItems.push(index);
    } else {
      updatedSelectedItems.splice(selectedIndex, 1);
    }

    setSelectedItems(updatedSelectedItems);
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce(
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
        <div className={cx('item-cart-container')}>
          <div className={cx('item-cart-list')}>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div className={cx('item-course-in-cart')} key={index}>
                    <div className={cx('check-box')}>
                      <Checkbox
                        className={cx('cart-check-box')}
                        onChange={() => handleCheckboxChange(index)}
                        checked={selectedItems.includes(index)}></Checkbox>
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
                            <CloseOutlined />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={cx('pay-course-container')}>
            <div className={cx('pay-course')}>
              <label class={cx('thong-tin-don-hang')}>Thông tin đơn hàng</label>
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
              <Button className={cx('btn-all')}>
                Chọn tất cả
                <span class={cx('.css-w0pj6f ')}></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
