// Category.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import { AudioOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import { Card, Button, Image } from 'antd';
import { Input } from 'antd';
const { Meta } = Card;
const { Search } = Input;

const jsonData = require('./Category.json');

function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeString(str) {
  return removeDiacritics(str).toLowerCase().replace(/đ/g, 'd');
}

function Category() {
  const [searchValue, setSearchValue] = useState('');
  const containerStyle = {
    margin: '10px 0',
    textAlign: 'center',
  };

  const handleSearch = value => {
    const normalizedSearchValue = normalizeString(value);
    setSearchValue(normalizedSearchValue);
  };

  const filteredData = jsonData.filter(item => {
    const normalizedDescription = normalizeString(item.description);
    const normalizedSearchValue = searchValue;
    return normalizedDescription.includes(normalizedSearchValue);
  });

  return (
    <div className="category-container">
      <div style={containerStyle}>
        <p className="title-block-category">DANH SÁCH TRƯỜNG HỌC</p>
        <p className="decription-block-category">
          <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học</b>, giúp
          ôn thi hiệu quả
        </p>
      </div>
      <div className="input-search">
        <Search
          placeholder="Tìm kiếm tên trường"
          onSearch={handleSearch}
          onChange={e => handleSearch(e.target.value)}
          style={{
            width: '100%',
            height: '48px',
          }}
        />
      </div>
      <div className="card-category">
        {filteredData.map((item, index) => (
          <div key={index} className="card-category-item">
            <Link to={`/cart`}>
              <Card
                style={{
                  width: 280,
                  height: 155,
                  borderRadius: 20,
                  border: '0.5px solid #ccc',
                  borderBottom: '1px solid #000',
                }}
                className="Card-team">
                <Card.Meta
                  avatar={
                    <Image
                      alt="team-image"
                      width={60}
                      height={60}
                      src={item.avatar}
                    />
                  }
                  title={item.title}
                  description={
                    <div className="team-info-ctn">{item.description}</div>
                  }
                />
                <div className="inf-school">
                  <div className="course">
                    <div style={{ marginRight: '8px' }}>
                      <CodeSandboxOutlined />
                    </div>
                    <div className="text-dot-1">{item.number}</div>
                  </div>
                  <div>
                    <Button
                      style={{
                        borderRadius: '15px',
                        border: '1px solid #c3d1e4',
                        fontSize: '12px',
                      }}>
                      Xem Thêm
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
