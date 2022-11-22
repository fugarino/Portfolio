interface IHeaderLinkProps {
  text: string;
  linkURL: string;
}

const HeaderLink = ({ text, linkURL }: IHeaderLinkProps) => {
  return (
    <a
      href={linkURL}
      className="font-[0.8rem] cursor-pointer transition-colors duration-100 ease-out text-[#5e5e5e] hover:text-black dark:text-[#e1e1e1] dark:hover:text-white"
    >
      {text}
    </a>
  );
};

export default HeaderLink;
