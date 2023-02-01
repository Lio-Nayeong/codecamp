import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Class</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Get started by editin</p>
          <div>lio</div>
        </div>

        <div className={styles.center}>image</div>

        <div>
          <p>01-02</p>
          <div onClick={() => router.push("/01-emotion")}>01-emotion</div>
          <div onClick={() => router.push("/02-01-counter")}>02-01-counter</div>
          <div onClick={() => router.push("/02-02-signup")}>02-02-signup</div>

          <p>03-04</p>
          <div onClick={() => router.push("/04-01-rest-get")}>
            04-01-rest-get
          </div>
          <div onClick={() => router.push("/04-02-graphql-mutation")}>
            04-02-graphql-mutation
          </div>
          <div onClick={() => router.push("04-03-graphql-mutation-input")}>
            04-03-graphql-mutation-input
          </div>
          <div onClick={() => router.push("/04-04-graphql-mutation-product")}>
            04-04-graphql-mutation-product
          </div>

          <p>05</p>
          <div onClick={() => router.push("/05-01-static-routing")}>
            05-01-static-routing
          </div>
          <div onClick={() => router.push("/05-02-static-routed")}>
            05-02-static-routed
          </div>
          <div onClick={() => router.push("/05-03-dynamic-routing")}>
            05-03-dynamic-routing
          </div>
          <div>
            {/* onClick={() => router.push("/05-04-dynamic-routed")}*/}
            <i>05-04-dynamic-routed</i>
          </div>
          <div onClick={() => router.push("/05-05-dynamic-routing-mutation")}>
            05-05-dynamic-routing-mutation
          </div>

          <p>06</p>
          <div onClick={() => router.push("/06-container-presenter")}>
            06-container-presenter
          </div>
        </div>
      </main>
    </>
  );
}
