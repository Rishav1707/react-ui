import React from "react";
import Head from "next/head";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
  title: String;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - React UI" : "React UI"}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="">
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold">
                React&nbsp;<span>UI</span>
              </a>
            </Link>
            <div>
              <Link href="/documentation">
                <a className="p-2">DOCUMENTATION</a>
              </Link>
              <Link href="/componenents">
                <a className="p-2">COMPONENTS</a>
              </Link>
              <Link href="/feedback">
                <a className="p-2">COMPONENTS</a>
              </Link>
            </div>
            <div>
              <a className="p-2">STAR ON GITHUB</a>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyright &copy; 2023 React UI
        </footer>
      </div>
    </>
  );
};

export default Layout;
