import Socials from "../components/ui/buttons/Socials";

const Footer = () => {
  return (
    <footer className="relative flex items-center justify-between px-[1.35rem] sm:px-[1.75rem] mb-1">
      <div className="absolute right-6 sm:right-8 -top-14">
        <Socials layout="col" />
      </div>
      <div></div>
      <div className="overflow-hidden">
        <div className="relative flex space-x-4">
          <span className="font-[700] text-orange text-[1.5rem]">
            &copy; 2023 Fugarino
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
