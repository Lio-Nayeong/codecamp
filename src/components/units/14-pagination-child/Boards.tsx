export default function Boards(props: any) {
  return (
    <>
      {props.data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span>{el.writer} : </span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
