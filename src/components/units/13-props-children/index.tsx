interface IProps {
  children: JSX.Element;
}

export default function Example(props: IProps) {
  return (
    <>
      <div>props.children</div>
      <div>{props.children}</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  );
}
