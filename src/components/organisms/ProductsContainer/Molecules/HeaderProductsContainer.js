import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { SvgIcon } from "@material-ui/core";
import Categories from "../../../../images/CategoriesIcons/Categories";

const StyledDiv = styled.div`
  .MuiAppBar-colorDefault {
    background-color: ${({ theme }) => theme.myGreen};
  }

  .MuiPaper-root,
  .MuiTabs-root {
    border-radius: 30px 30px 0 0;
    @media (max-width: 1000px) {
      border-radius: 0;
    }
  }
  .MuiTabs-flexContainer {
    display: flex;
    justify-content: space-between;
  }

  .MuiTab-textColorPrimary.Mui-selected > span {
    color: ${({ theme }) => theme.myGrey};
  }

  .MuiTab-labelIcon {
    min-height: 45px;
    font-size: 1.4rem;
    color: white;
    font-weight: 900;
    text-transform: lowercase;
  }

  .MuiSvgIcon-root {
    font-size: 2.4rem;
  }

  .MuiTabs-scroller .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.myGrey};
  }
`;

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const HeaderProductsContainer = ({ takeCategory }) => {
  const [value, setValue] = useState(0);

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCategory = (keyCategory) => {
    takeCategory(keyCategory);
  };

  return (
    <StyledDiv>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeValue}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs categoryHeader"
        >
          {Categories.map((item) => (
            <Tab
              key={item.key}
              label={item.name}
              onClick={() => handleChangeCategory(item.key)}
              icon={
                <SvgIcon viewBox={item.icon.props.viewBox}>{item.icon}</SvgIcon>
              }
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </AppBar>
    </StyledDiv>
  );
};

HeaderProductsContainer.propTypes = {
  takeCategory: PropTypes.func,
};

export default HeaderProductsContainer;
