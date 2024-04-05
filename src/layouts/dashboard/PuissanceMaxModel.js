import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// eslint-disable-next-line react/prop-types
const DataVisualization = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          // eslint-disable-next-line react/prop-types
          labels: data?.map((item) => item.modele),
          datasets: [
            {
              label: "Puissance Max",
              // eslint-disable-next-line react/prop-types
              data: data?.map((item) => item.puissance_max),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  console.log(data);

  return <canvas ref={chartRef} />;
};

export default DataVisualization;
