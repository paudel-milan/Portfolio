// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #222;
  color: white;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2025 Milan's Portfolio</p>
  </FooterContainer>
);

export default Footer;
