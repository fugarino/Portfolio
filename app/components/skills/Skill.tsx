import { ReactNode } from "react";

interface ISkillProps {
  name: string;
  children: ReactNode;
}

const Skill = ({ name, children }: ISkillProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {children}
      <h4 className="mt-1 font-[500] text-[.9rem]">{name}</h4>
    </div>
  );
};

export default Skill;
