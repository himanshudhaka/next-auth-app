"use client";
import { signOut, useSession } from "next-auth/react";

import Cards from "../../components/Cards";
import Nav from "../../components/Nav";
import Chart from "../../components/Chart";
import BCard from "../../components/BCard";
// import { Chart as Graph } from "chart.js/auto";
export default function Home() {
  const data = useSession();
  console.log(data);

  if (data?.status === "loading") {
    return <p>loading ....</p>;
  }
  if (data?.status === "unauthenticated") {
    return <p>unauthenticated</p>;
  }
  return (
    <>
      <Nav data={data?.data?.user} />
      <Cards />
      <Chart />
      <div className="md:grid mb-5 md:grid-cols-2 md:gap-4">
        <div>
          <BCard type={"chart"}></BCard>
        </div>
        <div>
          <BCard type={"nonchart"}></BCard>
        </div>
      </div>
    </>
  );
}
