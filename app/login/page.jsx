"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import google from "../../public/google-icon.png";
import apple from "../../public/apple.png";
// import Button from "../components/Button";
import { signIn, useSession } from "next-auth/react";
const Login = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="md:grid md:grid-cols-8 h-full">
      <div className="md:col-span-3 md:h-full bg-white md:bg-black flex items-center justify-center">
        <h1 className="md:text-7xl text-4xl md:text-white md:text-black md:m-0 mt-4 font-bold">
          Board.
        </h1>
      </div>
      <div className="md:col-span-5 md:h-full md:bg-[#F5F5F5] bg-white flex items-center justify-center">
        <div className="flex min-h-full flex-col justify-center px-6 py-6 md:py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="md:mt-10 mt-5 text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Sign In
            </h1>
            <h3 className="mt-1 text-lg leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h3>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="md:col-span-1 md:m-0 my-4">
              <button
                type="submit"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://next-auth-app-kqvd.vercel.app/dashboard",
                  })
                }
                className="flex w-full justify-center items-center rounded-md bg-black text-white md:bg-white px-4 py-2 text-sm font-normal leading-6 md:text-gray-300 shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Image src={google} width={15} height={15} alt="google icon" />{" "}
                <div className="ml-2">Sign in With Google</div>
              </button>
            </div>
            <div className="md:col-span-1">
              <button
                type="submit"
                className="flex w-full justify-center items-center rounded-md bg-black text-white md:bg-white px-4 py-2 text-sm font-normal leading-6 md:text-gray-300 shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Image src={apple} width={15} height={15} alt="google icon" />{" "}
                <div className="ml-2">Sign in With Apple</div>
              </button>
            </div>
          </div>
          <div className="mt-5 py-4 md:p-8  sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 bg-gray-100 focus:outline-none placeholder:text-gray-400 focus:bg-gray-100 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-normal leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 ring-1 ring-inset ring-gray-100 bg-gray-100 focus:outline-none text-gray-900 shadow-sm ring-1 focus:border-0 focus:bg-gray-100 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="text-sm my-4">
                <Link href="#" className="font-semibold text-[#346BD4]">
                  Forgot password?
                </Link>
              </div>
              <button className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Sign In
              </button>
            </form>
          </div>
          <p className="mt-2 md:p-8 pt-4 text-center text-sm text-gray-500">
            Don’t have an account?
            <Link href="#" className="leading-6 text-[#346BD4] ml-1">
              Register here
            </Link>
          </p>
        </div>
      </div>
      {/* <Button></Button> */}
    </div>
  );
};

export default Login;
