import React from 'react';
import './System.css';
import { Tabs } from 'antd';
const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
function System() {
  return (
    <div className="system-container">
      <h2>HỆ THỐNG ÔN THI SINH VIÊN</h2>
      <div className="system-tabs">
        <Tabs defaultActiveKey="1">
          {items.map(item => (
            <Tabs.TabPane
              key={item.key}
              tab={item.label}
              className={'system-tab-item'} // Sử dụng lớp tùy chỉnh ở đây
            >
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default System;
