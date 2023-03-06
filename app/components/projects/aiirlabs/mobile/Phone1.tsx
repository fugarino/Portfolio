const Phone1 = () => {
  return (
    <div className="h-[30.1rem] sm:h-[29.1rem] mt-4 overflow-hidden">
      <section className="relative pb-10 flex space-x-4 h-[32.5rem] px-[1rem] sm:px-[2rem] overflow-x-auto snap-x snap-mandatory">
        <div
          className="bg-[#E0D7C5] rounded-lg relative overflow-hidden w-[calc(100%-2rem)]
        flex justify-center cursor-pointer sm:w-[calc(100%-4rem)] max-w-[600px] shrink-0 snap-center snap-always"
        >
          <div className="absolute top-5 sm:top-3 translate-x-[-9%] sm:translate-x-[-9%]">
            <picture>
              <img
                src="/iPhone 14 pro2.png"
                alt="iphone"
                className="h-[31rem] w-[17.6rem]"
              />
            </picture>
          </div>
          <div className="absolute rounded-[1.8rem] top-[35px] sm:top-[25px] w-[12rem] h-[25.8rem] sm:h-[26rem] bg-white"></div>
        </div>
        <div className="bg-[#D3D3C9] rounded-lg w-[20rem] shrink-0 snap-center snap-always"></div>
      </section>
    </div>
  );
};

export default Phone1;
