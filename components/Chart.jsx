"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart as Graph } from "react-chartjs-2";

// import Graph from "react-apexcharts";
const Chart = () => {
  const months = {
    Jan: {
      data1: [
        100, 300, 410, 390, 300, 150, 210, 290, 440, 360, 240, 190, 210, 250,
      ],
      data2: [
        200, 310, 390, 300, 270, 200, 230, 250, 300, 270, 250, 230, 300, 470,
      ],
    },
    Feb: {
      data1: [
        150, 360, 460, 440, 350, 200, 270, 360, 390, 250, 290, 310, 260, 300,
      ],
      data2: [
        250, 310, 440, 350, 290, 250, 200, 260, 320, 320, 260, 230, 350, 420,
      ],
    },
    Mar: {
      data1: [
        150, 360, 460, 440, 350, 200, 270, 360, 390, 250, 290, 310, 260, 300,
      ],
      data2: [
        200, 310, 390, 300, 270, 200, 230, 250, 300, 270, 250, 230, 300, 470,
      ],
    },
    Apr: {
      data2: [
        250, 310, 440, 350, 290, 250, 200, 260, 320, 320, 260, 230, 350, 420,
      ],
      data2: [
        200, 310, 390, 300, 270, 200, 230, 250, 300, 270, 250, 230, 300, 470,
      ],
    },
    May: {
      data1: [
        100, 300, 410, 390, 300, 150, 210, 290, 440, 360, 240, 190, 210, 250,
      ],
      data2: [
        250, 310, 440, 350, 290, 250, 200, 260, 320, 320, 260, 230, 350, 420,
      ],
    },
    Jun: {
      data1: [
        200, 310, 390, 300, 270, 200, 230, 250, 300, 270, 250, 230, 300, 470,
      ],
      data2: [
        250, 310, 440, 350, 290, 250, 200, 260, 320, 320, 260, 230, 350, 420,
      ],
    },
  };
  const [stats, setStat] = useState(months["Jan"]);
  const data = {
    labels: [
      "",
      "",
      "Week 1",
      "",
      "",
      "Week 2",
      "",
      "",
      "Week 3",
      "",
      "",
      "Week 4",
      "",
      "",
    ],
    datasets: [
      {
        label: "# of calories lost",
        data: stats.data1,
        // fill: false,
        backgroundColor: "rgb(255,99,132)",
        borderColor: "#E9A0A0",
        responsive: true,
        tension: 0.5,
      },
      {
        label: "# of calories lost",
        data: stats.data2,
        fill: false,
        backgroundColor: "rgb(255,99,132)",
        borderColor: "#9BDD7C",
        responsive: true,
        tension: 0.5,
      },
    ],
  };
 

  const handleChange = (event) => {
    setStat(months[event.target.value]);
  };

  return (
    <div className="bg-white mt-5 rounded-lg p-5 flex flex-col">
      <div className="text-2xl text-black font-bold">
        <div>
          <h1>Activities</h1>
        </div>
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
      <div className="p-4">
        <div className="mx-auto">
          <Line
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                    lineWidth: 0,
                    weight: 0,
                    color: "transparent",
                  },
                },
                y: {
                  min: 0,
                  max: 500,
                  ticks: {
                    stepSize: 100,
                  },
                },
              },
            }}
            data={{
              labels: [
                "",
                "Week 1",
                "",
                "Week 2",
                "",
                "Week 3",
                "",
                "Week 4",
                "",
              ],
              datasets: [
                {
                  label: "# of calories lost",
                  data: [100, 410, 300, 150, 290, 440, 240, 190, 250],
                  // fill: false,
                  backgroundColor: "rgb(255,99,132)",
                  borderColor: "#E9A0A0",
                  responsive: true,
                  tension: 0.5,
                },
                {
                  label: "# of calories lost",
                  data: [200, 390, 270, 200, 250, 300, 250, 230, 470],
                  fill: false,
                  backgroundColor: "rgb(255,99,132)",
                  borderColor: "#9BDD7C",
                  responsive: true,
                  tension: 0.5,
                },
              ],
            }}
          />
        </div>
        <Line
            options={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                    lineWidth: 0,
                    weight: 0,
                    color: "transparent",
                  },
                },
                y: {
                  min: 0,
                  max: 500,
                  ticks: {
                    stepSize: 100,
                  },
                },
              },
            }}
            data={data}
          />
      </div>
    </div>
  );
};

export default Chart;
