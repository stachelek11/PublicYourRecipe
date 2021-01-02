import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 20px;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 20px;
  padding: 13.5px 22px;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  outline: none;
`;

Input.propTypes = {
  margin: PropTypes.string,
  width: PropTypes.string,
};

Input.defaultProps = {
  margin: "0",
  width: "100%",
};

export default Input;
