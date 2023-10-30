import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className={
          "containter mx-auto flex items-center border-b-2 px-2 py-6 h-14 bg-[#303030]"
        }
      >
        <h1 className="font-bold p-2 text-[#4ade80] from-neutral-200 text-xl ml-44">
          Jinda
        </h1>
        <div className="grow">
          <div className="flex justify-center text-[#f9faf7] font-semibold gap-4 md:gap-5">
            <Link href="home" className="text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300">Home</Link>
            <Link
              href="/find-talent"
              className="text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300"
            >
              Got Talent
            </Link>
            <Link href="home" className="text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300">Jobs</Link>
            <Link href="home" className="text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300">Who we are?</Link>
          </div>
        </div>
        <div className="flex gap-4 items-center mr-24">
          <Link
            href="#"
            className="border rounded-xl p-2 font-semibold text-xs text-[#f9faf7] bg-green-400"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
    
  );
}
