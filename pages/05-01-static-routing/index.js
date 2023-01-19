import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/05-02-static-routed");
  };
  const onClickMoveBoard = () => {
    router.push("/05-02-static-routed/1");
  };

  return (
    <>
      <div>
        <b>정적 라우터(router)</b>
        <div>https://nextjs.org/docs/api-reference/next/router</div>
      </div>
      <div>
        <button onClick={onClickMove}>페이지 이동</button>
      </div>
      <div>
        <button onClick={onClickMoveBoard}>Board 페이지 이동</button>
      </div>
    </>
  );
}
