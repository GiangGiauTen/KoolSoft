import React from 'react';
import styles from './Pay.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { selectPayItems } from '../../Redux/Pay/PaySlice.js';
import { Input } from 'antd';
const cx = classNames.bind(styles);
function Pay() {
  const payItems = useSelector(selectPayItems);
  return (
    <div>
      <Header />
      <div class={cx('layout-body')}>
        <div class={cx('checkout-page')}>
          <div class={cx('css-1ll7j1d')}>
            <div class={cx('css-1d3bbye')}>
              <div class={cx('css-kq6omu')}></div>
              <div class={cx('css-lef403')}>
                <div>
                  <div class={cx('checkout-page-infor')}>
                    1.Thông tin đơn hàng
                  </div>
                  <div class={cx('checkout-page-code')}>
                    <span>Mã đơn hàng: </span>
                    <span style={{ color: 'red', marginLeft: '5px' }}>
                      NCOJYR
                    </span>
                  </div>
                  <div class={cx('checkout-page-course')}>
                    <div class={cx('number-course')}>
                      {payItems.length} khoá học
                    </div>
                    <div>
                      {payItems.map((item, index) => (
                        <div class={cx('item-buy-course')}>
                          <div>
                            <div class={cx('name-course')}>
                              {item.courseName}
                            </div>
                            <div class={cx('price-course_')}>150,000 VND</div>
                          </div>
                          <div>
                            <button class={cx('remove-course')}>
                              <svg
                                class={cx('css-1k33q06')}
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="CloseIcon">
                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div class={cx('checkout-temporary')}>
                      <div class={cx('total-price-temp')}>
                        <div>Tạm tính</div>
                        <div>150,000 VND</div>
                      </div>
                      <div class={cx('checkout-discount')}>
                        <p
                          style={{
                            fontWeight: 'bold',
                            margin: '16px 0px 16px 0',
                          }}>
                          {' '}
                          Mã Khuyến mại
                        </p>
                        <div>
                          <div class={cx('css-i44wyl')}>
                            <Input placeholder="Nhập mã khuyến mãi" />
                          </div>
                          <button>Áp dụng</button>
                        </div>
                      </div>
                      <div class={cx('total-price')}>
                        <div>Tổng cộng</div>
                        <div>150,000 VND</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={cx('checkout-method')}>
                  <div>2. Chọn phương thức thanh toán</div>
                  <div class={cx('css-hezj9')}>
                    <div class={cx('css-2m01yc')}>
                      <div class={cx('checkout-method-item')}>
                        <span class={cx('css-zun73v')}>
                          <input
                            class={cx('css-1m9pwf3')}
                            type="checkbox"
                            data-indeterminate="false"
                          />
                          <svg
                            class={cx('css-vubbuv')}
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CheckBoxOutlineBlankIcon">
                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                          </svg>
                          <span class={cx('css-w0pj6f')}></span>
                        </span>
                        Thanh toán qua ví Momo
                      </div>
                    </div>
                    <div class={cx('css-2m01yc')}>
                      <div class={cx('checkout-method-item')}>
                        <span class={cx('css-zun73v')}>
                          <input
                            class={cx('css-1m9pwf3')}
                            type="checkbox"
                            data-indeterminate="false"
                          />
                          <svg
                            class={cx('css-vubbuv')}
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CheckBoxIcon">
                            <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                          </svg>
                          <span class={cx('css-w0pj6f')}></span>
                        </span>
                        Thanh toán qua ngân hàng
                      </div>
                    </div>
                  </div>
                  <div class={cx('collapse-content')}>
                    {/* <div class={cx('css-a0y2e3')}>
                    <div class={cx('css-hboir5')}>
                      <div class={cx('css-8atqhb')}>
                        Sau khi điền thông tin mua hàng và bấm hoàn tất đơn
                        hàng, hệ thống sẽ hiển thị mã QR kèm hướng dẫn. Bạn cần
                        tải và cài ứng dụng Momo trên điện thoại và sử dụng để
                        quét mã QR trên để thanh toán. Momo-Phương thức thanh
                        toán nhanh, tiện lợi, an toàn được cấp phép và quản lý
                        bởi NH Nhà Nước Việt Nam
                        <strong>
                          Khi thanh toán thành công, mã code sẽ được gửi về
                          email bên dưới và trang
                        </strong>{' '}
                        <a href="/lich-su-giao-dich">Lịch sử giao dịch</a> của
                        bạn
                      </div>
                    </div>
                  </div>
                  <div class={cx('css-a0y2e3')}>
                    <div class={cx('css-hboir5')}>
                      <div class={cx('css-8atqhb')}>
                        Sau khi xác nhận tiền vào tài khoản, chúng tôi sẽ liên
                        hệ với bạn để cấp code đăng nhập.
                      </div>
                    </div>
                  </div> */}
                    <div class={cx('css-c4sutr')}>
                      <div class={cx('css-hboir5')}>
                        <div class={cx('css-8atqhb')}>
                          Sau khi điền thông tin mua hàng và bấm hoàn tất đơn
                          hàng, hệ thống sẽ hiển thị mã QR kèm hướng dẫn. Bạn
                          cần sử dụng ứng dụng ngân hàng trên điện thoại và sử
                          dụng để quét mã QR trên để thanh toán. VNPAY-Phương
                          thức thanh toán nhanh, tiện lợi, an toàn được cấp phép
                          và quản lý bởi NH Nhà Nước Việt Nam
                          <br />
                          <strong>
                            Khi thanh toán thành công, mã code sẽ được gửi về
                            email bên dưới và trang
                          </strong>
                          <a href="/lich-su-giao-dich">Lịch sử giao dịch</a> của
                          bạn
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class={cx('text-check-buy-course')}>
                    - Kiểm tra lại thông tin đơn hàng trước khi nhấn{' '}
                    <strong>tiếp tục</strong>
                    <br></br>- Sau khi thanh toán thành công, Bạn vào trang lịch
                    sử giao dịch để kiểm tra đơn hàng hoặc kiểm tra email .
                  </div>
                  <div class={cx('buy-course_')}>
                    <button>Quay lại</button>
                    <button
                      onClick={() => {
                        console.log(payItems);
                      }}>
                      Tiếp tục
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class={cx('css-kq6omu')}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pay;
