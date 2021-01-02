import { keyframes } from "styled-components";

export const Bounce = keyframes`
  0% {
    transform: scale(1, 1) translateX(-3000px);
  }
  10% {
    transform: scale(1.1, 0.9) translateX(-3000px);
  }
  30% {
    transform: scale(0.9, 1.1) translateX(0);
  }
  50% {
    transform: scale(1, 1) translateX(-70px);
  }
  67% {
    transform: scale(1, 1) translateX(-2px);
  }
  100% {
    transform: scale(1, 1) translateX(0);
  }
`;

export const Opacity = keyframes`
  0% {
  opacity: 0;
  }
  100% {
  opacity: 1;
  }
`;

export const SlideDown = keyframes`
  0% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const MoveDown = keyframes`
  0% {
    top: -200px;
  }
  100% {
    top: 0;
  }
`;
