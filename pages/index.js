import Link from "next/link";
const Main = () => {
  return (
    <>
      <h1 className="title">어서왕</h1>
      <Link href="/posts">
        <a>포스트가기</a>
      </Link>
    </>
  );
};

export default Main;
