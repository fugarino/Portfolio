const PikachuMobile = () => {
  return (
    <div className="xl:hidden">
      <div className="relative mt-4 h-[20rem] sm:h-[25rem] mx-[1rem] sm:mx-[2rem]">
        <div className="absolute -top-[4.5rem] right-0">
          <picture>
            <img src="/pokemon logo.svg" alt="logo" className="w-[11rem]" />
          </picture>
        </div>
        <picture>
          <img
            src="PikachuOrange.png"
            alt="pikachu"
            className="h-full w-full object-cover rounded-lg"
          />
        </picture>
      </div>
      <div className="h-[20rem] rounded-lg bg-[#ecc53a] p-6 flex items-end mx-[1rem] sm:mx-[2rem] mt-4">
        <p className="font-bold text-[1.1rem]">
          This “drawing”
          <br />
          was made entirely
          <br />
          in html and css. Some
          <br />
          might argue that these tools
          <br />
          aren’t great for making art.
          <br />I disagree!
          <br />
          This is a 3 step guide on how
          <br />
          to make pikachu in html and css.
        </p>
      </div>
      <div className="mt-4 h-[20.1rem] overflow-hidden">
        <div className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          <div className="h-[20rem] overflow-hidden bg-[#FAC823] rounded-lg w-[20rem] shrink-0 snap-center snap-always">
            <picture>
              <img
                src="/PT.png"
                alt="tail"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <div className="h-[20rem] flex flex-col justify-between overflow-hidden py-6 px-6 sm:py-8 sm:px-10 bg-[#ecc53a] rounded-lg w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[604px] shrink-0 snap-center snap-always">
            <h2 className="font-semibold text-[1.2rem] text-[#00000095]">
              Step 1
            </h2>
            <p className="font-medium text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-black pb-4">
              To create the tail, start by applying a clip-path and setting the
              overflow to hidden. Next, add multiple nested child elements to
              fill in the desired colors.
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="mt-4 h-[20.1rem] overflow-hidden">
        <div className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          <div className="h-[20rem] overflow-hidden bg-[#FAC823] rounded-lg w-[20rem] shrink-0 snap-center snap-always">
            <picture>
              <img
                src="P2.png"
                alt="outline"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <div className="h-[20rem] flex flex-col justify-between overflow-hidden py-6 px-6 sm:py-8 sm:px-10 bg-[#ecc53a] rounded-lg w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[604px] shrink-0 snap-center snap-always">
            <h2 className="font-semibold text-[1.2rem] text-[#00000095]">
              Step 2
            </h2>
            <p className="font-medium text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-black pb-4">
              To recreate the outline, specifically the curved lines, use
              collections of elements with a parent-child relationships. Set the
              parent element to overflow-hidden and give it a border radius
              without any fill. The child element will only have a border, which
              will also be rounded and positioned near the parent&apos;s edge.
              Once the outline is complete, fill in the main colors and shadows.
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="mt-4 h-[20.1rem] overflow-hidden">
        <div className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          <div className="h-[20rem] overflow-hidden bg-[#FAC823] rounded-lg w-[20rem] shrink-0 snap-center snap-always">
            <picture>
              <img
                src="PF.png"
                alt="outline"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
          <div className="h-[20rem] flex flex-col justify-between overflow-hidden py-6 px-6 sm:py-8 sm:px-10 bg-[#ecc53a] rounded-lg w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[604px] shrink-0 snap-center snap-always">
            <h2 className="font-semibold text-[1.2rem] text-[#00000095]">
              Step 3
            </h2>
            <p className="font-medium text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-black pb-4">
              Finally, add the finishing touches, such as the eyes and mouth,
              using the same techniques as in the previous steps. This entire
              process should take approximately 15 minutes. Best of luck!
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="h-[15rem] sm:h-[18rem] bg-[#FAC823] mt-4 overflow-hidden flex items-end justify-center rounded-lg mx-[1rem] sm:mx-[2rem]">
        <picture>
          <img src="/pikachu_ashketchum 2.svg" alt="ash" />
        </picture>
      </div>
      <div className="mt-4 mb-4 sm:mb-8 h-[15rem] overflow-hidden">
        <div className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          <div className="h-[15rem] text-black w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#ecc53a] shrink-0 snap-center snap-always">
            <div className="flex items-end p-4 justify-between h-full relative top-1">
              <h3 className="text-[1.5rem] font-bold">view drawing</h3>
              <picture>
                <img
                  src="/Arrow_alt_lright.svg"
                  alt="arrow"
                  className="w-14 h-14"
                />
              </picture>
            </div>
          </div>
          <div className="h-[15rem] text-black w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#ecc53a] shrink-0 snap-center snap-always">
            <div className="flex items-end p-4 justify-between h-full relative top-1">
              <h3 className="text-[1.5rem] font-bold">source code</h3>
              <picture>
                <img
                  src="/Arrow_alt_lright.svg"
                  alt="arrow"
                  className="w-14 h-14"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PikachuMobile;
