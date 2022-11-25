import { Kalam } from "@next/font/google";

interface ISectionLayoutProps {
  sectionName: string;
  children: React.ReactNode;
}

const customFont = Kalam({ display: "swap", weight: ["300", "400", "700"] });

const SectionLayout = ({ sectionName, children }: ISectionLayoutProps) => {
  return (
    <section className="mb-4">
      <span
        className={`${customFont.className} font-[300] text-[.9rem] text-[#999999]`}
      >
        {"<"}
        {sectionName}
        {">"}
      </span>
      {children}
      <span
        className={`${customFont.className} font-[300] text-[.9rem] text-[#999999]`}
      >
        {"</"}
        {sectionName}
        {">"}
      </span>
    </section>
  );
};

export default SectionLayout;
