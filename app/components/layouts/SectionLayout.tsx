import { Kalam } from "@next/font/google";

interface ISectionLayoutProps {
  sectionName: string;
  children: React.ReactNode;
  id: string;
  p?: string;
  psm: string;
}

const customFont = Kalam({
  display: "swap",
  weight: ["300", "400", "700"],
  preload: false,
});

const SectionLayout = ({
  sectionName,
  children,
  id,
  p,
  psm,
}: ISectionLayoutProps) => {
  return (
    <section className={`mb-4 px-[${p}] sm:px-[${psm}]`} id={id}>
      <span
        className={`${customFont.className} ${
          p === "0rem" && "pl-[1rem] sm:pl-0"
        } ${
          psm === "0rem" && "sm:pl-[1.7rem]"
        } font-[300] text-[.9rem] text-[#999999]`}
      >
        {"<"}
        {sectionName}
        {">"}
      </span>
      {children}
      <span
        className={`${customFont.className} ${
          p === "0rem" && "pl-[1rem] sm:pl-0"
        } ${
          psm === "0rem" && "sm:pl-[1.7rem]"
        } font-[300] text-[.9rem] text-[#999999]`}
      >
        {"</"}
        {sectionName}
        {">"}
      </span>
    </section>
  );
};

export default SectionLayout;
