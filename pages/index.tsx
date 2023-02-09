import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const NAVIGATION_MENUS = [
  { name: "counter", page: "/02-01-counter" },
  { name: "signup", page: "/02-02-signup" },
  { name: "rest-get", page: "/04-01-rest-get" },
  { name: "graphql-mutation", page: "/04-02-graphql-mutation" },
  { name: "graphql-mutation-input", page: "/04-03-graphql-mutation-input" },
  { name: "graphql-mutation-product", page: "/04-04-graphql-mutation-product" },
  { name: "static-routing", page: "/05-01-static-routing" },
  { name: "static-routed", page: "/05-02-static-routed" },
  { name: "dynamic-routing", page: "/05-03-dynamic-routing" },
  { name: "dynamic-routing-mutation", page: "/05-05-dynamic-routing-mutation" },
  { name: "container-presenter", page: "/06-container-presenter" },
  { name: "setState", page: "/07-01-setState" },
  { name: "map-board", page: "/07-02-map-board" },
  { name: "example-new", page: "/08-01-example-new" },
  { name: "example-edit", page: "/08-02-example-edit" },
  { name: "boards", page: "/08-03-boards/new" },
  { name: "boards", page: "/09-01-boards/new" },
  { name: "typescript", page: "/09-02-typescript" },
  { name: "typescript-boards", page: "/10-01-typescript-boards/new" },
  { name: "typescript-utility-type", page: "/10-02-typescript-utility-type" },
  { name: "graphql-codegen-mutation", page: "/10-03-graphql-codegen-mutation" },
  { name: "antd-example", page: "/12-01-antd-example" },
  { name: "modal-custom-address", page: "/12-02-modal-custom-address" },
  { name: "state-prev", page: "/12-03-state-prev" },
  {
    name: "modal-custom-address-refactoring",
    page: "/12-04-modal-custom-address-refactoring",
  },
  { name: "props-children", page: "/13-props-children" },
];

export default function Home() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };

  return (
    <>
      <Head>
        <title>Class</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>link</p>
          <div>lio</div>
        </div>

        {/* <div className={styles.center}>image</div> */}

        <div>
          {NAVIGATION_MENUS.map((el) => (
            <div key={el.page} id={el.page} onClick={onClickMenu}>
              {el.page}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
