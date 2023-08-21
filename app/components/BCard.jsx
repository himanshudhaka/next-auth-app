"use client";
import Graph from "react-apexcharts";
import { useState } from "react";
const BCard = ({ type }) => {
  const months = {
    Jan: [55, 31, 14],
    Feb: [65, 25, 10],
    Mar: [42, 42, 16],
    Apr: [48, 31, 31],
    May: [50, 25, 25],
    Jun: [55, 25, 20],
  };

  const [stats, setStat] = useState(months["Jan"]);

  let options = {
    chart: {
      type: "pie",
    },
    colors: ["#98D89E", "#F6DC7D", "#EE8484"],
    labels: ["Basic tees", "Custom Short Pants", "Custom Short Pants"],
    datalabels: {
      enabled: true,
      formatter: function (val) {
        return;
      },
    },
  };
  const series = stats;

  const handleChange = (event) => {
    setStat(months[event.target.value]);
  };

  if (type === "chart") {
    return (
      <div className="bg-white px-5 py-5 md:px-10 md:py-8 mt-10 mb-10 rounded-xl">
        <div className="flex md:flex-row flex-col justify-between items-baseline">
          <h1 className="text-2xl text-black font-bold">Top Products</h1>
          <div>
            <select
              id="countries"
              className="text-gray-300 text-base font-normal"
              onChange={handleChange}
            >
              <option selected defaultValue="Jan">
                January - February 2021
              </option>
              <option className="text-black" value="Feb">
                February - March 2021
              </option>
              <option className="text-black" value="Mar">
                March - April 2021
              </option>
              <option className="text-black" value="Apr">
                April - May 2021
              </option>
              <option className="text-black" value="May">
                May - June 2021
              </option>
              <option className="text-black" value="Jun">
                June - July 2021
              </option>
              <option className="text-black" value="Jan">
                July - August 2021
              </option>
              <option className="text-black" value="Feb">
                August - September 2021
              </option>
              <option className="text-black" value="Mar">
                September - October 2021
              </option>
              <option className="text-black" value="Apr">
                October - November 2021
              </option>
              <option className="text-black" value="May">
                November - December 2021
              </option>
            </select>
          </div>
        </div>
        <div className="mt-6 p-4">
          <Graph
            className="mx-auto"
            options={options}
            series={series}
            type="pie"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white px-5 py-5 md:px-10 md:py-8 mt-10 rounded-xl">
      <div className="flex md:flex-row flex-col justify-between items-baseline">
        <h1 className="text-2xl text-black font-bold">
          Today<span>&#44;</span>s Schedule
        </h1>
        <p className="text-gray-400">See All </p>
      </div>
      <div className="mt-6">
        <div className="text-gray-400 border-l-4 pl-3 border-[#9BDD7C]">
          <h2 className="text-gray-700">
            Meeting with suppliers from Kuta Bali
          </h2>
          <p>14.00-15.00</p>
          <p>at Sunset Road, Kuta, Bali</p>
        </div>
        <div className="text-gray-400 mt-5 border-l-4 pl-3 border-[#6972C3]">
          <h2 className="text-gray-700">Check operation at Giga Factory 1</h2>
          <p>18.00-20.00</p>
          <p>at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default BCard;
