export default function Pagination(props: any) {
  return (
    <>
      <span onClick={props.onClickPrevPage}> 이전 </span>
      {Array(5)
        .fill(1)
        .map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <span
                key={index + props.startPage}
                onClick={props.onClickPage}
                id={String(index + props.startPage)}
                style={{ margin: "5px" }}
              >
                {index + props.startPage}
              </span>
            )
        )}
      <span onClick={props.onClickNextPage}> 다음 </span>
    </>
  );
}
