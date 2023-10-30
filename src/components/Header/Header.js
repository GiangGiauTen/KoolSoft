// Header.js
import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './Header.css';
import { Button, Flex } from 'antd';
function Header() {
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
          <Button type="text" className="header-button">
            TRANG CHỦ
          </Button>
          <Button type="text" className="header-button">
            KHÓA HỌC
          </Button>
          <Button type="text" className="header-button">
            KÍCH HOẠT
          </Button>
          <Button type="text" className="cart-button">
            <ShoppingCartOutlined />
          </Button>
          <Button className="login-logout">Đăng Nhập</Button>
          <Button className="login-logout">Đăng Xuất</Button>
        </div>
      </div>
    </div>
  );
}
export default Header;