import React from 'react';
import './Activity.css';
function Activity() {
  return (
    <div className={'wrapper-activity'}>
      <div className={'container-activity'}>
        <div className={'title-activity'}>
          <h2>Hoạt động tiêu biểu</h2>
          <p>Đây là những sự kiện, hoạt động ghi dấu ấn của OTSV trong năm</p>
          <div className={'list-activity'}>
            <div className={'item-activity'}>
              <div className={'image-activity'}>
                <img
                  className={'image'}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F136923477-1638332088547-neuyouthfestival2021.jpg&w=1920&q=75"></img>
              </div>
              <div className={'info-activity'}>
                <div className={'name-activity'}>
                  Ôn thi sinh viên HL - NEU YOUTH FESTIVAL 2021
                </div>
                <div className={'date-activity'}>Ngày 01/12/2021</div>
              </div>
            </div>
            <div className={'item-activity'}>
              <div className={'image-activity'}>
                <img
                  className={'image'}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F74392169-1655117994323-06.jpg&w=1920&q=75"></img>
              </div>
              <div className={'info-activity'}>
                <div className={'name-activity'}>
                  NHỮNG ĐIỀU CẦN PHẢI BIẾT TRƯỚC KHI VÀO TDTU CỦA CÁC TÂN SINH
                  VIÊN
                </div>
                <div className={'date-activity'}>Ngày 13/06/2022</div>
              </div>
            </div>
            <div className={'item-activity'}>
              <div className={'image-activity'}>
                <img
                  className={'image'}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F686543180-1652239498046-chinhphuca.png&w=1920&q=75"></img>
              </div>
              <div className={'info-activity'}>
                <div className={'name-activity'}>
                  Học bổng HL dành cho sinh viên giỏi các trường đại học
                </div>
                <div className={'date-activity'}>Ngày 11/05/2022</div>
              </div>
            </div>
          </div>
        </div>
        <div className={'show-more'}>
          <button>
            Xem thêm
            {/* <BiChevronRight className={'icon-chev'} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
