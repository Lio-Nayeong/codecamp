import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = ["/", "/13-props-children"];
const HIDDEN_ALL = ["/"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  // console.log(router.asPath);
  const isHidden = HIDDEN_ALL.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavigation />}
      <div style={{ height: "1000px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>SideBar</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      {!isHidden && <LayoutFooter />}
    </>
  );
}
