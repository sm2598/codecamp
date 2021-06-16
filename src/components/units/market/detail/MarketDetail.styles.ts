import styled from '@emotion/styled'

export const WrapperContent = styled.div`
  width: 1200px;
  height: 100%;
  border: 1px solid black;

  padding-top: 80px;
  padding-left: 107px;
  padding-right: 107px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WrapperRowBoardCreator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #bdbdbd;
  border-top: none;
  border-left: none;
  border-right: none;
`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperColumnButton = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px;
`;
export const WrapperGoToList = styled.button`
  width: 179px;
  height: 52px;

  /* White */

  background: #ffffff;
  /* Gray 4 */
  font-size: 16px;
  padding: 12px;

  margin: 12px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  &:active {
    background: #ffd600;
  }
`;
export const WrapperEditBoard = styled.button`
  width: 179px;
  height: 52px;

  /* White */

  background: #ffffff;
  /* Gray 4 */
  font-size: 16px;
  padding: 12px;

  margin: 12px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  &:active {
    background: #ffd600;
  }
`;
export const WrapperRowButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const WrapperProfileIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileIcon = styled.img`
  height: 53px;
  width: 53px;
`;
export const WrapperUserInfoColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
`;
export const Name = styled.div`
  font-size: 24px;
`;
export const DateCreated = styled.div`
  color: #828282;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const WrapperLinkMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImgLink = styled.img`
  height: 13px;
  width: 27px;
`;
export const ImgMap = styled.img`
  height: 27px;
  width: 19px;
`;
export const PostTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 80px;
`;
export const PostContent = styled.div`
  width: 996px;
  font-size: 16px;
  height: 200px;
`;