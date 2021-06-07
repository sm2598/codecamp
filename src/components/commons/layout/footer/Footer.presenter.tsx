import {
  Wrapper,
  WrapperColumn,
  WrapperRowTop,
  WrapperRowMiddle,
  WrapperRowBottom,
} from "./Footer.styles";

export const FooterUI = () => {
  return (
    <Wrapper>
      <WrapperColumn>
        <WrapperRowTop></WrapperRowTop>
        <WrapperRowMiddle></WrapperRowMiddle>
        <WrapperRowBottom>Developed by Sung Woo Min</WrapperRowBottom>
      </WrapperColumn>
    </Wrapper>
  );
};
