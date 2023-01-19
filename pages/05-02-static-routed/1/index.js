import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 12500 },
  }); // 자동 실행
  console.log(data);

  return (
    <>
      <div>Board 페이지 이동 완료</div>
      {/* 삼항 연산자 */}
      <div>제목 : {data ? data.fetchBoard.title : "Loading"}</div>
      {/* && 연산자 */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>
      {/* 옵셔널 체이닝 (Optional-Chaining) */}
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  );
}
