import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment"; // Import Moment.js as a date adapter

// eslint-disable-next-line react/prop-types
const MaintenanceHoursChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (data && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          // eslint-disable-next-line react/prop-types
          labels: data.map((item) => item.date_entretien),
          datasets: [
            {
              label: "Maintenance Hours",
              // eslint-disable-next-line react/prop-types
              data: data.map((item) => item.nbrhprochain),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day", // adjust this according to your data frequency
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default MaintenanceHoursChart;
