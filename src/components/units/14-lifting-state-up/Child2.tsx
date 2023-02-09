export default function Child2(props: any) {
  return (
    <>
      <div>자식 2 count: {props.count}</div>
      <button onClick={props.onClickCountUp}>+ 1</button>
    </>
  );
}
