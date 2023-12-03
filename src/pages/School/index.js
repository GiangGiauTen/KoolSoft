import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Course from './components/Course/Course';
import '../../components/Feedback/Feedback.css';
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './School.module.scss';
import Community from './components/Community/Community';
import ItemCount from '../../components/Count/ItemCount/ItemCount';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Feedback from '../../components/Feedback/Feedback';
const cx = classNames.bind(styles);
function School() {
  const [coursesToShow, setCoursesToShow] = useState(8);

  const allCourses = require('../School/components/Course/Course.json');

  const toggleShowMore = () => {
    setCoursesToShow(coursesToShow + 8);
  };
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className={cx('school-wrapper')}>
      <Header />
      <div className={cx('container-center')}>
        <div className={cx('school-container')}>
          <div className={cx('school-banner-school')}>
            <img
              className={cx('image-banner')}
              src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fbanner%2Fneu.jpg&w=1920&q=75"
              alt="ImageBanner"></img>
          </div>
          <div className={cx('school-category-course')}>
            <div className={cx('card-header-category')}>
              <div className={cx('card-name-school')}>
                <img
                  className={cx('icon-tag')}
                  src="https://onthisinhvien.com/images/icon/otsv/icon-tag-school.svg"
                  alt="IconTag"></img>
                <div className={cx('school-name')}>
                  Đại học Kinh tế Quốc dân
                </div>
              </div>
              <div className={cx('card-search-course')}>
                <button className={cx('btn-combo')}>Hot combo</button>
                <div className={cx('form-search')}>
                  <input
                    className={cx('input-search')}
                    placeholder="Tìm kiếm khóa học..."></input>
                  <div>
                    <FontAwesomeIcon
                      className={cx('button-search')}
                      icon={faMagnifyingGlass}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('card-block-category')}>
              <span className={cx('card-name-category')}>
                Môn đại cương (68 Khoá)
              </span>
              <div className={cx('list-course')}>
                {allCourses.slice(0, coursesToShow).map((course, index) => (
                  <Course
                    key={index}
                    imgSrc={course.imgSrc}
                    courseName={course.courseName}
                    description={course.description}
                    reviewCount={course.reviewCount}
                    price={course.price}
                  />
                ))}
              </div>
              {coursesToShow < allCourses.length && (
                <div className={cx('show-more')}>
                  <button onClick={toggleShowMore}>
                    Xem thêm
                    <DownOutlined className={cx('icon-chev')} />
                  </button>
                </div>
              )}
            </div>
            <div className={cx('card-block-category')}>
              <span className={cx('name-category')}>
                MÔN CHUYÊN NGÀNH (87 KHOÁ)
              </span>
              <div className={cx('list-course')}>
                {allCourses.slice(0, coursesToShow).map((course, index) => (
                  <Course
                    key={index}
                    imgSrc={course.imgSrc}
                    courseName={course.courseName}
                    description={course.description}
                    reviewCount={course.reviewCount}
                    price={course.price}
                  />
                ))}
              </div>
              {coursesToShow < allCourses.length && (
                <div className={cx('show-more')}>
                  <button onClick={toggleShowMore}>
                    Xem thêm
                    <DownOutlined className={cx('icon-chev')} />
                  </button>
                </div>
              )}
            </div>
            <div className={cx('card-block-category')}>
              <span class={'name-category'}>MÔN HỌC AEP (40 KHOÁ)</span>
              <div className={cx('list-course')}>
                {allCourses.slice(0, coursesToShow).map((course, index) => (
                  <Course
                    key={index}
                    imgSrc={course.imgSrc}
                    courseName={course.courseName}
                    description={course.description}
                    reviewCount={course.reviewCount}
                    price={course.price}
                  />
                ))}
              </div>
              {coursesToShow < allCourses.length && (
                <div className={cx('show-more')}>
                  <button onClick={toggleShowMore}>
                    Xem thêm
                    <DownOutlined className={cx('icon-chev')} />
                  </button>
                </div>
              )}
            </div>
            <div className={cx('card-block-category')}>
              <span className={cx('name-category')}>
                NGOẠI NGỮ - TIN HỌC - CĐR (0 KHOÁ)
              </span>
            </div>
          </div>

          <div className={'slide-feedback'}>
            <Feedback />
          </div>

          <div className={cx('achive')}>
            <div className={cx('slogan')}>
              ÔN THI SINH VIÊN <br></br> THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN
            </div>
            <div className={cx('static-wrapper')}>
              <ItemCount
                imgSrc="/icon/khoa-luyen.svg"
                numberCount="150"
                textCount="Khóa Luyện"
              />
              <ItemCount
                imgSrc="/icon/hocvien.svg"
                numberCount="80"
                textCount="Khá Giỏi"
              />
              <ItemCount
                imgSrc="/icon/nam.svg"
                numberCount="9+"
                textCount="Năm"
              />
              <ItemCount
                imgSrc="/icon/nam.svg"
                numberCount="9+"
                textCount="Năm"
              />
              <ItemCount
                imgSrc="/icon/nam.svg"
                numberCount="9+"
                textCount="Năm"
              />
            </div>
          </div>
          <div className={cx('communities')}>
            <h2>Cộng đồng</h2>
            <div className={cx('list-item-communities')}>
              <Community
                nameCm="group Góc ôn thi NEU Shares"
                numMem="30.000"
                rate=""
              />
              <Community
                nameCm="FANPAGE ÔN THI SINH VIÊN HL ĐH KINH TẾ QUỐC DÂN"
                numMem="12.000"
                rate="65"
              />
              <Community
                nameCm="group Góc review nhà trọ Bách Kinh Xây"
                numMem="80.0000"
                rate="****"
              />
              <Community
                nameCm="Góc ôn thi AEP - NEU Shares ✅"
                numMem="3100"
                rate="****"
              />
              <Community
                nameCm="Góc tuyển dụng NEU ✅"
                numMem="9000"
                rate="****"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default School;
