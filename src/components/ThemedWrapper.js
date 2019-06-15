import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import Toggle from "./Toggle";
import useTheme from "./useTheme";
import HomePage from "./HomePage";
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Declaring style modes for elements
const getForeGround = theme("mode", {
  light: "hsla(0,0%,0%,0.9)",
  dark: "#FFF"
});

const getBackground = theme("mode", {
  light: "#FFF",
  dark: "#282C35"
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getBackground};
    color: ${getForeGround};
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: scroll;
`;

const ThemedWrapper = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Toggle />
        <HomePage />
      </Wrapper>
    </ThemeProvider>
  );
};

export default ThemedWrapper;
