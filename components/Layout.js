import Link from "next/link";
import Head from "next/head";
import { Nav } from "./Nav";

export function Layout({ children, title = "This is the default title" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="header">{/* <Nav /> */}</div>

      <div className="min-h-[100vh]  relative bg-black">
        <div className="h-full main">{children}</div>
        <div className="absolute bottom-0 p-3 text-white bg-black w-[100%] text-center">
          Made by Aniket and Anchal, UDAAN'22
        </div>
      </div>
    </>
  );
}
