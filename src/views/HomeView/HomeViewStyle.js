import styled, { css } from "styled-components";
import { Bounce, Opacity } from "../../components/atoms/Keyframes";
import Button from "../../components/atoms/Button";

export const HiUser = styled.h1`
  animation: ${Opacity} 1s 0.5s both;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
  font-size: 7rem;
  font-weight: 900;
  text-align: center;
  ${({ beforeStr }) =>
    beforeStr &&
    css`
      &::before {
        content: "${({ beforeStr }) => beforeStr}";
        text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
        color: ${({ theme }) => theme.myGreen};
      }
    `};

  ${({ afterStr }) =>
    afterStr &&
    css`
      &::after {
        content: "${({ afterStr }) => afterStr}";
        color: ${({ theme }) => theme.myGreen}
      }
    `};
  @media (max-width: 1200px) {
    font-size: 5.5rem;
    margin: 0 20px 100px;
  }

  @media (max-width: 1000px) {
    font-size: 5rem;
    margin: 0 20px 100px;
  }

  @media (max-width: 530px) {
    margin: 0 20px 50px;
    font-size: 3.5rem;
  }
`;

export const StyledButton = styled(Button)`
  animation: ${Bounce} 1.5s 0.7s both;
  text-decoration: none;
  height: 65px;
  width: 330px;
  font-size: 2.8rem;
  line-height: 65px;
  padding: 0;
  @media (max-width: 1000px) {
    height: 50px;
    width: 220px;
    font-size: 2.2rem;
    line-height: 50px;
  }
  @media (max-width: 530px) {
    height: 40px;
    width: 170px;
    font-size: 1.7rem;
    line-height: 40px;
  }
`;
