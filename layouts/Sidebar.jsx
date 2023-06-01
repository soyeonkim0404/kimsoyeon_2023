import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <NavBarBurger onClick={toggleMenu}>{toggle ? <HiOutlineX /> : <HiOutlineMenu />}</NavBarBurger>
      <SideMenuWrap className={toggle ? 'open' : ''}>
        <nav>
          <Link href={'./'}>Home</Link>
          <Link href={'./GuideAccordion'}>Accordion</Link>
          <Link href={'./GuideWidget'}>Widget</Link>
          <Link href={'./SignUp'}>SignUp</Link>
        </nav>
      </SideMenuWrap>
    </>
  );
};

const MenuIn = keyframes`
  0%{
    clip-path: ellipse(60% 60% at 0 50%);
  }
  100%{
    clip-path: ellipse(120% 120% at 0 50%);
  }
`;

const NavBarBurger = styled.button`
  position: fixed;
  font-size: 40px;
  top: 20px;
  left: 20px;
  border: 0;
  background: transparent;
  color: #fff;
  z-index: 3;
`;

const SideMenuWrap = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 400px;
  height: 100%;
  background: linear-gradient(45deg, rgb(255, 208, 128) 0%, rgba(225, 5, 34, 0) 70%) repeat scroll 0% 0%, linear-gradient(135deg, rgb(225, 5, 152) 10%, rgba(49, 5, 209, 0) 80%) repeat scroll 0% 0%, linear-gradient(225deg, rgb(238, 255, 128) 10%, rgba(10, 219, 216, 0) 80%) repeat scroll 0% 0%, rgba(0, 0, 0, 0) linear-gradient(315deg, rgb(175, 255, 128) 100%, rgba(9, 245, 5, 0) 70%) repeat scroll 0% 0%
  translate: -100% 0;
  transition: translate 0.375s cubic-bezier(0.175, 0.885, 0.32, 1);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.05);
  opacity: 0;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      position: relative;
      color: #343a40;
      font-size: 30px;
      padding: 20px 0;
      width: 300px;
    }
  }
  &.open {
    opacity: 1;
    visibility: visible;
    translate: 0;
    animation: ${MenuIn} 0.375s;
  }
`;

export default Sidebar;
