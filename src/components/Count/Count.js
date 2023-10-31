import React from 'react';
import './Count.css';
function Count() {
  return (
    <div className="count-container">
      <h2 className="count-text">
        ÔN THI SINH VIÊN - THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN
      </h2>
      <div className="count-list">
        <div className="count-list-item">
          <div className="item-count">
            <div className="image-count">
              <img src="/icon/nam.svg" alt="Nam Icon" />
            </div>
            <div className="number-count">9+</div>
            <div className="text-count">Năm</div>
          </div>
        </div>
        <div className="count-list-item">
          <div className="item-count">
            <div className="image-count">
              <img src="/icon/truong.svg" alt="Truong Icon" />
            </div>
            <div className="number-count">20+</div>
            <div className="text-count">Trường</div>
          </div>
        </div>{' '}
        <div className="count-list-item">
          <div className="item-count">
            <div className="image-count">
              <img src="/icon/khoa-luyen.svg" alt="Khoa Luyen Icon" />
            </div>
            <div className="number-count">400+</div>
            <div className="text-count">Khóa Học</div>
          </div>
        </div>{' '}
        <div className="count-list-item">
          <div className="item-count">
            <div className="image-count">
              <img src="/icon/hocvien.svg" alt="Hoc Vien Icon" />
            </div>
            <div className="number-count">200k+</div>
            <div className="text-count">Học Viên</div>
          </div>
        </div>
        <div className="count-list-item">
          <div className="item-count">
            <div className="image-count">
              <img src="/icon/fireStar.svg" alt="Star Icon" />
            </div>
            <div className="number-count">25+</div>
            <div className="text-count">Đánh Giá</div>
          </div>
        </div>
        <div className="count-list-item">
          <div className="item-count">
            <div className="image-count">
              <img src="/icon/hai-long.svg" alt="Hai Long Icon" />
            </div>
            <div className="number-count">99%</div>
            <div className="text-count">Qua Môn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
