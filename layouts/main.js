import Head from "next/head";
const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>여긴무엇인가</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
