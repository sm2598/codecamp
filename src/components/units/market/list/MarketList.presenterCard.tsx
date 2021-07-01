import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  BestCardsContent,
  Credit,
  BestCardsIMG,
  BestCardsPrice,
  BestCardsTitle,
  BestCardsTopHalf,
  ItemsListHashtag,
  WrapperColumn,
  WrapperColumnBestCards,
  WrapperColumnBestCardsChild,
  WrapperColumnBestCardsContent,
  WrapperColumnBestContentInner,
  WrapperRowBest,
  WrapperRowBestCards,
} from "./MarketList.styles";

const MarketListCardUI = ({ usedItems }) => {
  const router = useRouter();
  const { createMarkup } = useContext(GlobalContext);
  const onClickRoutDetail = (event) => {
    router.push(`/market/${event.target.id}`);
  };
  console.log(usedItems?.fetchUseditems);

  return (
    <WrapperColumn>
      <WrapperColumn>
        <WrapperRowBest>
          {usedItems?.fetchUseditems.map((data) => (
            <WrapperColumnBestCards>
              <WrapperColumnBestCardsChild>
                <BestCardsTopHalf>
                  <BestCardsIMG src={data.images[0]} />
                </BestCardsTopHalf>
                <WrapperColumnBestCardsContent>
                  <BestCardsTitle id={data._id} onClick={onClickRoutDetail}>
                    {data.name}
                  </BestCardsTitle>
                  <WrapperRowBestCards>
                    <WrapperColumnBestContentInner>
                      {data.name === "" ? (
                        <div style={{ color: "grey" }}>
                          <em>제목이 없습니다</em>
                        </div>
                      ) : (
                        <BestCardsContent
                          // @ts-ignore
                          dangerouslySetInnerHTML={createMarkup(
                            data.contents.substring(0, 20)
                          )}
                        />
                      )}
                      <ItemsListHashtag>
                        {data.tags[0] === "" ? (
                          <div style={{ color: "grey" }}>
                            <em>등록된 태그가 없습니다</em>
                          </div>
                        ) : (
                          data.tags
                        )}
                      </ItemsListHashtag>
                      <BestCardsPrice>
                        <Credit src="/credit.svg" />
                        {data.price}원
                      </BestCardsPrice>
                    </WrapperColumnBestContentInner>
                    <WrapperColumnBestContentInner>
                      <img
                        src="/heartyellow.png"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <div>20</div>
                    </WrapperColumnBestContentInner>
                  </WrapperRowBestCards>
                </WrapperColumnBestCardsContent>
              </WrapperColumnBestCardsChild>
            </WrapperColumnBestCards>
          ))}
          {new Array(2).fill(1).map(() => (
            <WrapperColumnBestCards>
              <WrapperColumnBestCardsChild>
                <BestCardsTopHalf>
                  <BestCardsIMG src="/nyan-cat.gif" />
                </BestCardsTopHalf>
                <WrapperColumnBestCardsContent>
                  <BestCardsTitle>광고</BestCardsTitle>
                  <WrapperRowBestCards>
                    <WrapperColumnBestContentInner>
                      <BestCardsContent>광고</BestCardsContent>
                      <ItemsListHashtag>#광고</ItemsListHashtag>
                      <BestCardsPrice>무료</BestCardsPrice>
                    </WrapperColumnBestContentInner>
                    <WrapperColumnBestContentInner>
                      <img
                        src="/heartyellow.png"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      <div>20</div>
                    </WrapperColumnBestContentInner>
                  </WrapperRowBestCards>
                </WrapperColumnBestCardsContent>
              </WrapperColumnBestCardsChild>
            </WrapperColumnBestCards>
          ))}
        </WrapperRowBest>
      </WrapperColumn>
    </WrapperColumn>
  );
};

export default MarketListCardUI;
