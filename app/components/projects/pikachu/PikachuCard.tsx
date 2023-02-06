import Link from "next/link";
import styles from "../../ui/buttons/IndustrialTombBtn/ITombBtn.module.css";

const PikachuCard = () => {
  return (
    <>
      <div className="w-[55%] lg:w-1/2 xl:w-[55%] flex flex-col items-center">
        <div className="relative pr-6 w-full h-full flex flex-col justify-between">
          <div className="w-[40%] -rotate-12">
            <picture>
              <img src="/pokemon logo.svg" alt="pokemon logo" />
            </picture>
          </div>
          <picture>
            <img
              src="/Asset 14.svg"
              alt="arrow"
              className="absolute top-0 right-20 w-12 rotate-[110deg]"
            />
          </picture>
          <div className="flex flex-col">
            <div className="font-bold text-blue-dark text-[2rem] text-center mb-9">{`"CSS Drawing"`}</div>
            <span>
              <Link
                href="/pikachu"
                className="text-blue-dark font-semibold hover:text-black"
              >
                Learn more...
              </Link>
            </span>
            <div className="w-full flex justify-between space-x-4 mt-3">
              <button
                className={`${styles.pikachuBtn} bg-[#F2C444] w-1/2 py-3 border-[3px] border-[#435691] text-[#3a4b7f] hover:text-[#2c3a65] font-semibold active:-translate-x-[4px] active:translate-y-[4px]`}
              >
                View Drawing
              </button>
              <button
                className={`${styles.pikachuBtn} bg-[#F2C444] w-1/2 py-3 border-[3px] border-[#435691] text-[#3a4b7f] hover:text-[#2c3a65] font-semibold active:-translate-x-[4px] active:translate-y-[4px]`}
              >
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[45%] xl:w-1/2 flex items-center justify-between">
        <div></div>
        <div className="max-w-[510px] h-full">
          <picture>
            <img
              src="/PikachuOrange.png"
              alt="pikachu"
              className="w-full h-full rounded-xl object-cover"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default PikachuCard;
