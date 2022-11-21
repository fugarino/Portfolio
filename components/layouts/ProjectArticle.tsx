interface IProps {
  videoURL: string;
  children: React.ReactNode;
  alt?: boolean;
  title: string;
}

const ProjectArticle = ({ alt, title, videoURL, children }: IProps) => {
  if (alt) {
    return (
      <article className="flex flex-col-reverse md:flex-row w-full py-2 justify-between md:mt-10">
        <div className="mt-4 md:mt-0 md:w-[50%] lg:w-[47%] h-full flex items-center justify-center">
          <div className="rounded-xl overflow-hidden">
            <video autoPlay muted loop>
              <source src={videoURL} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="md:w-[45%] h-full flex flex-col">
          <h2 className="h2">{title}</h2>
          <div>{children}</div>
        </div>
      </article>
    );
  }

  return (
    <article className="md:flex w-full py-2 justify-between md:mt-10">
      <div className="md:w-[45%] h-full flex flex-col">
        <h2 className="h2">{title}</h2>
        <div>{children}</div>
      </div>
      <div className="mt-4 md:mt-0 md:w-[50%] lg:w-[47%] h-full flex items-center justify-center">
        <div className="rounded-xl overflow-hidden">
          <video autoPlay muted loop>
            <source src={videoURL} type="video/mp4" />
          </video>
        </div>
      </div>
    </article>
  );
};

export default ProjectArticle;
