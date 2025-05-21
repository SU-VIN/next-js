import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickHandler = () => {
    router.push("/search");
  };

  useEffect(() => {
    router.prefetch("/search");
  }, []);
  return (
    <Fragment>
      <header
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Link href={"/"}>HOME</Link>
        <Link href={"/search"}>SEARCH</Link>
        <Link href={"/book/1"}>BOOK</Link>
        <div>
          <button onClick={onClickHandler}>이벤트 핸들러로 이동 /SEARCH</button>
        </div>
      </header>
      <Component {...pageProps} />
    </Fragment>
  );
}
