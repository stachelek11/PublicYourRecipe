import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const handleColorType = (color) => {
  switch (color) {
    case "green":
      return css`
        color: white;
        background: ${({ theme }) => theme.myGreen};
      `;
    case "grey":
      return css`
        color: white;
        background-color: ${({ theme }) => theme.myGrey};
      `;
    default:
      return css`
        color: ${({ theme }) => theme.myGrey};
        background: white;
      `;
  }
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 10px;
  text-align: center;
  ${({ color }) => handleColorType(color)};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

Button.propTypes = {
  color: PropTypes.oneOf(["green", "grey"]),
  padding: PropTypes.string,
};

Button.defaultProps = {
  padding: "13.5px 22px",
};

export default Button;
