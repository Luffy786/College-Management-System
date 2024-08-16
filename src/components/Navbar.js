import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/notices">Notices</NavItem>
      <NavItem to="/timetable">Timetable</NavItem>
      <NavItem to="/performance">Performance</NavItem>
      <NavItem to="/login">Login</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
