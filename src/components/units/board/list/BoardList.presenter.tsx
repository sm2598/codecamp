import {
  Wrapper,
  WrapperRow,
  WrapperColumn,
  HeaderRow,
  Author,
  ID,
  Title,
  CreatedAt,
  SelectDelete,
} from "./BoardList.styles";

export default function BoardListUI({ data }) {
  console.log(data?.fetchBoards);
  return (
    <Wrapper>
      <WrapperColumn>
        <WrapperRow>
          <HeaderRow>
            <ID>
              <strong>번호</strong>
            </ID>
            <Title>
              <strong>제목</strong>
            </Title>
            <Author>
              <strong>작성자</strong>
            </Author>
            <CreatedAt>
              <strong>날짜</strong>
            </CreatedAt>
          </HeaderRow>
        </WrapperRow>
        {data?.fetchBoards.map((data) => (
          <WrapperRow>
            <ID>{data.number}</ID>
            <Title>{data.title}</Title>
            <Author>{data.writer}</Author>
            <CreatedAt>
              {data.createdAt.slice(0, 10).replaceAll("-", ".")}
            </CreatedAt>
          </WrapperRow>
        ))}
        <SelectDelete>선택 삭제</SelectDelete>
      </WrapperColumn>
    </Wrapper>
  );
}
