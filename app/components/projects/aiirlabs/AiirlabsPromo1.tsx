import Image from "next/image";

const AiirlabsPromo1 = () => {
  return (
    <div className="col-span-5 h-[20rem]">
      <Image
        width={2069}
        height={949}
        src="/Frame 3.png"
        priority
        alt="iphones"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default AiirlabsPromo1;
