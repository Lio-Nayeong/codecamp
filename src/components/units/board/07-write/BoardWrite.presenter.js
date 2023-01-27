import * as S from "./BoardWrite.styles";

// JSX (UI)
export default function BoardWriteUI(props) {
  return (
    <>
      <S.Title>emotion props & setState</S.Title>
      <div>
        작성자 : <input type="text" onChange={props.onChangeWriter}></input>
      </div>
      <div>
        제목 :{" "}
        <S.RedInput type="text" onChange={props.onChangeTitle}></S.RedInput>
      </div>
      <div>
        내용 : <input type="text" onChange={props.onChangeContents}></input>
      </div>
      <S.BlueButton
        fontSize="20px"
        backgroundColor="lightblue"
        check={props.isTrue}
        onClick={props.onClickSubmit}
      >
        동기 요청
      </S.BlueButton>
    </>
  );
}
