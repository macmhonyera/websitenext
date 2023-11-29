import React from 'react';
import Header from '../header/page';
import Image from 'next/image';
import myImage from '../assets/ufo.jpg'

const Page = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#506874] to-[#1c478b] flex items-center w-[100%] p-40 2xl:p-24">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="w-auto h-auto rounded-r-lg ml-20">
          <Image
            src={myImage}
            alt="Description of the image"
            width={3000}
            height={4000}
            className='rounded-l-lg h-auto'
          />
        </div>
        <div className="bg-[#eff5f7] flex flex-col w-[80%] justify-center rounded-r-lg">
          <h2 className="text-center text-2xl font-bold p-2">REGISTER</h2>
          <p className="text-center text-[#76abc4] text-lg font-bold">It`s completely free</p>
          <div>
            <form className="max-w-[800px] w-[70%] mx-auto rounded-lg font-sans">
              <div className="flex flex-col text-gray-800 py-2">
                First Name(s)
                <input
                  type="text"
                  name="firstname"
                  placeholder="Macmillan"
                  className="rounded-sm mt-1 p-2"
                  id="firstname"
                />
              </div>
              <div className="flex flex-col text-gray-800 py-2">
                Last Name
                <input
                  type="text"
                  name="lastname"
                  placeholder="Mhonyera"
                  className="rounded-sm mt-1 p-2"
                  id="lastname"
                />
              </div>
              <div className="flex flex-col text-gray-800 py-2">
                Username
                <input
                  type="text"
                  name="username"
                  placeholder="Macmie"
                  className="rounded-sm p-2 "
                  id="username"
                />
              </div>
              <div className="flex flex-col text-gray-800 py-2">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="macmillan@gmail.com"
                  className="rounded-sm p-2 border-solid"
                  id="email"
                />
              </div>
              <div className="flex flex-col text-gray-800 py-2">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="rounded-sm p-2 border-solid "
                  id="password"
                />
              </div>
              <div className="flex flex-col text-gray-800 py-2">
                Confirm Password
                <input
                  type="password"
                  name="cpassword"
                  placeholder="*********"
                  className="rounded-sm p-2 border-solid"
                  id="cpassword"
                />
              </div>



              <div className="flex justify-center text-gray-900 space-x-10">
                <p className="flex items-center italic">
                  <input
                    type="checkbox"
                    className="mr-1 bg-white checked:bg-blue-800 py-2"
                  />
                  I consent to receive promotional emails
                </p>

              </div>
              <div className="">

                <div className="">
                  <button
                    className="w-full my-5 py-2 bg-[#44627e] shadow-black text-semibold rounded-lg text-white"
                    type="submit"
                  >
                    Register
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;