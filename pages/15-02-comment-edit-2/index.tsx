import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function CommentPage() {
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickIsEdit = (event: MouseEvent<HTMLButtonElement>) => {
    const indexEdits = [...isEdits];
    indexEdits[Number(event.currentTarget.id)] = true;
    setIsEdits(indexEdits);
  };

  return (
    <>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {!isEdits[index] && (
            <div>
              <span>{el.writer} : </span>
              <span>{el.title}</span>
              <button id={String(index)} onClick={onClickIsEdit}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] && (
            <div>
              <span>
                {el.writer} : <input type="text" value={el.title} />
              </span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
