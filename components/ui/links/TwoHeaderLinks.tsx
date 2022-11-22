interface ITwoHeaderLinksProps {
  leftLinkComponent: React.ReactNode;
  rightLinkComponent: React.ReactNode;
}

const TwoHeaderLinks = ({
  leftLinkComponent,
  rightLinkComponent,
}: ITwoHeaderLinksProps) => {
  return (
    <aside className="ml-[17px] text-[.75rem] relative top-[4.5px] text-[#5e5e5e] dark:text-[#e1e1e1]">
      <>
        {leftLinkComponent} / {rightLinkComponent}
      </>
    </aside>
  );
};

export default TwoHeaderLinks;
