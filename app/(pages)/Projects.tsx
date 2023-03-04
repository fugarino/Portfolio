import SectionLayout from "../components/layouts/SectionLayout";
import ScrollSnap from "../components/projects/ScrollSnap";

const Projects = () => {
  return (
    <SectionLayout sectionName="Projects" id="projects" p="0rem" psm="0rem">
      <ScrollSnap />
      {/* <div className="h-[50rem] hidden xl:flex px-[1.7rem] space-x-4">
        <article className="h-full bg-project-1 rounded-lg w-1/2"></article>
        <div className="h-full w-1/2 flex flex-col space-y-4">
          <article className="bg-project-2 rounded-lg h-1/2"></article>
          <article className="bg-project-3 rounded-lg h-1/2"></article>
        </div>
      </div> */}
    </SectionLayout>
  );
};

export default Projects;
