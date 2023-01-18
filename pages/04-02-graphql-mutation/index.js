import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "LioNY", title: "제목", contents: "내용") {
      number
      message
    }
  }
`;
// _app.js 파일 설정하기
export default function GraphqlMutationPage() {
  const [함수] = useMutation(CREATE_BOARD);

  // preflight : 사전요청, fetch : 실제요청
  const onClickSubmit = async () => {
    const res = await 함수();
    console.log(res);
    alert(res.data.createBoard.message);
  };

  return (
    <>
      <div>Graphql Api</div>
      <button onClick={onClickSubmit}>동기 요청</button>

      <div>
        <b>Get started with Apollo Client</b>
        <div>https://www.apollographql.com/docs/react/get-started</div>
      </div>
    </>
  );
}
