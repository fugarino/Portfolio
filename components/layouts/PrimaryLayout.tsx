import Head from "next/head";

interface IPrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayoutProps) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="font-[Poppins] max-w-[1620px] px-[1.7rem] py-1 mx-auto select-none overflow-hidden">
        {children}
      </div>
    </>
  );
};

export default PrimaryLayout;
