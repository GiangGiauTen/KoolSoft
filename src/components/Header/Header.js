// Header.js
import React, { useState } from 'react';
import './Header.css';
import { Button, Flex } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../Cart/CartSlice';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
function Header() {
  const cart = useSelector(selectCartItems);
  const items = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          <Button type="text" className="header-button">
            TRANG CHỦ
          </Button>
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <div className="header-button-has-list">
          <Button type="text" className="header-button">
            KHÓA HỌC
          </Button>
          <div className={'header__school'}>
            <ul className={'header__school-list'}>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC KINH TẾ QUỐC DÂN
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC XÂY DỰNG
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC KINH TẾ - LUẬT HCM
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC THƯƠNG MẠI
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC BÁCH KHOA HÀ NỘI
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC TÔN ĐỨC THẮNG
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC TÀI CHÍNH - MARKETING
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC VINH
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  HỌC VIỆN TÀI CHÍNH
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  HỌC VIỆN NGÂN HÀNG
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC CÔNG ĐOÀN
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  ĐẠI HỌC BÁCH KHOA THÀNH PHỐ HCM
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  HỌC VIỆN NÔNG NGHIỆP VN
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  CHƯƠNG TRÌNH TIẾNG ANH
                </a>
              </li>
              <li className={'header__school-item'}>
                <a href="" className={'header__school-item-name'}>
                  TRƯỜNG KHÁC
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <Button type="text" className="header-button">
          KÍCH HOẠT
        </Button>
      ),
    },
  ];
  const dropdownStyle = {
    position: 'absolute',
    top: 70, // Hiển thị bên dưới header
    left: 0,
    width: '100%', // Chiếm toàn bộ chiều rộng
    zIndex: 1000, // Đảm bảo menu được hiển thị trên cùng
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="left-header">
          <div className="logo-ctn">
            <img src="./logo.png" />
            <div className="page-name">Ôn thi nhàn, Kết quả cao</div>
          </div>
        </div>
        <div className="right-header">
          <div className="nav_pc">
            <Button type="text" className="header-button">
              TRANG CHỦ
            </Button>
            <div className="header-button-has-list">
              <Button type="text" className="header-button">
                KHÓA HỌC
              </Button>
              <div className={'header__school'}>
                <ul className={'header__school-list'}>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC KINH TẾ QUỐC DÂN
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC XÂY DỰNG
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC KINH TẾ THÀNH PHỐ HCM
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC KINH TẾ - LUẬT HCM
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC NGÂN HÀNG THÀNH PHỐ HCM
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC THƯƠNG MẠI
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC BÁCH KHOA HÀ NỘI
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC TÔN ĐỨC THẮNG
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC TÀI CHÍNH - MARKETING
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC VINH
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      HỌC VIỆN TÀI CHÍNH
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      HỌC VIỆN NGÂN HÀNG
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC CÔNG ĐOÀN
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      ĐẠI HỌC BÁCH KHOA THÀNH PHỐ HCM
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      HỌC VIỆN NÔNG NGHIỆP VN
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      CHƯƠNG TRÌNH TIẾNG ANH
                    </a>
                  </li>
                  <li className={'header__school-item'}>
                    <a href="" className={'header__school-item-name'}>
                      TRƯỜNG KHÁC
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Button type="text" className="header-button">
              KÍCH HOẠT
            </Button>
            <Link to={`/cart`}>
              <a href="" type="text" className="cart-button">
                <img
                  className={'header__navbar-item-icon'}
                  src={'/icons/cart.svg'}
                  alt="CartIcon"></img>
                <div
                  className={'num-course-in-cart'}
                  style={{ display: cart.length === 0 ? 'none' : 'block' }}>
                  {cart.length}
                </div>
              </a>
            </Link>
          </div>
          <div className="nav_mobile">
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              overlayStyle={dropdownStyle}>
              <a className="ant-dropdown-link">
                <FontAwesomeIcon icon={faBars} />
              </a>
            </Dropdown>
          </div>
          <button className="login-logout">Đăng Nhập</button>
          <button className="login-logout">Đăng Xuất</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
