import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// eslint-disable-next-line react/prop-types
const PowerOverYear = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          // eslint-disable-next-line react/prop-types
          labels: data.map((item) => item.anneefabrication),
          datasets: [
            {
              label: "Engine Power Over Years",
              // eslint-disable-next-line react/prop-types
              data: data.map((item) => item.puissancemoteur),
              fill: false,
              borderColor: "rgba(75, 192, 192, 1)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              title: {
                display: true,
                text: "Year of Fabrication",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Engine Power",
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PowerOverYear;
