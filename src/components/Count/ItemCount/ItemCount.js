import React from 'react';

const ItemCount = ({ imgSrc, numberCount, textCount }) => {
  return (
    <div className="count-list-item">
      <div className="item-count">
        <div className="image-count">
          <img src={imgSrc} alt="Nam Icon" />
        </div>
        <div className="number-count">{numberCount}</div>
        <div className="text-count">{textCount}</div>
      </div>
    </div>
  );
};

export default ItemCount;
