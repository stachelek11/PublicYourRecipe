import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.div`
  background: url(${({ image }) => image}) no-repeat center/100%;
  background-size: cover;
  height: ${({ height }) => height};
  width: 100%;
  border-radius: 50px 50px 0 0;
`;
Image.propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.string
};

export default Image;
