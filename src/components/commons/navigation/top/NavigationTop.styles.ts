import styled from "@emotion/styled";

export const Wrapper = styled.div`

`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const WrapperRowTop = styled.div`
  width: 100%;
  height: 152px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: white;
`;
export const WrapperRowMiddle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WrapperRow = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperRowButtonsTop = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WrapperRowBottom = styled.div`

  width: 100%;
  height: 64px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:-4px;
  background-color: #FFD600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);

  margin-bottom: 80px;
`;
export const Logo = styled.img`
  width: 210px;
  height: 32px;

  cursor: pointer;
`
export const Button = styled.button`
  color: #514400;
  background-color: #FFD600;
  border: none;
  padding-left: 41px;
  padding-right: 41px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    background: lightgrey;
    transition: 0.3s;
    opacity: 0.4;
  }
`
export const ButtonLogIn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  background: white;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  border-radius: 10px;

  &:hover {
    background: lightgrey;
    transition: 0.3s;
    opacity: 0.4;
  }
`
export const ButtonSignUp = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  background: #FFD600;
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background: lightgrey;
    transition: 0.3s;
    opacity: 0.4;
  }
`
interface IProps {
  onPage: boolean;
}