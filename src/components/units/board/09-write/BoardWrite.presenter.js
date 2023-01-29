import * as S from "./BoardWrite.styles";

// JSX (UI)
export default function BoardWriteUI(props) {
  return (
    <>
      <S.Title>{props.isEdit ? "수정" : "등록"} 페이지 컴포넌트 재사용</S.Title>
      <div>
        작성자 :{" "}
        <input
          type="text"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoard.writer}
        ></input>
      </div>
      <div>
        제목 :{" "}
        <S.RedInput
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></S.RedInput>
      </div>
      <div>
        내용 :{" "}
        <input
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        ></input>
      </div>
      <S.BlueButton
        fontSize="15px"
        backgroundColor="lightblue"
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.BlueButton>
    </>
  );
}
