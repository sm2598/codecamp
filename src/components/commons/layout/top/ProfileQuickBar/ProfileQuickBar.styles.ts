import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;
export const ProfileIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 28px;
`;
export const ProfileQuickBarWrapper = styled.div`
  width: 200px;
  height: 226px;
  background: #ffffff;
  border-radius: 16px;
  position: absolute;
  left: 70%;
  top: 108px;
  z-index: 2;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`;
export const ProfileQuickBarRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }
`;
export const ProfileQuickBarInnerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileQuickBarColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 26px 20px 26px;
`;
export const ProfileQuickBarName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;
export const ProfileQuickBarPoints = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
`;
export const ProfileQuickBarLabel = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #bdbdbd;
`;
export const ProfileQuickBarLabelIMG = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
