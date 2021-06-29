import styled from '@emotion/styled'

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const WrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
`
export const WrapperRight = styled.div`
    max-width: 980px;
    width: 100%;
`
export const WrapperLeft = styled.div`
    max-width: 200px;
    width: 100%;
    border-right: 1px solid #F2F2F2;
`
export const WrapperLeftTop = styled.div``
export const WrapperLeftBottom = styled.div``
export const WrapperRightListItems = styled.div`
max-width: 980px;
width: 100%;
max-height: 64px;
height: 100%;
`
export const LeftProfileTitle = styled.div`
font-style: normal;
font-weight: bold;
font-size: 24px;
margin-bottom: 48px;
`
export const LeftProfilePicture = styled.img`
    max-width: 80px;
    width: 100%;
    max-height: 80px;
    height: 80px;
    margin-bottom: 28px;
`
export const LeftProfileName = styled.div`
font-style: normal;
font-weight: bold;
font-size: 24px;
`
export const LeftProfileImageIcons = styled.img`
max-width: 20px;
width: 100%;
max-height: 20px;
height: 100%;
margin-right: 10px;
`
export const LeftProfileImageLabel = styled.div`
font-style: normal;
font-weight: 500;
font-size: 18px;
/* identical to box height */

/* Gray 3 */
color: #828282;
`
export const RightSelector = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;

/* Gray 3 */

color: #828282;
`
export const MyPageRightTopSelector = styled.button`
    font-style: normal;
font-weight: normal;
font-size: 16px;
border: none;
background: none;
color: #828282;

`
export const WrapperSearch = styled.div`
  width: 100%;
  max-width: 368px;
`;
export const WrapperRowSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Search = styled.input`
  width: 368px;
  height: 52px;

  background: #f2f2f2;
  border-radius: 10px;
  border: none;

  padding-left: 12px;

  font-size: 16px;
  outline: none;
`;
export const WrapperSearchInputDiv = styled.div`
  max-width: 368px;
  width: 65%;
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #f2f2f2;
  border-radius: 10px;
  border: none;
`;
export const SearchImg = styled.img`
  width: 17.5px;
  height: 17.5px;
  margin-left: 19px;

  cursor: pointer;
`;
export const ButtonSearch = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;

  height: 52px;

  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* Black */

  background: #000000;
  border-radius: 10px;
  border: none;

  cursor: pointer;
  &:active {
    background: lightgrey;
  }
`;