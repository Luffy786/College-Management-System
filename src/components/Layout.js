import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  background: linear-gradient(135deg, #6d83f2, #5c69d2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
