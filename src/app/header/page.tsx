'use client'
// components/Header.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {

  const pathname=usePathname();

  return (
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
          <Link href="/" className={`text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300 ${pathname==='/'? 'bg-red-400 text-black':''}`}>Home</Link>
          <Link
            href="/find_talent"
            className={`text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300 ${pathname==='/find_talent'?'bg-red-400 text-black':''}`}
          >
            Find Talent
          </Link>
          <Link href="jobs" className={`text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300 ${pathname==='jobs'?'bg-red-400 text-black':''}`}>Jobs</Link>
          <Link href="aboutUs" className={`text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300 ${pathname==='aboutUs'?'bg-red-400 text-black':''}`}>About Us</Link>
          <Link href="contactUs" className={`text-[#f9faf7] hover:bg-[#4ade80] rounded-md hover:text-black p-2 transition-colors duration-300 ${pathname==='contactUs'?'bg-red-400 text-black':''}`}>Contact Us</Link>


        </div>
      </div>
      <div className="flex gap-4 items-center mr-24">
        <Link
          href="/register"
          className="border rounded-xl p-2 font-semibold text-xs text-[#f9faf7] bg-green-400 hover:bg-red-400"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
