const AiirlabsHeader = () => {
  return (
    <div className="bg-[#DDD4CE] p-10 rounded-lg col-span-7 h-[40.5rem] row-span-2">
      <h1>
        <picture>
          <img src="/aiirlabs ©.svg" alt="aiirlabs logo" />
        </picture>
      </h1>
      <p className="font-regular text-[1.3rem] pr-12 mt-8">
        is a versitile application that provides users with a{" "}
        <span className="underline">multitude of crypto-related features</span>.
        The app enables users to{" "}
        <span className="underline">stay updated on the latest news</span>{" "}
        through a multitude of news providers. Users can also{" "}
        <span className="underline">easily access historical charts</span> and{" "}
        <span className="underline">obtain up-to-date data</span> on various
        cryptocurrencies.
        <br />
        Additionally, the app enables users to engage with the community by{" "}
        <span className="underline">posting comments and replies</span> on their
        favorite coins while{" "}
        <span className="underline">receiving immediate notifications</span>. On
        top of that, users can{" "}
        <span className="underline">
          express their opinions through the up/downvote feature
        </span>
        .
      </p>
    </div>
  );
};

export default AiirlabsHeader;
