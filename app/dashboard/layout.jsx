"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import img from "../../public/dashboard_icon.png";
import img1 from "../../public/transaction_icon.png";
import img2 from "../../public/schedule_icon.png";
import img3 from "../../public/user_icon.png";
import img4 from "../../public/setting_icon.png";
import Image from "next/image";
import imgg from "../../public/guy.png";
import { useState, useEffect } from "react";
export default function RootLayout({ children }) {
  // const isBrowser = () => typeof window !== "undefined";
  // const [lastClick, setLastClick] = useState("");

  // if (isBrowser()) {
  //   window.addEventListener("click", (e) =>
  //     setLastClick(`${e.pageX}, ${e.pageY}`)
  //   );
  // }
  const [dropdown, setdropdown] = useState(false);
  const handleChange = () => {
    setdropdown(!dropdown);
  };
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (newPos) => setPosition(newPos),
      console.error
    );
  }, []);
  return (
    <div className="md:grid md:grid-cols-9 bg-[#F5F5F5]">
      <div className="md:col-span-2 relative">
        <nav className=" max-w-full md:fixed md:w-96 md:h-screen md:p-5">
          <div className="flex flex-col bg-black py-5 md:py-14 md:h-full w-full md:rounded-[30px] justify-between">
            <div className="flex flex-col space-y-5 items-center md:ml-10  justify-center sm:items-stretch sm:justify-start font-bold">
              <div className="md:block w-full md:p-0 px-4 flex items-center justify-between">
                <div className="flex flex-shrink-0 items-center text-white">
                  <h1 className="text-3xl">Board.</h1>
                </div>
                <div className="md:hidden ">
                  <button
                    type="button"
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    onClick={() => setdropdown(!dropdown)}
                  >
                    <Image
                      width={30}
                      height={40}
                      className="w-8 h-8 rounded-full"
                      src={imgg}
                      alt="user photo"
                    />
                  </button>
                </div>
              </div>
              <div className={dropdown ? "md:block" : "md:block hidden"}>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/dashboard"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md  py-3 px-2 md:text-base text-xl font-normal flex space-x-3"
                  >
                    <Image src={img} width={18} height={20} alt="Dashboard" />
                    <h1>Dashboard</h1>
                  </Link>
                  <Link
                    href="/transactions"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md  py-3 px-2 md:text-base text-xl font-normal flex space-x-3"
                  >
                    <Image
                      src={img1}
                      width={18}
                      height={20}
                      alt="transactions"
                    />
                    <h1>Transactions</h1>
                  </Link>
                  <Link
                    href="/others"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md  py-3 px-2 md:text-base text-xl font-normal flex space-x-3"
                  >
                    <Image src={img2} width={18} height={20} alt="Schedules" />
                    <h1>Schedules</h1>
                  </Link>
                  <Link
                    href="/others"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md  py-3 px-2 md:text-base text-xl font-normal flex space-x-3"
                  >
                    <Image src={img3} width={18} height={20} alt="users" />
                    <h1>Users</h1>
                  </Link>
                  <Link
                    href="/others"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md  py-3 px-2 md:text-base text-xl font-normal flex space-x-3"
                  >
                    <Image src={img4} width={18} height={20} alt="settings" />
                    <h1>Settings</h1>
                  </Link>
                </div>
                <div className="flex flex-col space-y-2 md:mt-10  pt-14 justify-center">
                  <Link
                    href="/others"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md py-2 px-2 text-sm font-light"
                  >
                    Help
                  </Link>
                  <Link
                    href="/others"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md py-2 px-2 text-sm font-light"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="w-full md:pl-6 md:pr-10 px-6 mt-8 md:col-span-7">
        {children}
      </div>
    </div>
  );
}
