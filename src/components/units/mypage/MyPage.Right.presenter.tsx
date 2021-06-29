import { WrapperSearchInputDiv } from "../market/list/MarketList.styles";
import {
  ButtonSearch,
  MyPageRightTopSelector,
  Search,
  SearchImg,
  WrapperColumn,
  WrapperRow,
  WrapperRowSearch,
  WrapperSearch,
} from "./MyPage.styles";
import { useState } from "react";

const MyPageRightUI = () => {
  // Search Items
  const [search, setSearch] = useState<string>("");
  const [storeSearch, setStoreSearch] = useState<string>(search);

  // onChange store search item to state
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  // onClick search item
  const onClickSearch = () => {
    setStoreSearch(search);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <WrapperColumn>
      <WrapperRow style={{ alignItems: "center" }}>
        <WrapperRow>
          <MyPageRightTopSelector>All Transactions</MyPageRightTopSelector>
          <MyPageRightTopSelector>Charged Transactions</MyPageRightTopSelector>
          <MyPageRightTopSelector>Purchase History</MyPageRightTopSelector>
          <MyPageRightTopSelector>Selling History</MyPageRightTopSelector>
        </WrapperRow>
        <WrapperSearch>
          <WrapperRowSearch>
            <WrapperSearchInputDiv>
              <SearchImg src="/search.png" />
              <Search
                type="input"
                placeholder="제목을 검색해주세요."
                onChange={onChangeSearch}
                onKeyDown={handleKeyDown}
              ></Search>
            </WrapperSearchInputDiv>
            <ButtonSearch onClick={onClickSearch}>Search</ButtonSearch>
          </WrapperRowSearch>
        </WrapperSearch>
      </WrapperRow>
    </WrapperColumn>
  );
};

export default MyPageRightUI;
