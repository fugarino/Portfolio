import Link from "next/link";

interface ILinkURL {
  color: string;
}

const ArrowLink = ({ color }: ILinkURL) => {
  return (
    <div className="px-[1rem] sm:px-[2rem] mt-4">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          style={{
            color: color,
          }}
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ArrowLink;
