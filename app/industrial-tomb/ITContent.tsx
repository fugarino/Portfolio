import ProjectArticleLayout from "../../components/layouts/ProjectArticleLayout";
import ITContentWrapper from "./ITContentWrapper";

const ITContent = () => {
  return (
    <ITContentWrapper>
      <ProjectArticleLayout title="About" videoURL="/IndustrialTombVideo.mp4">
        <p className="p">
          Industrial Tomb is a <strong>2D Puzzle-Platformer game</strong>.{" "}
          <strong>The game’s objective</strong>, is to{" "}
          <strong>use the interactable game objects</strong> to reach the “glowy
          thing”. The player will be given a <strong>star rating</strong> based
          off - <strong>time of completion</strong>.
        </p>
      </ProjectArticleLayout>
      <ProjectArticleLayout
        alt={true}
        title="Logic"
        videoURL="/IndustrialTombVideo.mp4"
      >
        <p className="p">
          The game runs on <strong>one main “animation” loop</strong> which{" "}
          <strong>updates the position</strong> of all assets on every
          iteration, <strong>exept for the player</strong>. This creates the{" "}
          <strong>illusion of movement</strong>, and keeps the player centered
          at all times to{" "}
          <strong>create a beautiful ui at all screen sizes</strong>.
        </p>
      </ProjectArticleLayout>
      <ProjectArticleLayout title="Map" videoURL="/IndustrialTombVideo.mp4">
        <p className="p">
          A <strong>16x16 tileset</strong> was used for most of the game’s
          visuals, including the character. The individual collections of tiles
          where positioned on an <strong>HTML canvas</strong>, seperately.
          <br />
          <strong>Disclaimer:</strong> The tileset was not made by me, however
          the logic and map design are mine.
        </p>
      </ProjectArticleLayout>
      <ProjectArticleLayout
        alt={true}
        title="Collisions"
        videoURL="/IndustrialTombVideo.mp4"
      >
        <p className="p">
          The <strong>collision system</strong> is quite simple.
          <br />
          Basic example:
          <br />
          <strong>For each</strong> platform, <strong>if</strong> the{" "}
          <strong>player’s y position</strong> is {">="} the{" "}
          <strong>platforms y position</strong> {"->"}{" "}
          <strong>set player’s y velocity to 0</strong>.
        </p>
      </ProjectArticleLayout>
    </ITContentWrapper>
  );
};

export default ITContent;
