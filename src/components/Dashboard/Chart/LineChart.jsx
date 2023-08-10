import React from "react";
import ReactApexChart from "react-apexcharts";
// import Style from "../../assets/css/style.module.css";

const LineChart = ({data="",color=""}) => {
  const seriesData = [
    {
      name: "Desktops",
      data: [10, 20, 22, 30, 28, 30, 30, 31, 32]
    }
  ];

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      background: "transparent" 
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth', 
      colors:  [color] 

    },
    title: {
      text: '', 
     },
    grid: {
      show: false 
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        show: false // Hide x-axis labels
      }
    },
    yaxis: {
      show: false // Hide y-axis labels
    },
    legend: {
      show: false // Hide the legend (boxes at the bottom)
    },
    markers: {
      show: false // Hide markers (data points) on the line
    }
  };

  return (
    <div>
      <ReactApexChart options={options} series={seriesData} type="line" />
    </div>
  );
};

export default LineChart;
