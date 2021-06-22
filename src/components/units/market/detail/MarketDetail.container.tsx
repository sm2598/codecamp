import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_USEDITEMQUESTION,
  FETCH_USEDITEM,
  FETCH_USEDITEMQUESTIONS,
} from "../detail/MarketDetail.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { useState } from "react";

const inputsComment = {
  contents: "",
};

const MarketDetail = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState(inputsComment);
  const [characterCount, setCharacterCount] = useState(0);

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEMQUESTION);
  const { data: comments, refetch } = useQuery(FETCH_USEDITEMQUESTIONS, {
    variables: {
      useditemId: router.query.id,
    },
  });

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setCharacterCount(event.target.value.length);
    setInputs({ ...newInputs });
    console.log(inputs);
  };
  const onClickRegister = async (event) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { ...inputs },
          useditemId: router.query.id,
        },
      });
      refetch();
    } catch (error) {
      alert(error.message);
    }
  };

  // const [refetch, { data: commentslazy }] = useLazyQuery(
  //   FETCH_USEDITEMQUESTIONS,
  //   {
  //     variables: {
  //       page: 1,
  //       useditemId: router.query.id,
  //     },
  //   }
  // );

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  return (
    <MarketDetailUI
      data={data}
      comments={comments}
      characterCount={characterCount}
      onChangeInput={onChangeInput}
      onClickRegister={onClickRegister}
      refetch={refetch}
    />
  );
};

export default MarketDetail;
