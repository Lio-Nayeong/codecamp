import { useRouter } from "next/router";

export default function DynamicRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-04-dynamic-routed/501");
  };
  const onClickMove2 = () => {
    router.push("/05-04-dynamic-routed/12502");
  };
  const onClickMove3 = () => {
    router.push("/05-04-dynamic-routed/12533");
  };

  return (
    <>
      <div>
        <b>동적 라우터(router)</b>
        <div>https://nextjs.org/docs/api-reference/next/router</div>
      </div>
      <br />
      <div>
        <button onClick={onClickMove1}>1 페이지 이동</button>
      </div>
      <div>
        <button onClick={onClickMove2}>2 페이지 이동</button>
      </div>
      <div>
        <button onClick={onClickMove3}>3 페이지 이동</button>
      </div>
    </>
  );
}
