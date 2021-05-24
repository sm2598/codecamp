import {FETCH_BOARD, FETCH_COMMENTS, CREATE_COMMENT, EDIT_COMMENT} from './BoardDetail.queries'
import {useRouter} from 'next/router'
import {useQuery, useMutation} from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import {useState} from 'react'

export default function BoardDetail() {

    const router = useRouter()

    const inputsComment = {
        writer: "",
        contents: "",
        rating: 0,
    }
    const inputsCommentEdit = {
        contents: "",
        rating: "",
    }
    //Stating variables
    const [inputs, setInputs] = useState(inputsComment)
    const [inputsEdit, setInputsCommentEdit] = useState(inputsCommentEdit)
    const [password, setPassword] = useState("")
    const [createBoardComment] = useMutation(CREATE_COMMENT)
    const [updateBoardComment] = useMutation(EDIT_COMMENT)

    //Board자체를 Query
    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.id}
    })
    //Board에 있는 댓글 Query
    const { data: aaa } = useQuery(FETCH_COMMENTS, {
        variables: {boardId: router.query.id}
    })
    //댓글 PUSH -> mutation
    const onClickRegister = async (event) => {
        try {
            const result = await createBoardComment({
                variables: {
                    createBoardCommentInput: {...inputs},
                    boardId: router.query.id
                }
            })
            alert('댓글이 성공적으로 등록되었습니다.')
        } catch(error) {
            alert(error.message)
        }
	};
    //댓글 수정 -> mutation
    // const onClickEdit = async (event) => {
    //     try {
    //         const result = await updateBoardComment({
    //             variables: {
    //                 updateBoardCommentInput: {...inputsCommentEdit},
    //                 password: password,
    //                 boardCommentId: 
    //             }
    //         })
    //     }
    // }
    //Input값들을 state상태에 set
    const onChangeInput = (event) => {
        const newInputs = {...inputs, [event.target.name]: event.target.value }
        setInputs(newInputs)
    }

    return (
        <BoardDetailUI 
            data={data}
            onClickRegister={onClickRegister}
            onChangeInput={onChangeInput}
            aaa={aaa}
        />
    )
}