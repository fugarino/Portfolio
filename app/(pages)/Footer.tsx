import Socials from "../components/ui/buttons/Socials";

const Footer = () => {
  return (
    <footer className="relative flex items-center justify-between px-6 mb-1">
      <div className="absolute right-6 -top-14">
        <Socials />
      </div>
      <div></div>
      <div className="overflow-hidden">
        <div className="relative flex space-x-4">
          <span className="font-[700] text-orange text-[1.5rem]">
            &copy; 2022 Fugarino
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
