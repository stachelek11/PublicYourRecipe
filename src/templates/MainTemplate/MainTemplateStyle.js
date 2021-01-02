import styled, { css } from "styled-components";
import LogoButton from "../../components/atoms/LogoButton";
import { SlideDown } from "../../components/atoms/Keyframes";
import { Opacity } from "../../components/atoms/Keyframes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ type }) => (type === "home" ? "min-height: 100vh;" : "height: 100vh;")};
  overflow: auto;
  &::-webkit-scrollbar-track {
    margin-top: 95px;
    @media (max-width: 1000px) {
      margin-top: 70px;
    }
  }
  position: relative;
  ${({ type }) =>
    type === "home" &&
    css`
      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        width: 100%;
        height: calc(100% - 80px);
        border-radius: 0 0 40vw;
        background-color: ${({ theme }) => theme.myYellow};
      }
    `};
`;

export const Contents = styled.main`
  animation: ${Opacity} 1s 0.5s both;
  box-sizing: border-box;
  margin-top: ${({ type }) => type !== "home" && "95px"};
  margin-bottom: ${({ type }) => type === "home" && "120px"};
  min-height: calc(100vh - 215px);
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: ${({ type }) => type === "home" && "space-around"};
  @media (max-width: 1000px) {
    padding: 0;
  }
  @media (max-width: 1000px) {
    justify-content: ${({ type }) => type === "home" && "space-evenly"};
    margin-top: ${({ type }) => type !== "home" && "70px"};
    min-height: calc(100vh - 70px);
  }
`;

export const StyledLogoButton = styled(LogoButton)`
  margin-top: 22.5px;
  animation: ${SlideDown} 0.5s both;
`;
