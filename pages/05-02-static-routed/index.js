import Router from "next/router";

export default function StaticRoutedPage() {
  const handleClickPathname = () => {
    const pathname = Router.pathname;
    alert(pathname);
  };
  const handleClickAsPath = () => {
    const asPath = Router.asPath;
    alert(asPath);
  };
  const handleClickBack = () => {
    Router.back();
  };
  const handleClickPush = () => {
    Router.push("/");
  };
  const handleClickReload = () => {
    Router.reload();
  };
  const handleClickReplace = () => {
    Router.replace("/");
  };

  return (
    <>
      <div>페이지 이동 완료</div>
      <button onClick={handleClickPathname}>
        현재 위치 주소: Router.pathname
      </button>
      <br />
      <button onClick={handleClickAsPath}>현재 위치 주소: Router.asPath</button>
      <br />
      <button onClick={handleClickBack}>뒤로가기 버튼: Router.back()</button>
      <br />
      <button onClick={handleClickPush}>
        현재 페이지에서, 다른 페이지로 이동: Router.push()
      </button>
      <br />
      <button onClick={handleClickReload}>새로고침: Router.reload()</button>
      <br />
      <button onClick={handleClickReplace}>
        현재 페이지 삭제 후, 다른 페이지로 이동: Router.replace()
      </button>
      <br />
    </>
  );
}
