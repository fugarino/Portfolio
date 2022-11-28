import { Press_Start_2P } from "@next/font/google";

interface ILayoutProps {
  alt?: boolean;
  backgroundColor: string;
  children: React.ReactNode;
}

const customFont = Press_Start_2P({ display: "swap", weight: "400" });

const ProjectLayout = ({ alt, backgroundColor, children }: ILayoutProps) => {
  return (
    <article
      className={`${customFont.className}
      flex w-full justify-center my-4 h-[21rem] ${backgroundColor} rounded-2xl px-6 py-6 lg:w-[95%] max-w-[1250px] ${
        alt && "lg:ml-auto"
      }
      `}
    >
      {children}
    </article>
  );
};

export default ProjectLayout;
