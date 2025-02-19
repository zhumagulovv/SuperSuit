import { Link } from "react-router-dom";

import { Container } from "../../shared/ui/container";

import logoImage from "../../../public/icons/logo.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <NavbarContent>
          <Link to={"/"}>
            <NavbarLogo src={logoImage} alt="logo image" loading="lazy" />
          </Link>

          <NavbarTelPhone href="tel:996774814583">
            +996 774 814 583
          </NavbarTelPhone>
        </NavbarContent>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  padding: 10px 0;
  background-color: #ffffff;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLogo = styled.img`
  @media only screen and (max-width: 1024px) {
    width: 94px;
  }
`;

const NavbarTelPhone = styled.a`
  font-family: "Montserrat Alternates";
  font-weight: 700;
  font-size: 32px;
  line-height: 39.01px;
  color: #041a3f;
  text-decoration: none;

  @media screen and (min-width: 960px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 33.06px;
  }

  @media screen and (min-width: 640px) and (max-width: 960px) {
    font-size: 18px;
    line-height: 25.02px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 22.04px;
  }
`;
