import SectionLayout from "../components/layouts/SectionLayout";
import PaperAirplane from "../components/ui/effects/PaperAirplane";

const Contact = () => {
  return (
    <SectionLayout sectionName="Contact">
      <div className="relative">
        <PaperAirplane />
        <div className="relative max-w-[800px] mx-auto my-12">
          <picture>
            <img
              src="/laptop.svg"
              alt="laptop"
              className="absolute -top-[52px] left-[80px] w-[9rem]"
            />
          </picture>
          <div className="relative bg-[#FFE5D4] h-[12rem] rounded-lg sm:mx-4 overflow-hidden flex p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute -bottom-0 -left-6 sm:-bottom-4 sm:left-0 -z-1"
            >
              <path
                fill="#ffdcc4"
                d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,202.7C672,181,768,171,864,186.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div className="relative w-[60%] flex items-center justify-center">
              <div>
                <h3 className="text-[#3a3847] font-[600] text-[1.8rem]">
                  Get in touch
                </h3>
                <p className="text-[#6c6a75] text-[.9rem] font-[400]">
                  Have any questions? Shoot me an email.
                </p>
              </div>
            </div>
            <div className="relative w-[40%] flex items-center justify-center sm:mx-6">
              <button
                title="send email"
                className="flex text-[.9rem] items-center justify-center border-2 border-[#FF754F] bg-[#ff754f] hover:bg-[#ffe5d4] hover:text-[#ff754f] py-2 w-[8rem] text-white rounded-md"
              >
                Say hi!
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
