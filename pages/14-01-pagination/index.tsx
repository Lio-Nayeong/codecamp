import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationPage() {
  const [startPage, setStartPage] = useState(1);

  // yarn generate
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 5)
      : 0;
  // console.log(lastPage);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    void refetch({ page: startPage - 5 });
  };
  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      void refetch({ page: startPage + 5 });
    }
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span>{el.writer} : </span>
          <span>{el.title}</span>
        </div>
      ))}

      <div>===============</div>

      <span onClick={onClickPrevPage}> 이전 </span>
      {Array(5)
        .fill(1)
        .map(
          (_, index) =>
            index + startPage <= lastPage && (
              <span
                key={index + startPage}
                onClick={onClickPage}
                id={String(index + startPage)}
                style={{ margin: "5px" }}
              >
                {index + startPage}
              </span>
            )
        )}
      <span onClick={onClickNextPage}> 다음 </span>
    </>
  );
}
