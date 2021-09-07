import { Global, css } from "@emotion/react";

const reset = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "aaa";
  }
  @font-face {
    font-family: "aaa";
    src: url("/fonts/NotoSansKR-Medium.otf");
  }
`;

const GlobalStyles = () => {
  return <Global styles={reset} />;
};

export default GlobalStyles;
