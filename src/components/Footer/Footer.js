import './Footer.css';
import { MdOutlineLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <header className={'wrapper'}>
      <div className={'footer-panel'}>
        <div className={'footer-container'}>
          <div className={'big-column'}>
            <div className={'big-column-item'}>
              <div className={'big-column-item-left'}>
                <div className={'small-column-item-left'}>
                  <div className={'big-text'}>Thông tin</div>
                  <div className={'small-text'}>
                    Email: info@onthisinhvien.com
                  </div>
                  <div className={'small-text'}>Hotline: 02473 010 929</div>
                  <div className={'small-text'}>
                    Giờ làm việc: 8h00 - 11h30, 14h - 17h30
                  </div>
                  <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fdathongbao.png&w=256&q=75"></img>
                </div>

                <div className={'small-column-item-right'}>
                  <div className={'big-text'}>Tiện ích</div>
                  <div className={'small-text'}>Trang chủ</div>
                  <div className={'small-text'}>Khóa học</div>
                  <div className={'small-text'}>Tuyển dụng</div>
                  <div className={'small-text'}>Đề thi</div>
                  <div className={'small-text'}>Tin tức</div>
                </div>
              </div>
              <div className={'big-column-item-right'}>
                <div className={'small-column-item-left'}>
                  <div className={'big-text'}>Chính sách</div>
                  <div className={'small-text'}>Những câu hỏi thường gặp</div>
                  <div className={'small-text'}>
                    Bộ quy tắc hành xử của mentor và học viên trên otsv
                  </div>
                  <div className={'small-text'}>Chính sách chung</div>
                  <div className={'small-text'}>
                    Chính sách bảo mật thông tin
                  </div>
                  <div className={'small-text'}>
                    Hướng dẫn kích hoạt khóa học
                  </div>
                  <div className={'small-text'}>
                    Chính sách hoàn trả học phí
                  </div>
                  <div className={'small-text'}>Vi phạm chính sách</div>
                </div>

                <div className={'small-column-item-center'}>
                  <div className={'big-text'}>Hợp tác & Liên kết</div>
                  <div className={'small-text'}>Shopee UEH, UEL</div>
                  <div className={'small-text'}>Shopee NEU</div>
                  <div className={'small-text'}>Shopee VPP</div>
                  <div className={'small-text'}>Shopee TMU, HVTC</div>
                  <div className={'small-text'}>Shopee HUCE</div>
                  <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fshoppe.png&w=64&q=75"></img>
                </div>

                <div className={'small-column-item-right'}>
                  <div className={'big-text'}>Tải app</div>
                  <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fchplay-download.png&w=256&q=75"></img>
                  <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fapp-store-download.png&w=256&q=75"></img>
                  <div className={'small-text'}>Kết nối với chúng tôi</div>
                  <div className={'list-logo'}>
                    <img src="https://onthisinhvien.com/images/icon/otsv/youtube.svg"></img>
                    <img src="https://onthisinhvien.com/images/icon/otsv/fb.svg"></img>
                    <img src="https://onthisinhvien.com/images/icon/otsv/tiktok.svg"></img>
                    <img src="https://onthisinhvien.com/_next/image?url=%2Fimages%2Ficon%2Fotsv%2Fins.png&w=1920&q=75"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'box'}>
            <MdOutlineLocationOn className={'icon-location'} />
            <div className={'small-text'}>
              Địa chỉ: Số 69, ngõ 40 Tạ Quang Bửu, Q.Hai Bà Trưng, TP. Hà Nội
            </div>
          </div>
        </div>
      </div>
      <div className={'footer2'}>
        @2013 - Công ty Cổ phần Đầu tư và Phát triển Koolsoft
        <br></br>
        Giấy chứng nhận đăng ký doanh nghiệp số: 0106353044, cấp bởi Sở kế hoạch
        và đầu tư TP. Hà Nội
      </div>
    </header>
  );
}

export default Footer;
