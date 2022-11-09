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
      <div className="px-2 font-[Poppins] font-[700]">{children}</div>
    </>
  );
};

export default PrimaryLayout;
