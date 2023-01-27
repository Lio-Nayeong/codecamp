import { Title, BlueButton } from "./BoardWrite.styles";

// JSX (UI)
export default function BoardWriteUI(props) {
  return (
    <>
      <Title>
        Graphql Api : <i>04-03-copy</i> + container / presentational 패턴
      </Title>
      <div>
        작성자 : <input type="text" onChange={props.onChangeWriter}></input>
      </div>
      <div>
        제목 : <input type="text" onChange={props.onChangeTitle}></input>
      </div>
      <div>
        내용 : <input type="text" onChange={props.onChangeContents}></input>
      </div>
      <BlueButton onClick={props.onClickSubmit}>동기 요청</BlueButton>
    </>
  );
}
