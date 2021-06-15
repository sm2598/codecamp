import { useRouter } from "next/router"
import { Label, LabelInput, Submit, Title, Wrapper, WrapperColumn, WrapperColumnInputs, WrapperWrite } from "./MarketWrite.styles"
import withAuth from '../../../commons/hoc/withAuth'

const MarketWriteUI = ({onClickRegister, onChangeInput}) => {


  return (
    <Wrapper>
      <WrapperWrite>
        <WrapperColumn>
          <Title>상품 등록</Title>
          <WrapperColumnInputs>
            <Label>상품명</Label>
            <LabelInput id="name" type="text" placeholder="상품명을 작성해주세요." onChange={onChangeInput}/>
          </WrapperColumnInputs>
          <WrapperColumnInputs>
            <Label>한줄요약</Label>
            <LabelInput id="remarks" type="text" placeholder="상품을 한줄로 요약해주세요." onChange={onChangeInput}/>
          </WrapperColumnInputs>
          <WrapperColumnInputs>
            <Label>상품설명</Label>
            <LabelInput id="contents" type="text" placeholder="상품을 설명해주세요." onChange={onChangeInput}/>
          </WrapperColumnInputs>
          <WrapperColumnInputs>
            <Label>판매 가격</Label>
            <LabelInput id="price" type="number" placeholder="희망 판매 가격을 입력해주세요." onChange={onChangeInput}/>
          </WrapperColumnInputs>
          <WrapperColumnInputs>
            <Label>태그 입력</Label>
            <LabelInput id="tags" type="text" placeholder="#태그 #태그" onChange={onChangeInput}/>
          </WrapperColumnInputs>
          <Submit onClick={onClickRegister}>등록하기</Submit>
        </WrapperColumn>
      </WrapperWrite>
    </Wrapper>
  )
}

export default withAuth(MarketWriteUI)