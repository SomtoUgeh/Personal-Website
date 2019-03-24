import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 80px;
  border-top: 1px solid #dddddd;
  padding: 25px 0;
  display: grid;
  place-items: center;
`;

const FooterItem = styled.div`
  text-align: center;
  font-family: 'Akkurat', sans-serif;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem> ©️ 2019 SOMTO M.UGEH</FooterItem>
    </FooterContainer>
  );
};

export default Footer;
