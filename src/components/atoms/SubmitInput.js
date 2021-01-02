import styled from "styled-components";
import PropTypes from "prop-types";

const SubmitInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13.5px 22px;
  border: none;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 10px;
  text-align: center;
  color: white;
  background: ${({ theme }) => theme.myGreen};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

SubmitInput.propTypes = {
  marginBottom: PropTypes.string,
};

SubmitInput.defaultProps = {
  marginBottom: "15px",
};

export default SubmitInput;
