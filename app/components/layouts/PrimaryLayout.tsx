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
      {children}
    </>
  );
};

export default PrimaryLayout;
