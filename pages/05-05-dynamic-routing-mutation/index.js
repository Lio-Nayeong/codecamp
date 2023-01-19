import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    try {
      const res = await createBoard({
        variables: { writer, title, contents },
      });
      console.log(res);
      alert(res.data.createBoard.message);
      router.push(`/05-04-dynamic-routed/${res.data.createBoard.number}`);
    } catch (error) {
      alert(error.message);
    }
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
        Graphql Api : <i>04-03-copy</i> + 동적 라우터
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
