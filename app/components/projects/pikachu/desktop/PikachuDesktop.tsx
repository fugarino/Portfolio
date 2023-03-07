const PikachuDesktop = () => {
  return (
    <div className="grid-cols-12 gap-2 hidden xl:grid mt-4 px-[2rem] mb-10">
      <div className="h-[20rem] col-span-4 flex justify-center items-center rounded-lg bg-[#FAC823]">
        <picture>
          <img src="/pokemon logo.svg" alt="logo" className="w-full" />
        </picture>
      </div>
      <div className="h-[40.5rem] overflow-hidden col-span-8 row-span-2 rounded-lg bg-[#FAC823]">
        <picture>
          <img
            src="PikachuOrange.png"
            alt="pikachu"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="h-[20rem] col-span-4 rounded-lg bg-[#ecc53a] p-6 flex items-end">
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
      <div className="h-[20rem] overflow-hidden col-span-5 rounded-lg bg-[#FAC823]">
        <picture>
          <img
            src="/PT.png"
            alt="tail"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="h-[20rem] flex flex-col justify-between py-10 px-20 col-span-7 rounded-lg bg-[#ecc53a]">
        <h2 className="font-semibold text-[1.2rem] text-[#00000095]">Step 1</h2>
        <p className="font-medium text-[1.1rem] text-black pb-4">
          To create the tail, start by applying a clip-path and setting the
          overflow to hidden. Next, add multiple nested child elements to fill
          in the desired colors.
        </p>
        <div></div>
      </div>
      <div className="h-[20rem] flex flex-col justify-between py-10 px-20 col-span-7 rounded-lg bg-[#ecc53a]">
        <h2 className="font-semibold text-[1.2rem] text-[#00000095]">Step 2</h2>
        <p className="font-medium text-[1.1rem] text-black pb-4">
          To recreate the outline, specifically the curved lines, use
          collections of elements with a parent-child relationships. Set the
          parent element to overflow-hidden and give it a border radius without
          any fill. The child element will only have a border, which will also
          be rounded and positioned near the parent&apos;s edge. Once the
          outline is complete, fill in the main colors and shadows.
        </p>
        <div></div>
      </div>
      <div className="h-[20rem] overflow-hidden col-span-5 rounded-lg bg-[#FAC823]">
        <picture>
          <img
            src="P2.png"
            alt="outline"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="h-[20rem] overflow-hidden col-span-5 rounded-lg bg-[#FAC823]">
        <picture>
          <img
            src="PF.png"
            alt="outline"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="h-[20rem] flex flex-col justify-between py-10 px-20 col-span-7 rounded-lg bg-[#ecc53a]">
        <h2 className="font-semibold text-[1.2rem] text-[#00000095]">Step 2</h2>
        <p className="font-medium text-[1.1rem] text-black pb-4">
          Finally, add the finishing touches, such as the eyes and mouth, using
          the same techniques as in the previous steps. This entire process
          should take approximately 15 minutes. Best of luck!
        </p>
        <div></div>
      </div>
      <div className="bg-[#ecc53a] col-span-3 h-[20rem] rounded-lg p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between relative top-4">
          <h3 className="text-[1.2rem] font-bold">view drawing</h3>
          <picture>
            <img
              src="/Arrow_alt_lright.svg"
              alt="arrow"
              className="w-14 h-14"
            />
          </picture>
        </div>
      </div>
      <div className="bg-[#ecc53a] col-span-3 h-[20rem] rounded-lg p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between relative top-4">
          <h3 className="text-[1.2rem] font-bold">source code</h3>
          <picture>
            <img
              src="/Arrow_alt_lright.svg"
              alt="arrow"
              className="w-14 h-14"
            />
          </picture>
        </div>
      </div>
      <div className="h-[20rem] overflow-hidden flex items-end justify-center col-span-6 rounded-lg bg-[#FAC823]">
        <picture>
          <img src="/pikachu_ashketchum 2.svg" alt="ash" />
        </picture>
      </div>
    </div>
  );
};

export default PikachuDesktop;
