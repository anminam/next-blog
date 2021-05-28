import Link from "next/link";
import MainLayout from "../../layouts/main";

const Posts = () => {
  return (
    <MainLayout>
      <h1>여긴 포스트야</h1>
      <Link href="/">
        <a>back</a>
      </Link>
    </MainLayout>
  );
};

export default Posts;
