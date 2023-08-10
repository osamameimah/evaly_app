import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const seriesData = [
    {
      name: "Sales",
      data: [10, 20, 22, 30, 28, 30, 30, 31, 32],
     }
  ];

  // Add data for the parallel line (e.g., additional data for the parallel line)
  const parallelLineData = [
    {
      name: "Cost",
      data: [0, 10, 15, 20, 22, 24, 25, 26, 26]
    }
  ];

  const options = {
    chart: {
      width: 340,
      height: 114,
      type: 'line',
      zoom: {
        enabled: false
      },
      background: "transparent" // Set the background to transparent
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth' // Change to 'smooth' for a curved line
    },
    title: {
      // text: 'Product Trends by Week',
      // align: 'left'
    },
    grid: {
      showLines: false // Hide grid lines
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yaxis: {
      show: false // Hide y-axis labels
    },
    legend: {
      position: "top", 
    }
  };

  // Combine the main seriesData and parallelLineData
  const combinedSeriesData = [...seriesData, ...parallelLineData];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={combinedSeriesData} type="line" />
    </div>
  );
};

export default ApexChart;
