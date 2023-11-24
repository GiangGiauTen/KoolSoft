import React from 'react';
import './Count.css';
import ItemCount from './ItemCount/ItemCount';
function Count() {
  return (
    <div className="count-container">
      <h2 className="count-text">
        ÔN THI SINH VIÊN - THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN
      </h2>
      <div className="count-list">
        <ItemCount imgSrc="/icon/nam.svg" numberCount="9+" textCount="Năm" />
        <ItemCount
          imgSrc="/icon/truong.svg"
          numberCount="20+"
          textCount="Trường"
        />
        <ItemCount
          imgSrc="/icon/khoa-luyen.svg"
          numberCount="400"
          textCount="Khóa Học"
        />
        <ItemCount
          imgSrc="/icon/hocvien.svg"
          numberCount="200k+"
          textCount="Học Viên"
        />
        <ItemCount
          imgSrc="/icon/fireStar.svg"
          numberCount="25+"
          textCount="Đánh Giá"
        />
        <ItemCount
          imgSrc="/icon/hai-long.svg"
          numberCount="99%"
          textCount="Qua Môn"
        />
      </div>
    </div>
  );
}

export default Count;
