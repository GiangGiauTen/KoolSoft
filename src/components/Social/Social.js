import React from 'react';
import './Social.css';
import { EyeOutlined } from '@ant-design/icons';
function Social() {
  return (
    <div className="social-container">
      <div className="soical-box">
        <div className="title">
          OTSV TRÊN CÁC <span>NỀN TẢNG</span> MẠNG XÃ HỘI
        </div>
        <div className="decription">
          Nơi chia sẻ kiến thức, kỹ năng bổ ích dành cho sinh viên
        </div>
        <div className="social-app">
          <div className="youtube">
            <div className="item">
              <div className="image">
                <img src="/icon/youtube.png" />
              </div>
              <div className="number">
                <EyeOutlined />
                <span style={{ marginLeft: 10, fontWeight: 600 }}>
                  2.772.063
                </span>
              </div>
              <a href="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn">
                <div className="subcriber">
                  <div className="text">subscriber</div>
                </div>
              </a>
            </div>
          </div>
          <div className="tiktok">
            <div className="item">
              <div className="image">
                <img src="/icon/tiktok.png" />
              </div>
              <div className="number">
                <EyeOutlined />
                <span style={{ marginLeft: 10, fontWeight: 600 }}>50,865</span>
              </div>
              <a href="https://www.youtube.com/c/%C3%94nthiSinhvi%C3%AAn">
                <div className="subcriber">
                  <div className="text">follow</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
