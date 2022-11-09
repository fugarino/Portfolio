import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <button>click me</button>
      <Link href="/about">
        <a>About page</a>
      </Link>
    </div>
  );
};

export default Home;
