import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperContent = styled.div`
  width: 1200px;
  height: 1602px;
  border: 1px solid black;

  padding-top: 80px;
  padding-left: 107px;
  padding-right: 107px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const WrapperComments = styled.div`
  width: 1200px;
  height: auto;
  margin-bottom: 100px;
`;
export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;

  cursor: pointer;
`;
export const WrapperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WrapperRowBoardCreator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #BDBDBD;
  border-top: none;
  border-left: none;
  border-right: none;
`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperColumnButton = styled.div`
  width: 100%;
  max-width: 1200px;
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
  &:active {background: #FFD600;}
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
  &:active {background: #FFD600;}
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
  margin-bottom: 20px;
`;
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;

  outline: none;
`;
export const PostTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 80px;
`;
export const InputWrapper = styled.div`
  padding-top: 40px;
`;
export const ProfileIcon = styled.img`
  height: 53px;
  width: 53px;
`;
export const ProfileIconComment = styled.img`
  height: 40px;
  width: 40px;
`;
export const LikeIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
export const DislikeIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
export const Video = styled.img`
`;
export const Concert = styled.img`
  height: 480px;
  width: 996px;
  margin-bottom: 40px;
`;
export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const PostContent = styled.div`
  width: 996px;
  font-size: 16px;
  height: 200px;
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
  width: 1200px;
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
  border-right: 1px solid #BDBDBD;
  border-bottom: 1px solid #BDBDBD;
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
  color: #BDBDBD;
  font-size: 16px;
`;
export const CommentName = styled.div`
  font-size: 16px;
  padding-left: 16px;
  margin-bottom: 4px;
`;
export const CommentReview = styled.div`
  padding-left: 16px;
  margin-bottom: 4px;
`;
export const CommentContent = styled.div`
  font-size: 16px;
  padding-left: 16px;
  margin-bottom: 20px;
`;
export const CommentDate = styled.div`
  font-size: 12px;
  padding-left: 16px;
`;
export const WrapperColumnComment = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid #bdbdbd;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-top: 10px;
`;
export const WrapperColumnCommentTop = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
export const WrapperCommentEdit = styled.div`
`;
export const LikeColor = styled.div`
  color: #FFD600;
`;
export const DislikeColor = styled.div`
  color: #828282;
`;
export const WrapperColumnBoardBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 996px;
  width: 100%;
`
export const WrapperYouTubePlayer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 163px;
`
export const WrapperCommentEditDelete = styled.div`
`
export const WrapperRowCommentLeftRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrapperNameReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-around;
`
export const WrapperRowLikeButtons = styled.div`
  width: 100%;
  max-width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const WrapperRowButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Star = styled.img`
  height: 20px;
  width: 20px;
`
export const WrapperColumnLikeButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left:30px;
  padding-right:30px;
`;
export const WrapperCenterLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InputCommentTextEdit = styled.textarea`
  width: 1200px;
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
  background: #FFD600;
  width: 91px;
  height: 52px;
  color: black;

  font-size: 16px;
  
  
  border-top: none;
  border-left: none;
  border-right: 1px solid #BDBDBD;
  border-bottom: 1px solid #BDBDBD;
`;