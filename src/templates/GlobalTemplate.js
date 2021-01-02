import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";

const GlobalTemplate = ({ children }) => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </div>
);

GlobalTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalTemplate;
