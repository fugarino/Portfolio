import type { NextPage } from "next";
import ToggleTheme from "../components/ui/buttons/ToggleTheme";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <button>click me</button>
      <ToggleTheme />
    </div>
  );
};

export default Home;
