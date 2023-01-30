import { useQuery, gql } from "@apollo/client";
import Router, { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  console.log(data);

  const onClickBack = () => {
    Router.back();
  };
  const onClickMoveToEdit = () => {
    router.push(`/10-01-typescript-boards/${router.query.number}/edit`);
  };

  return (
    <>
      <div>{router.query.number} 페이지 이동 완료</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      <button onClick={onClickBack}>뒤로가기</button>
      <button onClick={onClickMoveToEdit}>수정하기</button>
    </>
  );
}
