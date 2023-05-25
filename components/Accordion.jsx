import React, { useRef } from 'react';
import styled from 'styled-components';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';

const Accordion = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <>
      <AccHead className={active === id ? 'active' : ''} onClick={() => handleToggle(id)}>
        <h2>{header}</h2>
        <span>{active === id ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}</span>
      </AccHead>
      <AccBody
        ref={contentEl}
        className={active === id ? 'show' : ''}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: 0 }}
      >
        <p>{text}</p>
      </AccBody>
    </>
  );
};

const AccHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 10px 0 20px;
  border-radius: 6px;
  cursor: pointer;
  background: #f1f3f5;
  margin-bottom: 10px;
  color: #343a40;
  &.active {
    background: #4c6ef5;
    color: #fff;
  }
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

const AccBody = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
  &.show {
    height: auto;
  }
  p {
    padding: 0 20px 10px;
    line-height: 1.7;
    font-size: 14px;
  }
`;

export default Accordion;
