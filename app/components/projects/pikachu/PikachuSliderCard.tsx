import Link from "next/link";
import styles from "../../ui/buttons/IndustrialTombBtn/ITombBtn.module.css";

const PikachuSliderCard = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-[40%]">
        <picture>
          <img
            src="/PikachuOrange.png"
            alt="pikachu"
            className="w-full h-full rounded-xl object-cover"
          />
        </picture>
      </div>
      <div className="h-[56%]">
        <div className="relative w-full h-full flex flex-col justify-between">
          <div className="w-[50%] -rotate-12">
            <picture>
              <img src="/pokemon logo.svg" alt="pokemon logo" />
            </picture>
          </div>
          <picture>
            <img
              src="/Asset 14.svg"
              alt="arrow"
              className="absolute top-2 right-10 w-[10%] rotate-[210deg]"
            />
          </picture>
          <div className="flex flex-col">
            <div className="font-bold text-blue-dark text-[2rem] text-center mb-16">{`"CSS Drawing"`}</div>
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
    </div>
  );
};

export default PikachuSliderCard;
