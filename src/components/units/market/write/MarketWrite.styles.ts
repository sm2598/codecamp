import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const WrapperWrite = styled.div`
  width: 100%;
  max-width: 1200px;
  /* White */
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 300px;
`
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 118px 80px 118px;
`
export const WrapperColumnInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`
export const WrapperRow = styled.div`
  width: 100%;
  display: table-row;
  flex-direction: row;
`
export const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 16px;
`
export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 80px;
`
export const LabelInput = styled.input`
  background: #FFFFFF;
  /* Gray 4 */
  padding-left: 16px;
  border: 1px solid #BDBDBD;
  height: 52px;
  width: 100%;
`
export const Submit = styled.button`
  width: 179px;
  height: 52px;
  background: #BDBDBD;
`