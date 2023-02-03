interface IHeaderLinkProps {
  text: string;
  linkURL: string;
}

const HeaderLink = ({ text, linkURL }: IHeaderLinkProps) => {
  return (
    <a
      href={linkURL}
      className="font-[0.8rem] cursor-pointer transition-colors duration-100 ease-out
      text-gray-dark hover:text-black dark:text-gray-light dark:hover:text-white"
    >
      {text}
    </a>
  );
};

export default HeaderLink;
