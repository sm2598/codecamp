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
export const WrapperColumnList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 57px;
`;
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #BDBDBD;;
  border-top: none;
  border-left: none;
  border-right: none;
  
  &:hover {background-color: #F2F2F2; transition: 0.2s}
`;
export const WrapperRowBestCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const WrapperBestText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
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
  width: 114px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #4F4F4F;
`;
export const Title = styled.div`
  width: 700px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #4F4F4F;
  cursor: pointer;
`;
export const Author = styled.div`
  width: 224px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #4F4F4F;
`;
export const CreatedAt = styled.div`
  width: 162px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #4F4F4F;
`;
export const WrapperList = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
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
export const WrapperBest = styled.div`
  height: 257px;
  width: 282px;
  padding-left: 20px;
  padding-right: 20px;

  background: #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  &:hover {
    background: #E0E0E0;
    transition: all 0.3s;
    opacity: 0.9;
    transform: scale(1.05, 1.05);
  }
`
export const BestImg = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const WrapperBestColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 50%;
`;
export const WrapperBestColumnChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperTitle = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
`;
export const WrapperBestRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 6px;
`;
export const TitleBest = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* identical to box height */
  /* Black */
  padding-top: 15px;
  padding-bottom: 15px;
  color: #000000;
`;
export const Best = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin-bottom: 40px;
  /* Black */

  color: #000000;
`
export const BestDate = styled.div`
  color: #828282;
  font-size: 12px;
`
export const LikeIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-bottom: 6px;
`;
export const LikeColor = styled.div`
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;
export const WrapperRowBestOfBest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;
  margin-bottom: 80px;

  cursor: pointer;
`;
export const WrapperSearch = styled.div`
  width: 100%;
  max-width: 1200px;

  margin-bottom: 48px;
`;
export const WrapperRowSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Search = styled.input`
  width: 488px;
  height: 52px;

  background: #F2F2F2;
  border-radius: 10px;
  border: none;

  padding-left: 12px;

  font-size: 16px;
  outline: none;
`
export const WrapperSearchInputDiv = styled.div`
  width: 588px;
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #F2F2F2;
  border-radius: 10px;
  border: none;
`
export const SearchImg = styled.img`
  width: 17.5px;
  height: 17.5px;
  margin-left: 19px;

  cursor: pointer;
`
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
  &:active{
    background: lightgrey;
  }
`
export const WrapperRowPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;

  margin-bottom: 450px;
`;
interface IProps {
  isActive: boolean;
}
export const Page = styled.span`
  padding-left: 15px;
  padding-right: 15px; 
  cursor: pointer; 
  
  color: ${(props: IProps) => props.isActive ? '#FFD600' : 'black'};
  font-weight: ${(props: IProps) => props.isActive ? 'bold' : 'normal'};
`
export const ButtonWriteNewBoard = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 16px;

  width: 171px;
  height: 52px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  background: #FFFFFF;
  /* Gray 6 */

  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 10px;

  cursor: pointer;

  &:active {
    background-color: #BDBDBD;
  }
`;
export const ButtonFilter = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 16px;

  width: 171px;
  height: 52px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  background: #FFFFFF;
  /* Gray 6 */

  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 10px;

  cursor: pointer;

  &:active {
    background-color: #BDBDBD;
  }
`;
export const WrapperPaginationButtons = styled.div`
`