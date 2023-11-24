import React from 'react';
import PropTypes from 'prop-types';
import './Community.css';

function Community({ nameCm, numMem, rate }) {
  return (
    <div className={'item-community-wrapper'}>
      <div className={'item-community'}>
        <div className={'item-community-header'}>
          <div className={'icon-wrapper'}>
            <svg
              className={'icon-facebook'}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FacebookRoundedIcon">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
            </svg>
          </div>
          <div className={'name-community'}>{nameCm}</div>
        </div>
        <div className={'member-school'}>
          <div className={'item-member-judge'}>
            <div className={'item-member-group'}>
              <svg
                className={'icon-member'}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="GroupsIcon">
                <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
              </svg>
              <span className={'text'}>Thành viên</span>
            </div>
            <div className={'data'}>{numMem}</div>
          </div>
          <div className={'item-member-rate'}>
            <div className={'item-member-group'}>
              <svg
                className={'icon-rate'}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="GradingIcon">
                <path d="M4 7h16v2H4V7zm0 6h16v-2H4v2zm0 4h7v-2H4v2zm0 4h7v-2H4v2zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21 20 16.42 18.58 15l-3.17 3.17zM4 3v2h16V3H4z"></path>
              </svg>
              <span className={'text'}>Đánh giá</span>
            </div>
            <div className={'data'}>{rate}</div>
          </div>
          <div className="gotoLink">
            <button className={'btn-join'}>Tham gia ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Community.propTypes = {
  nameCm: PropTypes.string.isRequired,
  numMem: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
};
export default Community;
