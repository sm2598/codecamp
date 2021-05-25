import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-top: none;
  border-left: none;
  border-right: none;
`;
export const HeaderRow = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid grey;
  border-right: none;
  border-left: none;
  border-bottom: none;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;
export const ID = styled.div`
  width: 200px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  width: 700px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Author = styled.div`
  width: 300px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CreatedAt = styled.div`
  width: 300px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SelectDelete = styled.button`
  height: 57px;
  width: 200px;
  border: rounded;
  color: white;
  font-size: 26px;
  border-radius: 38px;
  border: none;
  background-color: #ff1b6d;
`;
