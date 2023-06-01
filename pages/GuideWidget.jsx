import React, { useState } from 'react';
import styled from 'styled-components';

const menuHeight = '190px';

const buttons = ['Details', 'Metrics', 'Orders', 'Insights'];

const items = [
  {
    title: 'Details',
    content:
      'Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.',
  },
  {
    title: 'Metrics',
    content:
      'Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.',
  },
  {
    title: 'Orders',
    content:
      'Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.',
  },
  {
    title: 'Insights',
    content:
      'Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.',
  },
];

const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const toggleMenuBlock = (index) => setActiveBlock(index);
  return (
    <WidgetStyled>
      <div className="buttons">
        {buttons.map((button, idx) => (
          <button className={idx === activeBlock ? 'active' : ''} onClick={() => toggleMenuBlock(idx)}>
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div className="content" style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}>
          {items.map((item, index) => (
            <div className="item" key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </WidgetStyled>
  );
};

const WidgetStyled = styled.div`
  display: flex;
  padding: 0 20px;
  width: 480px;
  height: var(--widget-height);
  border-radius: 10px;
  background: #ffffff;
  transition: 0.3s;
  .buttons {
    padding-top: 20px;
    width: var(--widget-width);
    button {
      margin: 0;
      font-size: 14px;
      width: 100%;
      height: 36px;
      padding: 0 0 0 12px;
      background: transparent;
      border-radius: 6px;
      border: 0;
      display: flex;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      color: #a7a7a7;
      &.active {
        background: var(--widget-color);
        color: #f9f9f9;
      }
    }
  }
  .wrapper {
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      left: 0;
      width: 100%;
      height: 36px;
    }
    &::before {
      top: 0;
      background: linear-gradient(#ffffff, rgb(255 255 255 / 0%));
    }
    &::after {
      bottom: 0;
      background: linear-gradient(rgb(255 255 255 / 0%), #ffffff);
    }
    .content {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      height: calc(var(--widget-height) * 3);
      transition: 0.6s;
      .item {
        padding: 0 20px;
        height: var(--widget-height);
        p {
          display: flex;
          align-items: center;
          line-height: 1.6;
          font-size: 13px;
          margin: 0;
          color: #222222;
          opacity: 0.5;
        }
        h2 {
          padding-top: 20px;
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
`;

export default Widget;
