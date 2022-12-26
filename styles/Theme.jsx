import { rgba } from "polished";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#9c92f8",
    black: "#000000",
    white: "#ffffff",
    grey: {
      threeHundred: "#8e95a9",
    },
  },
  breakpoints: {
    md: "992px",
    sm: "768px",
    x: "576px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
