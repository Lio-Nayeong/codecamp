import {
  IMutation,
  IMutationCreateBoardArgs,
} from "@/src/commons/types/generated/types";
import { useMutation, gql } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSubmit = async () => {
    const res = await createBoard({
      variables: { writer: writer, title: title, contents: contents },
    });
    console.log(res);
    alert(res.data?.createBoard?.message);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
