import styled from "styled-components";

export const ErrorLog = styled.p`
  color: red;
  position: absolute;
  font-size: 1.2rem;
  top: 4px;
  left: 20px;
  margin: 0;
`;

export const Back = styled.u`
  color: ${({ theme }) => theme.myGreen};
  font-size: 1.6rem;
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.myGrey};
  margin: 10px 0 10px 10px;
`;
