import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import {
  CommentEditDelete,
  InputCommentPassword,
} from "../../../components/units/board/detail/BoardDetail.styles";
import {
  FETCH_COMMENTS,
  DELETE_COMMENT,
} from "../../../components/units/board/detail/BoardDetail.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

// Material UI
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteModal({ comments, isClicked, setIsClicked }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  // Stating gql components
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  // State handle
  const [password, setPassword] = useState("");

  // Material UI
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // Password change
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // 댓글 삭제 -> mutation
  const onClickDeleteComment = async (event) => {
    try {
      setTimeout(async function () {
        const result = await deleteBoardComment({
          variables: {
            password: password,
            boardCommentId: comments._id,
          },
          refetchQueries: [
            { query: FETCH_COMMENTS, variables: { boardId: router.query.id } },
          ],
        });
      }, 3000);

      setOpen(false);
      alert("성공적으로 삭제하셨습니다.");
      setIsClicked(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <CommentEditDelete src="/commentdelete.png" onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"비밀번호를 입력해주세요"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <InputCommentPassword
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
            ></InputCommentPassword>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            id={comments._id}
            onClick={onClickDeleteComment}
            color="primary"
          >
            댓글 지우기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
