import AiirlabsCallToAction from "../../components/projects/aiirlabs/mobile/AiirlabsCallToAction";
import AiirlabsHeaderM from "../../components/projects/aiirlabs/mobile/AiirlabsHeaderM";
import Phone1 from "../../components/projects/aiirlabs/mobile/Phone1";

const AiirlabsMobile = () => {
  return (
    <div className="xl:hidden">
      <AiirlabsHeaderM />
      <div className="h-[15rem] sm:h-[20rem] w-full px-[1rem] sm:px-[2rem] mt-4">
        <picture>
          <img
            src="/Frame 3.png"
            alt="iphones"
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </div>
      <Phone1
        src="My Movie20"
        header="Auth"
        paragraph="Users have the ability to customize their username and profile
          picture, which will be automatically updated within any discussions.
          Additionally users can easily bookmark their favorite coins and stay
          updated on their performance."
      />
      <Phone1
        src="My Movie21"
        header="Discussions"
        paragraph='Each cryptocurrency coin available on aiirlabs has a dedicated
          discussion section where users can share their thoughts and opinions.
          The section features a filter system that allows users to view the
          most upvoted comments or the latest ones. When replying to a comment
          that is not a top-level one, a "@" symbol followed by the
          username will be added to the start of the reply. This helps to
          organize the conversation and ensures that the relevant parties are
          notified of the response.'
      />
      <Phone1
        src="My Movie8"
        header="Notifications"
        paragraph="When a user receives a reply on one of their comments, they will be
          notified in real-time. A red notification symbol will appear next to
          the bell icon, and a blue dot will indicate an unread notification
          within the notification dropdown. Clicking on the notification will
          take the user directly to the reply, which will be highlighted briefly
          for easy identification."
      />
      <div className="h-[15rem] sm:h-[20rem] w-full px-[1rem] sm:px-[2rem] mt-4">
        <picture>
          <img
            src="/Frame 33.png"
            alt="iphones"
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </div>
      <AiirlabsCallToAction />
    </div>
  );
};

export default AiirlabsMobile;
