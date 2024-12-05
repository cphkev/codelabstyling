// src/components/Footer.jsx
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return <FooterContainer>© 2024 Trucking Company</FooterContainer>;
};

export default Footer;
