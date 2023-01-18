import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const res = await createBoard({
      // variables = $
      variables: { writer: writer, title: title, contents: contents },
    });
    console.log(res);
    alert(res.data.createBoard.message);
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
    <>
      <div>
        Graphql Api - <i>createBoard</i>
      </div>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter}></input>
      </div>
      <div>
        제목 : <input type="text" onChange={onChangeTitle}></input>
      </div>
      <div>
        내용 : <input type="text" onChange={onChangeContents}></input>
      </div>
      <button onClick={onClickSubmit}>동기 요청</button>
    </>
  );
}
