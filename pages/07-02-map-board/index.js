import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
  border: 1px solid black;
`;
const Column = styled.div`
  width: 25%;
  margin: 5px;
`;
const Column2 = styled.div`
  width: 12%;
  margin: 5px 3px;
`;

export default function DynamicRoutedPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = async (event) => {
    try {
      const res = await deleteBoard({
        variables: {
          number: Number(event.target.id),
        },
        // refetchQuery는 기존에 받아왔던 데이터가 변경 되었을 경우
        // 최신 데이터로 다시 fetch 해주기 위해 사용함
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      alert(res.data.deleteBoard.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el.number}>
          <Column2>
            <input type="checkbox"></input>
          </Column2>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <Column2>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column2>
        </Row>
      ))}
    </>
  );
}
