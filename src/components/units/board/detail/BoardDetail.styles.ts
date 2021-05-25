import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const WrapperContent = styled.div`
  width: 1200px;
  height: 1602px;
  border: 1px solid black;
  margin: 100px;

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
  padding-left: 107px;
`;
export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WrapperRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WrapperColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WrapperColumnButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px;
`;
export const WrapperGoToList = styled.button`
  width: 179px;
  height: 52px;

  /* White */

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
`;
export const WrapperEditBoard = styled.button`
  width: 179px;
  height: 52px;

  /* White */

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
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
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
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
`;
export const DislikeIcon = styled.img`
  height: 20px;
  width: 20px;
`;
export const Video = styled.img`
    width: 486px;
    height 240px;
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
  height: 140px;
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

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-right: 24px;
  margin-bottom: 20px;
`;
export const InputCommentPassword = styled.input`
  width: 180px;
  height: 52px;
  /* White */

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-right: 24px;
  margin-bottom: 20px;
`;
export const InputCommentRating = styled.input`
  width: 180px;
  height: 52px;
  /* White */

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
export const InputCommentText = styled.textarea`
  width: 1200px;
  height: 109px;
  /* White */

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const InputCommentTextButton = styled.button`
  background: #000000;
  width: 91px;
  height: 52px;
  color: white;
`;
export const InputCommentMaxText = styled.div`
  height: 52px;
  width: 1109px;
  border: 1px solid #bdbdbd;
  user-select: none;
  margin-bottom: 40px;
`;
export const CommentName = styled.div`
  font-size: 16px;
  padding-left: 16px;
`;
export const CommentReview = styled.div`
  padding-left: 16px;
  margin-right: 800px;
`;
export const CommentContent = styled.div`
  font-size: 16px;
  padding-left: 16px;
`;
export const CommentDate = styled.div`
  font-size: 12px;
  padding-left: 16px;
`;
export const WrapperColumnComment = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 120px;
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
`;
export const WrapperRowCommentEditDelete = styled.div`
  width: 100%;
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