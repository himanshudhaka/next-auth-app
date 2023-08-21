"use client";
import Image from "next/image";
import img from "../public/guy.png";
import bell from "../public/bell.png";
import search from "../public/search.png";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
const Nav = ({ data }) => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900 mb-5">
        <div className="max-w-screen-xl flex flex-col md:flex-row md:flex-wrap items-center md:justify-between mx-auto md:px-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl text-black font-bold ">
              Dashboard
            </span>
          </Link>
          <div className="flex relative md:m-0 mt-4 items-center md:order-2">
            <div className="relative rounded-md shadow-sw mr-5">
              <input
                type="text"
                name="search"
                className="block w-full rounded-lg border-0 py-1.5 pl-4 pr-10 text-gray-900 placeholder:text-gray-400"
                placeholder="Search..."
              />
              <Image
                className="absolute right-3 top-2.5"
                src={search}
                width={12}
                height={12}
                alt="search icon"
              />
            </div>
            <div className="mr-5" style={{ cursor: "pointer" }}>
              <Image src={bell} width={18} height={20} alt="bell icon" />
            </div>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={() => setdropdown(!dropdown)}
            >
              <Image
                width={30}
                height={40}
                className="w-8 h-8 rounded-full"
                src={img}
                alt="user photo"
              />
            </button>
            <div
              className={
                dropdown
                  ? "z-50 my-4 top-6 right-0 absolute text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  : "hidden"
              }
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {data?.name}
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {data?.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <p
                    onClick={() =>
                      signOut({ callbackUrl: "http://localhost:3000/login" })
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </p>
                  {/* <button
                    type="submit"
                    
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    <Image
                      src={google}
                      width={15}
                      height={15}
                      alt="google icon"
                    />{" "}
                    <div className="ml-2">Sign in With Google</div>
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
