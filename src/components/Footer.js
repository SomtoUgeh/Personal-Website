import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 160px;
  border-top: 1px solid #dddddd;
  padding: 30px 0;
`;

const FooterItem = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem> ©️ 2019 SOMTO M.UGEH</FooterItem>
    </FooterContainer>
  );
};

export default Footer;
