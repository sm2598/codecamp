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
  ButtonFilter
} from "./BoardList.styles";
import FirstPageRoundedIcon from '@material-ui/icons/FirstPageRounded';
import LastPageRoundedIcon from '@material-ui/icons/LastPageRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';


export default function BoardListUI({ onLeftFirstArrowClick, onRightLastArrowClick, data, holder, onLeftArrowClick, boardscount, onRightArrowClick, onClickRouterToNewBoard, onClickToBoard, onClickPage, currentPage, best, onClickToCard }) {
  return (
    <Wrapper>
      {/* 베스트 게시물 4개 */}
      <WrapperBestText>
        <Best>베스트 게시글</Best>
      </WrapperBestText>
      <WrapperRowBestOfBest>
        {best?.fetchBoardsOfTheBest.map((best) => 
          <WrapperColumn >
          <WrapperRowBestCards  >
            <WrapperBest>
              <WrapperBestColumn>
                <BestImg src="/temp.png"/>
              </WrapperBestColumn>
              <WrapperBestColumn>
                <WrapperTitle>
                  <TitleBest id={best._id} onClick={onClickToCard} >{best.title}</TitleBest>
                </WrapperTitle>
                <WrapperBestRow>
                  <WrapperBestColumnChild>
                    <WrapperBestRow>
                      {best.writer}
                    </WrapperBestRow>
                    <WrapperBestRow>
                      <BestDate>Date: {best.createdAt.slice(0, 10).replaceAll("-", ".")}</BestDate>
                    </WrapperBestRow>
                  </WrapperBestColumnChild>
                  <WrapperBestColumnChild>
                    <LikeIcon src='/likebutton.png'/><LikeColor>{best.likeCount}</LikeColor>                
                  </WrapperBestColumnChild>
                </WrapperBestRow>
              </WrapperBestColumn>
            </WrapperBest>
          </WrapperRowBestCards>
        </WrapperColumn>
        )}
      </WrapperRowBestOfBest>
      {/* 게시판 목록 검색 */}
      <WrapperSearch>
        <WrapperRowSearch>
          <WrapperSearchInputDiv>
            <SearchImg src="/search.png"/>
            <Search placeholder="제목을 검색해주세요."></Search>
          </WrapperSearchInputDiv>
          <ButtonSearch>검색하기</ButtonSearch>
        </WrapperRowSearch>
      </WrapperSearch>
      {/* 게시판 목록 */}
      <WrapperColumn>
          <WrapperList>
            <WrapperColumnList>
              <WrapperRow>
                <HeaderRow>
                  <ID><strong>번호</strong></ID>
                  <Title><strong>제목</strong></Title>
                  <Author><strong>작성자</strong></Author>
                  <CreatedAt><strong>날짜</strong></CreatedAt>
                </HeaderRow>
              </WrapperRow>
              {data?.fetchBoards.map((data, index) => (
                <WrapperRow>
                  <ID>{index + 1}</ID>
                  <Title id={data._id} onClick={onClickToBoard}>{data.title}</Title>
                  <Author>{data.writer}</Author>
                  <CreatedAt>
                    {data.createdAt.slice(0, 10).replaceAll("-", ".")}
                  </CreatedAt>
                </WrapperRow>
              ))}
            </WrapperColumnList>
          </WrapperList>
        <WrapperRowPagination>
          <ButtonFilter><img src='/filter.png' style={{height: 18, width: 18}}/>정렬</ButtonFilter>
          <WrapperPaginationButtons>
            <FirstPageRoundedIcon onClick={onLeftFirstArrowClick}/>
            <ChevronLeftRoundedIcon onClick={onLeftArrowClick}/>
            {new Array(10).fill(1).filter((_,index) => index+holder <= Math.ceil(boardscount?.fetchBoardsCount/10)).map((_, index) => (
              <Page id={String(index + holder)} onClick={onClickPage} isActive={currentPage == index+holder}>
                {index+holder}
              </Page>
            ))}
            <ChevronRightRoundedIcon onClick={onRightArrowClick}/>
            <LastPageRoundedIcon onClick={onRightLastArrowClick}/>
          </WrapperPaginationButtons>
          <ButtonWriteNewBoard onClick={onClickRouterToNewBoard}><img src='/writeNew.png' style={{height: 18, width: 18}}/>게시물 등록하기</ButtonWriteNewBoard>
        </WrapperRowPagination>
      </WrapperColumn>
    </Wrapper>
  );
}
