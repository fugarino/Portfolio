import ProjectArticleLayout from "../../layouts/ProjectArticleLayout";
import ITContentWrapper from "./ITContentWrapper";

const ITContent = () => {
  return (
    <ITContentWrapper>
      <ProjectArticleLayout title="About" videoURL="/My Movie.mp4">
        <p className="p">
          <strong>Industrial Tomb</strong> is a{" "}
          <strong>2D puzzle-platformer game</strong> in which players must use{" "}
          <strong>interactive objects</strong> to reach the{" "}
          <strong>&quot;glowing scarab&quot;</strong>. Upon completion, players
          will
          <strong> receive a star rating</strong> based on their{" "}
          <strong>time of completion</strong>.
        </p>
      </ProjectArticleLayout>
      <ProjectArticleLayout alt={true} title="Map" videoURL="/My Movie1.mp4">
        <p className="p">
          <strong>For most of the game&apos;s visuals</strong>, including the
          character, a <strong>16x16 tileset</strong> was used. The individual
          collections of tiles were{" "}
          <strong>positioned separately on an HTML canvas</strong>. On every
          iteration of the <strong>game loop</strong>, the position of each
          tile, except for the character, is updated,{" "}
          <strong>
            creating the illusion of movement and keeping the player centered at
            all times
          </strong>
          . This results in a <strong>beautiful UI</strong> that adapts well to{" "}
          <strong>all screen sizes</strong>.
        </p>
      </ProjectArticleLayout>
      <ProjectArticleLayout
        title="Collisions"
        videoURL="/IndustrialTombVideo.mp4"
      >
        <p className="p">
          <strong>The collision system</strong> works by{" "}
          <strong>
            detecting collisions between the player and its environment
          </strong>
          , including platforms, movable boxes, pressure plates, and trap doors.
          When a collision is detected,{" "}
          <strong>the environment is adjusted accordingly</strong> by changing
          the associated positions on the canvas{" "}
          <strong>
            to prevent the player from passing through boxes or falling through
            the platforms
          </strong>
          .
        </p>
      </ProjectArticleLayout>
    </ITContentWrapper>
  );
};

export default ITContent;
