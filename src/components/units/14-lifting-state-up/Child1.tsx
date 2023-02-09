export default function Child1(props: any) {
  const onClick = () => {
    props.setCount((prev: number) => prev + 1);
  };

  return (
    <>
      <div>자식 1 count: {props.count}</div>
      <button onClick={onClick}>+ 1</button>
    </>
  );
}
