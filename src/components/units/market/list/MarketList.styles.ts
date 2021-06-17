import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  animation-duration: 3s;
  animation-name: show;

  @keyframes show {
    from {
      transform: translateX(00px);
      opacity: 0;
    }
    to {
      transform: translateX(00px);
      opacity: 1;
    }
  }
`
export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width:1200px;
  width: 100%;
  align-items: center;
`
export const WrapperColumnItemsList = styled.div`
  display: flex;
  flex-direction: column;
  max-width:1200px;
  width: 100%;
  align-items: center;
  border-top: 1px solid #BDBDBD;
  margin-bottom: 50px;
`
export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const WrapperColumnBestContentInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const WrapperRowUser = styled.div`
  display: flex;
  flex-direction: row;
`
export const WrapperRowButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: right;
  margin-bottom: 400px;
`
export const WrapperRowItemsList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid #BDBDBD;

  &:hover {
    background: #fafafa;
  }
`
export const WrapperRowItemsListChild = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const WrapperRowButtonInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 52px;
  flex-wrap: wrap;
`
export const WrapperRowBest = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 80px;
  cursor: pointer;
  flex-wrap: wrap;
`
export const WrapperColumnBestCardsTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;

  /* Black */
  color: #000000;

  margin-bottom: 40px;
`
export const WrapperColumnBestCards = styled.div`
  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  width: 282px;
  height: 391px;

  margin-bottom: 20px;
  transition-duration: 0.3s;

  &:hover {
    background: #F2F2F2;
    transition-duration: 0.3s;
    opacity: 0.9;
    transform: scale(1.05, 1.05);
  }
`
export const WrapperColumnBestCardsChild = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`
export const BestCardsTopHalf = styled.div`
  padding: 0px 0px 10px 0px;
`

export const BestCardsIMG = styled.img`
  max-width: 242px;
  width: 100%;
  height: 242px;

  object-fit: cover;
`
export const WrapperRowBestCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const WrapperRowButtonSelling = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 200px;
  width: 100%;
`
export const WrapperColumnBestCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const BestCardsTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`
export const BestCardsContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  /* Gray 2 */
  color: #4F4F4F;
`
export const BestCardsPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  display: flex;
  align-items: center;
`
interface IProps {
  isActive: boolean;
}
export const ButtonSelling = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  border:none;
  background-color: transparent;

  cursor: pointer;

  color: ${(props: IProps) => (props.isActive ? "#FFD600" : "black")};

  &:hover {
    transition: 0.3s;
    color: #FFD600;
  }
`
export const ButtonShowType = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  border:none;
  background-color: transparent;

  cursor: pointer;

  color: ${(props: IProps) => (props.isActive ? "#FFD600" : "black")};

  &:hover {
    transition: 0.3s;
    color: #FFD600;
  }
`
export const Search = styled.input`
  width: 488px;
  height: 52px;

  background: #f2f2f2;
  border-radius: 10px;
  border: none;

  padding-left: 12px;

  font-size: 16px;
  outline: none;
`;
export const WrapperSearchInputDiv = styled.div`
  max-width: 500px;
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #f2f2f2;
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
  border: none;

  cursor: pointer;
  &:active {
    background: lightgrey;
  }
`;
export const ItemsListImg = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 16px;
`
export const ItemsListTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 4px;
`
export const ItemsListContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`
export const ItemsListHashtag = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #828282;
`
export const ItemsListPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  width: 100%;
`
export const ItemsListUser = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`
export const ItemsListUserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`
export const ItemsListLikes = styled.div`
  font-weight: normal;
  font-size: 16px;
`
export const ButtonCreateItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 124px;
  height: 52px;

  /* White */

  background: #FFFFFF;
  /* Black */

  border: 1px solid #000000;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`
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

  background: #ffffff;
  /* Gray 6 */

  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 10px;

  cursor: pointer;

  &:active {
    background-color: #bdbdbd;
  }
`;
export const WrapperPaginationButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const WrapperRowPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  width: 100%;

  margin-bottom: 450px;
`;
export const Page = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;

  color: ${(props: IProps) => (props.isActive ? "#FFD600" : "black")};
  font-weight: ${(props: IProps) => (props.isActive ? "bold" : "normal")};
`;
export const Credit = styled.img`
  max-width: 18px;
  width: 100%;
  margin-right: 11px;
`