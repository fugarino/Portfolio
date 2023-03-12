import AiirlabsHeader from "../../components/projects/aiirlabs/AiirlabsHeader";
import AiirlabsPromo1 from "../../components/projects/aiirlabs/AiirlabsPromo1";
import AiirlabsPromo2 from "../../components/projects/aiirlabs/AiirlabsPromo2";
import Ipad from "../../components/projects/aiirlabs/Ipad";
import Iphone from "../../components/projects/aiirlabs/Iphone";
import MacBook from "../../components/projects/aiirlabs/MacBook";

const AiirlabsDesktop = () => {
  return (
    <div className="grid-cols-12 gap-2 hidden xl:grid mt-4 px-[2rem] mb-10">
      <AiirlabsHeader />
      <AiirlabsPromo1 />
      <div className="bg-[#D3D3C9] rounded-lg col-span-5 h-[20rem] flex flex-col justify-end p-6">
        <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">Next</h2>
        <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">Tailwind</h2>
        <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">Firebase</h2>
        <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">
          React query
        </h2>
      </div>
      <Ipad />
      <Iphone />
      <div className="bg-[#D3D3C9] rounded-lg col-span-3 h-[20rem] p-6">
        <h2 className="font-semibold text-[1.5rem] xxl:text-[2rem]">Auth</h2>
        <p className="xl:text-[0.95rem] xxl:text-[1.05rem]">
          Users have the ability to customize their username and profile
          picture, which will be automatically updated within any discussions.
          Additionally users can easily bookmark their favorite coins and stay
          updated on their performance.
        </p>
      </div>
      <AiirlabsPromo2 />
      <MacBook />
      <div className="bg-[#D3D3C9] rounded-lg col-span-5 h-[20rem] p-6">
        <h2 className="font-semibold text-[1.5rem] xxl:text-[2rem]">
          Notifications
        </h2>
        <p className="xl:text-[0.95rem] xxl:text-[1.05rem] pr-12">
          When a user receives a reply on one of their comments, they will be
          notified in real-time. A red notification symbol will appear next to
          the bell icon, and a blue dot will indicate an unread notification
          within the notification dropdown. Clicking on the notification will
          take the user directly to the reply, which will be highlighted briefly
          for easy identification.
        </p>
      </div>
      <div className="bg-[#D3D3C9] rounded-lg col-span-6 h-[20rem] p-6">
        <h2 className="font-semibold text-[1.5rem] xxl:text-[2rem]">
          Discussions
        </h2>
        <p className="xl:text-[0.95rem] xxl:text-[1.05rem] pr-12">
          Each cryptocurrency coin available on aiirlabs has a dedicated
          discussion section where users can share their thoughts and opinions.
          The section features a filter system that allows users to view the
          most upvoted comments or the latest ones. When replying to a comment
          that is not a top-level one, a &quot;@&quot; symbol followed by the
          username will be added to the start of the reply. This helps to
          organize the conversation and ensures that the relevant parties are
          notified of the response.
        </p>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://aiirlabs.com/"
        aria-label="aiirlabs"
        className="bg-[#DCCCBE] cursor-pointer col-span-3 h-[20rem] rounded-lg p-6 flex flex-col justify-end"
      >
        <div className="flex items-center justify-between relative top-4">
          <h3 className="text-[1.5rem] font-bold">aiirlabs.com</h3>
          <picture>
            <img
              src="/Arrow_alt_lright.svg"
              alt="arrow"
              className="w-14 h-14"
            />
          </picture>
        </div>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/fugarino/crypto"
        aria-label="github"
        className="bg-[#DCCCBE] cursor-pointer col-span-3 h-[20rem] rounded-lg p-6 flex flex-col justify-end"
      >
        <div className="flex items-center justify-between relative top-4">
          <h3 className="text-[1.5rem] font-bold">source code</h3>
          <picture>
            <img
              src="/Arrow_alt_lright.svg"
              alt="arrow"
              className="w-14 h-14"
            />
          </picture>
        </div>
      </a>
    </div>
  );
};

export default AiirlabsDesktop;
