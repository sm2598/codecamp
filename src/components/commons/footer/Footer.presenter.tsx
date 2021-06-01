import {
  Wrapper,
  WrapperColumn,
  WrapperRowTop,
  WrapperRowMiddle,
  WrapperRowBottom
} from './Footer.styles'

export const FooterUI = () => {
  return (
    <Wrapper>
      <WrapperColumn>
        <WrapperRowTop>

        </WrapperRowTop>
        <WrapperRowMiddle>

        </WrapperRowMiddle>
        <WrapperRowBottom>
         <div>@2021 codecamp notice board</div>
        </WrapperRowBottom>
      </WrapperColumn>
    </Wrapper>
  )
}