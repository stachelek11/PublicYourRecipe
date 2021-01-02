import styled from "styled-components";
import Logo from "../../images/Logo.svg";
import LogoMobile from "../../images/LogoMobile.svg";

const LogoButton = styled.button`
  background: transparent url(${Logo}) no-repeat center;
  background-size: 220px auto;
  height: 50px;
  width: 225px;
  border: none;
  @media (max-width: 1000px) {
    background: transparent url(${LogoMobile}) no-repeat center;
    background-size: 84px auto;
    height: 59px;
    width: 84px;
  }
`;

export default LogoButton;
