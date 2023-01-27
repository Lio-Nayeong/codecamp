import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

// 자바스크립트(기능)
export default function BoardWrite() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  const onClickSubmit = async () => {
    const res = await createBoard({
      variables: { writer: writer, title: title, contents: contents },
    });
    console.log(res);
    alert(res.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value && title && contents) {
      setIsTrue(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (writer && event.target.value && contents) {
      setIsTrue(true);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);

    if (writer && title && event.target.value) {
      setIsTrue(true);
    }
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isTrue={isTrue}
    />
  );
}
