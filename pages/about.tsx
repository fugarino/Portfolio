import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <h1>About page</h1>
      <Link href="/">
        <a>Home page</a>
      </Link>
    </div>
  );
};

export default About;
