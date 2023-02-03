interface ITwoHeaderLinksProps {
  leftLinkComponent: React.ReactNode;
  rightLinkComponent: React.ReactNode;
}

const TwoHeaderLinks = ({
  leftLinkComponent,
  rightLinkComponent,
}: ITwoHeaderLinksProps) => {
  return (
    <aside className="ml-[17px] text-[.75rem] relative top-[4.5px] text-gray-dark dark:text-gray-light">
      <>
        {leftLinkComponent} / {rightLinkComponent}
      </>
    </aside>
  );
};

export default TwoHeaderLinks;
