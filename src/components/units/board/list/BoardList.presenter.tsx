import {
  Wrapper,
  WrapperRow,
  WrapperColumn,
  HeaderRow,
  Author,
  ID,
  Title,
  CreatedAt,
  WrapperBestColumn,
  WrapperBestRow,
  WrapperBestColumnChild,
  WrapperBest,
  TitleBest,
  Best,
  Page,
  LikeIcon,
  LikeColor,
  BestDate,
  BestImg,
  WrapperRowBestOfBest,
  WrapperRowBestCards,
  WrapperBestText,
  WrapperList,
  WrapperRowPagination,
  WrapperColumnList,
  WrapperSearch,
  WrapperRowSearch,
  ButtonSearch,
  Search,
  SearchImg,
  WrapperSearchInputDiv,
  WrapperTitle,
  ButtonWriteNewBoard,
  WrapperPaginationButtons,
  ButtonFilter,
  WrapperListItems,
  WrapperLoading,
  WrapperRowHashtag,
  ButtonHashtag,
} from "./BoardList.styles";
import FirstPageRoundedIcon from "@material-ui/icons/FirstPageRounded";
import LastPageRoundedIcon from "@material-ui/icons/LastPageRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

export default function BoardListUI({
  result,
  onClickSearch,
  onChangeSearch,
  onLeftFirstArrowClick,
  onRightLastArrowClick,
  data,
  holder,
  onLeftArrowClick,
  boardscount,
  onRightArrowClick,
  onClickRouterToNewBoard,
  onClickToBoard,
  onClickPage,
  currentPage,
  best,
  onClickToCard,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <Wrapper>
      {/* 베스트 게시물 4개 */}
      <WrapperBestText>
        <Best>Top Posts</Best>
      </WrapperBestText>
      <WrapperRowBestOfBest>
        {best?.fetchBoardsOfTheBest.map((best) => (
          <WrapperColumn>
            <WrapperRowBestCards>
              <WrapperBest>
                <WrapperBestColumn>
                  <BestImg src={"/temp.png"} />
                </WrapperBestColumn>
                <WrapperBestColumn>
                  <WrapperTitle>
                    <TitleBest id={best._id} onClick={onClickToCard}>
                      {best.title}
                    </TitleBest>
                  </WrapperTitle>
                  <WrapperBestRow>
                    <WrapperBestColumnChild>
                      <WrapperBestRow>{best.writer}</WrapperBestRow>
                      <WrapperBestRow>
                        <BestDate>
                          {"Date: " +
                            best.createdAt.slice(0, 10).replaceAll("-", ".")}
                        </BestDate>
                      </WrapperBestRow>
                    </WrapperBestColumnChild>
                    <WrapperBestColumnChild>
                      <LikeIcon src="/likebutton.png" />
                      <LikeColor>{best.likeCount}</LikeColor>
                    </WrapperBestColumnChild>
                  </WrapperBestRow>
                </WrapperBestColumn>
              </WrapperBest>
            </WrapperRowBestCards>
          </WrapperColumn>
        ))}
      </WrapperRowBestOfBest>
      {/* 게시판 목록 검색 */}
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
      {/* 게시판 목록 */}
      <WrapperColumn>
        <WrapperList>
          <WrapperColumnList>
            <WrapperRow>
              <HeaderRow>
                <ID>
                  <strong>Number</strong>
                </ID>
                <Title>
                  <strong>Title</strong>
                </Title>
                <Author>
                  <strong>Writer</strong>
                </Author>
                <CreatedAt>
                  <strong>Date</strong>
                </CreatedAt>
              </HeaderRow>
            </WrapperRow>
            <div>
              <WrapperListItems>
                {!data ? (
                  <WrapperLoading>
                    <img src="/spinner.gif" />
                  </WrapperLoading>
                ) : (
                  data?.fetchBoards.map((data, index) => (
                    <WrapperRow>
                      <ID>{result - index}</ID>
                      <Title id={data._id} onClick={onClickToBoard}>
                        {data.title}
                      </Title>
                      <Author>{data.writer}</Author>
                      <CreatedAt>
                        {data.createdAt.slice(0, 10).replaceAll("-", ".")}
                      </CreatedAt>
                    </WrapperRow>
                  ))
                )}
              </WrapperListItems>
              {/* <WrapperLoading>
                  <img src="/spinner.gif"/>    
                </WrapperLoading> */}
            </div>
          </WrapperColumnList>
        </WrapperList>
        <WrapperRowPagination>
          <ButtonFilter>
            <img src="/filter.png" style={{ height: 18, width: 18 }} />
            Filter
          </ButtonFilter>
          <WrapperPaginationButtons>
            <FirstPageRoundedIcon onClick={onLeftFirstArrowClick} />
            <ChevronLeftRoundedIcon onClick={onLeftArrowClick} />
            {new Array(10)
              .fill(1)
              .filter(
                (_, index) =>
                  index + holder <=
                  Math.ceil(boardscount?.fetchBoardsCount / 10)
              )
              .map((_, index) => (
                <Page
                  id={String(index + holder)}
                  onClick={onClickPage}
                  isActive={currentPage == index + holder}
                >
                  {index + holder}
                </Page>
              ))}
            <ChevronRightRoundedIcon onClick={onRightArrowClick} />
            <LastPageRoundedIcon onClick={onRightLastArrowClick} />
          </WrapperPaginationButtons>
          <ButtonWriteNewBoard onClick={onClickRouterToNewBoard}>
            <img src="/writeNew.png" style={{ height: 18, width: 18 }} />
            Write a Post
          </ButtonWriteNewBoard>
        </WrapperRowPagination>
      </WrapperColumn>
    </Wrapper>
  );
}
