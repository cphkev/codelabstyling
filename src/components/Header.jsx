// src/components/Header.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Trucking Co.</Logo>
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/trucks">Trucks</NavItem>
        <NavItem to="/drivers">Drivers</NavItem>
        <NavItem to="/register-driver">Register Driver</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
