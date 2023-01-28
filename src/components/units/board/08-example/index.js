export default function ExampleComponent(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
      <div>
        제목: <input type="text" />
      </div>
      <div>
        내용: <input type="text" />
      </div>
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
