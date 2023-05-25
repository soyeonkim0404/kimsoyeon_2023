import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Container;
