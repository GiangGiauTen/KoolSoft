import React from 'react';
import './WhyChoose.css';
function WhyChoose() {
  return (
    <div className="why-choose-container">
      <div className="sub-title-why-choose">
        <h2 className="sub-title">VÌ SAO HƠN 200,000 BẠN CHỌN</h2>
        <h5>ONTHISINHVIEN.COM</h5>
        <p className="bi-quyet">
          Bí quyết chinh phục điểm A các môn đại cương và chuyên ngành
        </p>
      </div>
      <div className="list-item-why-choose">
        <div className="item-why-choose">
          <div>
            <img src="/icon/icon1-why-choose.svg" />
          </div>
          <h3>Em không biết môn này học cái gì?</h3>
          <span>
            Đừng lo, Khóa luyện sẽ "Review đề thi" lại cho em, đề thi có bao
            nhiêu câu, rơi vào những phần kiến thức nào,...
          </span>
        </div>
        <div className="item-why-choose">
          <div>
            <img src="/icon/icon2-why-choose.svg" />
          </div>
          <h3>Em không biết bắt đầu học từ đâu?</h3>
          <span>
            Đừng lo, Khóa luyện luôn tạo ra "Lộ trình học tập" để học từ đầu đến
            cuối, biết mình đang học đến đâu, cần học thêm những gì.
          </span>
        </div>
        <div className="item-why-choose">
          <div>
            <img src="/icon/icon3-why-choose.svg" />
          </div>
          <h3>Em không biết hỏi bài ai?</h3>
          <span>
            Đừng lo, Khóa luyện có một "Group chat riêng" để hỗ trợ em, giúp em
            trả lời các câu hỏi, giải đáp các thắc mắc về môn học nhé.
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
