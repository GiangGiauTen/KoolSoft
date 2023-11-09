import React from 'react';
import { Carousel } from 'antd';
import './Feedback.css';
function Feedback() {
  return (
    <div className="feedback-container">
      <h3 className="custom-feedback">PHẢN HỒI CỦA HỌC VIÊN KỲ TRƯỚC</h3>

      <div className="swiper-feedback">
        <Carousel
          className="feedback-panel"
          customPaging={i => <div className="custom-dot-fb"></div>}
          dotPosition="bottom">
          <div className="swiper-wrapper-fb">
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
          </div>
          <div className="swiper-wrapper-fb">
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
          </div>
          <div className="swiper-wrapper-fb">
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
          </div>
          <div className="swiper-wrapper-fb">
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
            <div className="swiper-fb-item">
              <div className="tag-study-feedback">Hồ huệ</div>
              <div className="panel-image-feedback">
                <span>
                  <img src="/feedback/fb1.png" />
                </span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Feedback;
