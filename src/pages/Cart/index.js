import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ItemCourse from './components/ItemCourse/ItemCourse';

import './Cart.css';
import { BiChevronDown } from 'react-icons/bi';

import ItemCommunity from './components/ItemCommunity/ItemCommunity';

// import CourseIcon from '/icon/khoa-luyen.svg';
// import StdIcon from '../../assets/images/icons/hocvien.svg';
// import OnePeople from '../../assets/images/icons/kha-gioi.svg';
// import Message from '../../assets/images/icons/feebb.svg';
import ItemCount from '../../components/Count/ItemCount/ItemCount';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Feedback from '../../components/Feedback/Feedback';

function Cart() {
  const [coursesToShow, setCoursesToShow] = useState(8);

  const allCourses = [
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F317789103-1652535269607-phapluatdaicuong.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS PHÁP LUẬT ĐẠI CƯƠNG',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 721,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F417326640-1652533277395-kinhtevimo1.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS KINH TẾ VI MÔ 1',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 658,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F108412384-1666003901169-quantrikinhdoanh525350px.png&w=1920&q=75',
      courseName: 'NEU TOÁN CHO CÁC NHÀ KINH TẾ 2023',
      description:
        '#1 TOP Ôn theo chương trình thi mới, luyện kỹ năng làm đề thi mới nhất cập nhật 2022 môn Toán cao cấp cho các nhà kinh tế',
      reviewCount: 102,
      price: '150,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F28151125-1652535535482-coverebookneu1.jpg&w=1920&q=75',
      courseName:
        'NEU EBOOK PLUS CHỦ NGHĨA XÃ HỘI KHOA HỌC (cập nhật đề thi 23/11/2021)',
      description: 'UPDATE ĐỀ THI MỚI NHẤT 23/11/2021, XEM NGAY!',
      reviewCount: 477,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F379028495-1652528611094-coverebookneu.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS NGUYÊN LÝ KẾ TOÁN',
      description:
        'Tóm tắt kiến thức trọng tâm môn học NLKT và phân dạng các dạng bài tập, các đề thi cuối kỳ cập nhật mới nhất.',
      reviewCount: 470,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F932430182-1652535174268-kinhtechinhtri.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS KINH TẾ CHÍNH TRỊ',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 760,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F335089725-1652535932655-_.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS KINH TẾ LƯỢNG',
      description:
        'Cấp tốc dành cho người mất gốc. Hướng dẫn làm FULL các dạng bài sẽ gặp trong thi cuối kì',
      reviewCount: 143,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
    {
      imgSrc:
        'https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F543778860-1652533318725-triethocmac-lenin.jpg&w=1920&q=75',
      courseName: 'NEU EBOOK PLUS TRIẾT HỌC MÁC-LÊNIN',
      description:
        'Cam kết chất lượng bài học. Học theo logic, dễ hiểu. Chia sẻ kinh nghiệm, mẹo làm bài tốt.',
      reviewCount: 584,
      price: '40,000 VND',
    },
  ];

  const toggleShowMore = () => {
    setCoursesToShow(coursesToShow + 8);
  };
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className={'cart-wrapper'}>
      <Header />
      <div className={'container-center'}>
        <div className={'cart-container'}>
          <div className={'cart-banner-school'}>
            <img
              className={'image-banner'}
              src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fbanner%2Fneu.jpg&w=1920&q=75"
              alt="ImageBanner"></img>
          </div>
          <div className={'cart-category-course'}>
            <div className={'card-header-category'}>
              <div className={'card-name-school'}>
                <img
                  className={'icon-tag'}
                  src="https://onthisinhvien.com/images/icon/otsv/icon-tag-school.svg"
                  alt="IconTag"></img>
                <div className={'school-name'}>Đại học Kinh tế Quốc dân</div>
              </div>
              <div className={'card-search-course'}>
                <button className={'btn-combo'}>Hot combo</button>
                <div className={'form-search'}>
                  <input
                    className={'input-search'}
                    placeholder="Tìm kiếm khóa học..."></input>
                  <div>
                    <FontAwesomeIcon
                      className={'button-search'}
                      icon={faMagnifyingGlass}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={'card-block-category'}>
              <span className={'card-name-category'}>
                Môn đại cương (68 Khoá)
              </span>
              <div className={'list-course'}>
                {allCourses.slice(0, coursesToShow).map((course, index) => (
                  <ItemCourse
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
                <div className={'show-more'}>
                  <button onClick={toggleShowMore}>
                    Xem thêm
                    <BiChevronDown className={'icon-chev'} />
                  </button>
                </div>
              )}
            </div>
            <div className={'card-block-category'}>
              <span className={'name-category'}>
                MÔN CHUYÊN NGÀNH (87 KHOÁ)
              </span>
              <div className={'list-course'}>
                {allCourses.slice(0, coursesToShow).map((course, index) => (
                  <ItemCourse
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
                <div className={'show-more'}>
                  <button onClick={toggleShowMore}>
                    Xem thêm
                    <BiChevronDown className={'icon-chev'} />
                  </button>
                </div>
              )}
            </div>
            <div className={'card-block-category'}>
              <span class={'name-category'}>MÔN HỌC AEP (40 KHOÁ)</span>
              <div className={'list-course'}>
                {allCourses.slice(0, coursesToShow).map((course, index) => (
                  <ItemCourse
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
                <div className={'show-more'}>
                  <button onClick={toggleShowMore}>
                    Xem thêm
                    <BiChevronDown className={'icon-chev'} />
                  </button>
                </div>
              )}
            </div>
            <div className={'card-block-category'}>
              <span className={'name-category'}>
                NGOẠI NGỮ - TIN HỌC - CĐR (0 KHOÁ)
              </span>
            </div>
          </div>
          <div className={'card-panel-feedback'}>
            <div className={'feedback-container'}>
              <h3>Phản hồi của học viên kỳ trước</h3>
            </div>
            <div className={'slide-feedback'}>
              <Feedback />
            </div>
          </div>
          <div className={'achive'}>
            <div className={'slogan'}>
              ÔN THI SINH VIÊN <br></br> THAY ĐỔI CÁCH HỌC VÀ THI CỦA BẠN
            </div>
            <div className={'static-wrapper'}>
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
          <div className={'communities'}>
            <h2>Cộng đồng</h2>
            <div className={'list-item-communities'}>
              <ItemCommunity
                nameCm="group Góc ôn thi NEU Shares"
                numMem="30.000"
                rate=""
              />
              <ItemCommunity
                nameCm="FANPAGE ÔN THI SINH VIÊN HL ĐH KINH TẾ QUỐC DÂN"
                numMem="12.000"
                rate="65"
              />
              <ItemCommunity
                nameCm="group Góc review nhà trọ Bách Kinh Xây"
                numMem="80.0000"
                rate="****"
              />
              <ItemCommunity
                nameCm="Góc ôn thi AEP - NEU Shares ✅"
                numMem="3100"
                rate="****"
              />
              <ItemCommunity
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

export default Cart;
