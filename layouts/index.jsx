import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '@/layouts/Sidebar';
import Container from '@/layouts/Container';

const Index = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const mobile = useMediaQuery({ query: '(max-width:767px)' });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return (
    <>
      <Sidebar />
      <Container>{children}</Container>
    </>
  );
};

export default Index;
