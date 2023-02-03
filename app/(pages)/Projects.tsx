import ProjectLayout from "../components/layouts/ProjectLayout";
import SectionLayout from "../components/layouts/SectionLayout";
import ITCard from "../components/projects/industrial-tomb/ITCard";
import ProjectsSlider from "../components/ui/sliders/ProjectsSlider";

const Projects = () => {
  return (
    <SectionLayout sectionName="Projects" id="projects">
      <div className="hidden xl:flex xl:flex-col">
        <ProjectLayout alt={true} backgroundColor="bg-project-1">
          <div></div>
        </ProjectLayout>
        <ProjectLayout backgroundColor="bg-project-2">
          <ITCard />
        </ProjectLayout>
        <ProjectLayout alt={true} backgroundColor="bg-project-3">
          <div></div>
        </ProjectLayout>
      </div>
      <div className="xl:hidden flex items-center justify-center w-full my-2">
        <ProjectsSlider />
      </div>
    </SectionLayout>
  );
};

export default Projects;
