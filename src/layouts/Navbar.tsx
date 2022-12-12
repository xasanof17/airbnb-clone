import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { BiUser } from 'react-icons/bi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="navbar container py-3 sm:py-5">
        {/* Left */}
        <div className="flex items-center">
          <Link href={'/'}>
            <div className="relative flex h-8 w-[105px] items-center justify-center">
              <Image src={'/assets/airbnb.png'} alt="airbnb" fill priority />
            </div>
          </Link>
        </div>

        {/* Middle */}
        <div className="form-block">
          <form className="flex w-full items-center rounded-full bg-white p-1 duration-100 sm:shadow sm:hover:shadow-md md:border md:p-1 md:pl-2">
            <input
              type="text"
              placeholder="Start your Search"
              className="w-full appearance-none bg-transparent px-2 text-gray-700 placeholder-gray-500 outline-none"
            />
            <button
              type="submit"
              className="hidden items-center justify-center rounded-full bg-radical p-2 md:inline-flex"
            >
              <span className="pointer-events-none">
                <IoSearchOutline
                  fontSize={18}
                  fontWeight={700}
                  className="text-white"
                />
              </span>
            </button>
          </form>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-2 text-gray-500">
          <button
            type="submit"
            className="flex items-center justify-center rounded-full bg-radical p-2 md:hidden"
          >
            <span className="pointer-events-none">
              <IoSearchOutline
                fontSize={18}
                fontWeight={700}
                className="text-white"
              />
            </span>
          </button>
          <button className="flex items-center rounded-full border border-transparent bg-transparent p-2 duration-300 hover:border-slate-300 hover:bg-[#F7F7F7] lg:space-x-2">
            <p className="hidden lg:block">Become a host</p>
            <AiOutlineGlobal fontSize={20} />
          </button>
          <div className="flex items-center space-x-2 rounded-full border-2 p-2">
            <button>
              <FiMenu fontSize={20} />
            </button>
            <BiUser fontSize={20} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
