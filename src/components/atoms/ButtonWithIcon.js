import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ButtonWithIcon = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.myGreen};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ size }) => size};
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 5px;
  border: none;
  border-radius: 20px;
  height: 60px;
  width: 90px;
  position: relative;
  @media (max-width: 1000px) {
    background: white url(${({ mobileIcon }) => mobileIcon}) no-repeat center;
    background-size: ${({ sizeMobile }) => sizeMobile};
    height: 49px;
    width: 60px;
    border-radius: 15px;
  }
  ${({ afterContent }) =>
    afterContent >= 0 &&
    css`
  &::after {
    content: "${({ afterContent }) => afterContent}";
    position: absolute;
    bottom: -14px;
    right: -14px;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    line-height: 30px;
    color: ${({ theme }) => theme.myGreen};
    box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 5px;
    @media (max-width: 1000px) {
      bottom: -8px;
      right: -13px;
      background-color: ${({ theme }) => theme.myGreen};
      color: white;
      width: 23px;
      height: 23px;
      font-size: 1.2rem;
      line-height: 25px;
    }
  }`}
`;

ButtonWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  mobileIcon: PropTypes.string.isRequired,
  sizeMobile: PropTypes.string.isRequired,
  afterContent: PropTypes.number,
};

export default ButtonWithIcon;
