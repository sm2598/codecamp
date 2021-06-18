import styled from "@emotion/styled";

export const WrapperContent = styled.div`
  max-width: 792px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WrapperRowContentTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperRowBoardCreator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const WrapperColumnHeart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
export const WrapperColumnButton = styled.div`
  width: 100%;
  max-width: 792px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px;
`;
export const WrapperGoToList = styled.button`
  width: 179px;
  height: 52px;

  /* White */

  background: #ffffff;
  /* Gray 4 */
  font-size: 16px;
  padding: 12px;

  margin: 12px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  &:active {
    background: #ffd600;
  }
`;
export const WrapperEditBoard = styled.button`
  width: 179px;
  height: 52px;

  /* White */

  background: #ffffff;
  /* Gray 4 */
  font-size: 16px;
  padding: 12px;

  margin: 12px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  &:active {
    background: #ffd600;
  }
`;
export const WrapperRowButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const WrapperProfileIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileIcon = styled.img`
  height: 53px;
  width: 53px;
`;
export const WrapperUserInfoColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
`;
export const Name = styled.div`
  font-size: 24px;
`;
export const DateCreated = styled.div`
  color: #828282;
  font-size: 16px;
`;
export const WrapperLinkMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImgLink = styled.img`
  height: 24px;
  width: 24px;
`;
export const ImgMap = styled.img`
  height: 24px;
  width: 24px;
`;
export const PostTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  color: #4f4f4f;
`;
export const PostContent = styled.div`
  max-width: 996px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 40px;
  /* Gray 2 */

  color: #4f4f4f;
`;
export const PostRemarks = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: #bdbdbd;
`;
export const PostPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
`;
export const Holder = styled.img`
  height: 482px;
  width: 504px;
`;
export const PostTags = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: #bdbdbd;
  margin-bottom: 40px;
`;
export const Linebreak = styled.hr`
  max-width: 792px;
  width: 100%;
  height: 1px;

  background: #bdbdbd;
`;
export const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperComments = styled.div`
  max-width: 1200px;
  width: 100%;
  height: auto;
  margin-bottom: 100px;
`;
export const CommentIcon = styled.img`
  margin-bottom: 20px;
  margin-right: 14px;
`;
export const CommentText = styled.div`
  margin-bottom: 20px;
`;
export const InputCommentAuthor = styled.input`
  width: 180px;
  height: 52px;
  /* White */

  font-size: 16px;

  background: #ffffff;
  /* Gray 4 */

  padding-left: 20px;
  outline: none;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-right: 24px;
  margin-bottom: 20px;
`;
export const InputCommentPassword = styled.input`
  width: 180px;
  height: 52px;
  /* White */

  font-size: 16px;

  background: #ffffff;
  /* Gray 4 */
  outline: none;
  padding-left: 20px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-right: 24px;
  margin-bottom: 20px;
`;
export const InputCommentRating = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 20px;
`;
export const InputCommentText = styled.textarea`
  max-width: 1200px;
  width: 100%;
  height: 108px;
  /* White */

  background: #ffffff;
  /* Gray 4 */
  outline: none;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 16px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  resize: none;
`;
export const InputCommentTextButton = styled.button`
  background: #000000;
  width: 91px;
  height: 52px;
  color: white;

  font-size: 16px;
  border: none;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;
export const InputCommentMaxText = styled.div`
  height: 52px;
  width: 1109px;
  border: 1px solid #bdbdbd;
  border-top: none;
  user-select: none;
  margin-bottom: 40px;

  padding-left: 20px;
  align-items: center;
  color: #bdbdbd;
  font-size: 16px;
`;
export const WrapperColumnCommentTop = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const CommentEditDelete = styled.img`
  height: 14px;
  width: 14px;
  cursor: pointer;
`;
export const WrapperRowCommentEditDelete = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: row-reverse;
`;

interface IProps {
  index: number;
  isClicked: boolean;
}
export const WrapperColumnComment = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-top: 20px;

  ${({ index }: IProps) =>
    index === 0
      ? `
    animation-duration: 2s;
    animation-name: show;

    @keyframes show {
      from{
        transform: translateY(-100px);
        opacity: 0;
      }
      to{
        transform: translateY(0);
        opacity: 1;
      }
    }
  `
      : ""}
  ${({ isClicked }: IProps) =>
    isClicked
      ? `
    animation-duration: 2s;
    animation-name: delete;

    @keyframes delete {
      from{
        transform: translateX(0);
        opacity: 1;
      }
      to{
        transform: translateX(200%);
        opacity: 0;
      }
    }
  `
      : ""}
`;
export const CommentContent = styled.div`
  font-size: 16px;
  padding-left: 16px;
  margin-bottom: 20px;
`;
export const ProfileIconComment = styled.img`
  height: 40px;
  width: 40px;
`;
export const CommentName = styled.div`
  font-size: 16px;
  padding-left: 16px;
  padding-bottom: 2px;
`;
export const CommentDate = styled.div`
  padding-left: 16px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  /* Gray 4 */

  color: #bdbdbd;
`;
export const WrapperNameReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-around;
`;
export const WrapperRowCommentLeftRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperCommentEditDelete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 44px;
  width: 100%;
`;
export const InputCommentTextEdit = styled.textarea`
  max-width: 1200px;
  width: 100%;
  height: 64px;
  /* White */

  background: #ffffff;
  /* Gray 4 */

  outline: none;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 16px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  resize: none;
`;
export const InputCommentTextButtonEdit = styled.button`
  background: #ffd600;
  width: 91px;
  height: 52px;
  color: black;

  font-size: 16px;

  border-top: none;
  border-left: none;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;
export const WrapperRowCommentNew = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
