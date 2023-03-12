import Link from "next/link";
import HeaderLink from "../ui/links/HeaderLink";
import TwoHeaderLinks from "../ui/links/TwoHeaderLinks";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-[1rem] sm:px-[1.7rem]">
      <div className="flex items-center">
        <Link href="/" className="font-[700] text-[1.8rem] text-orange">
          CRIS
        </Link>
        <TwoHeaderLinks
          leftLinkComponent={
            <HeaderLink
              linkURL="/Christian Fugarino CV 2023.pdf"
              text="download cv"
            />
          }
          rightLinkComponent={
            <HeaderLink
              linkURL="mailto:christian.fugarino.123@gmail.com"
              text="send email"
            />
          }
        />
      </div>
      <Menu />
    </header>
  );
};

export default Navbar;
