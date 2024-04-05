import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// eslint-disable-next-line react/prop-types
const PressureChargevsPressureDecharge = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Pressure Charge vs Pressure Decharge",
              // eslint-disable-next-line react/prop-types
              data: data.map((item) => ({ x: item.pressioncharge, y: item.pressiondecharge })),
              backgroundColor: "rgba(255, 99, 132, 0.6)",
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
                text: "Pressure Charge",
              },
            },
            y: {
              type: "linear",
              position: "left",
              title: {
                display: true,
                text: "Pressure Decharge",
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PressureChargevsPressureDecharge;
