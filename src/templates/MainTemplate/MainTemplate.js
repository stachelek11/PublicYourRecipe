import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../../components/organisms/Header/Header";
import { Wrapper, Contents, StyledLogoButton } from "./MainTemplateStyle";

const MainTemplate = ({ children, type }) => (
  <>
    {type !== "home" && <Header type={type} />}
    <Wrapper type={type}>
      {type === "home" && <StyledLogoButton as={Link} to="/" />}
      <Contents type={type}>{children}</Contents>
    </Wrapper>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  type: PropTypes.oneOf(["home", "choose"]),
};

export default MainTemplate;
