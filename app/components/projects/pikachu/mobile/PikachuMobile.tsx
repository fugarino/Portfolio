import PikachuCallToAction from "./PikachuCallToAction";
import PikachuSnapScroll from "./PikachuSnapScroll";

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
      <PikachuSnapScroll
        src="PT"
        step={1}
        paragraph="To create the tail, start by applying a clip-path and setting the
            overflow to hidden. Next, add multiple nested child elements to fill
            in the desired colors."
      />
      <PikachuSnapScroll
        src="P2"
        step={2}
        paragraph="To recreate the outline, specifically the curved lines, use
              collections of elements with a parent-child relationship. Set the
              parent element to overflow-hidden and give it a border radius
              without any fill. The child element will only have a border, which
              will also be rounded and positioned near the parent's edge.
              Once the outline is complete, fill in the main colors and shadows."
      />
      <PikachuSnapScroll
        src="PF"
        step={3}
        paragraph="Finally, add the finishing touches, such as the eyes and mouth,
              using the same techniques as in the previous steps. This entire
              process should take approximately 15 minutes. Best of luck!"
      />
      <div className="h-[15rem] sm:h-[18rem] bg-[#FAC823] mt-4 overflow-hidden flex items-end justify-center rounded-lg mx-[1rem] sm:mx-[2rem]">
        <picture>
          <img src="/pikachu_ashketchum 2.svg" alt="ash" />
        </picture>
      </div>
      <PikachuCallToAction />
    </div>
  );
};

export default PikachuMobile;
