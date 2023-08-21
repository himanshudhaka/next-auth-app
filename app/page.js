import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <Link
        href="/login"
        className="flex justify-center rounded-md bg-black px-6 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Login
      </Link>
    </div>
  );
}
