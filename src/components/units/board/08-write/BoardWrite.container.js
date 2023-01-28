import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";

// 자바스크립트(기능)
export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const res = await createBoard({
      variables: { writer, title, contents },
    });
    console.log(res);
    alert(res.data.createBoard.message);
    router.push(`/08-03-boards/${res.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const res = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer,
        title,
        contents,
      },
    });
    console.log(res);
    alert(res.data.updateBoard.message);
    router.push(`/08-03-boards/${res.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
    />
  );
}
