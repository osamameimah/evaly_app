import React from "react";
import ReactApexChart from "react-apexcharts";

const TodayOrder = () => {
  const seriesData = [
    {
      data: [0, 44, 30, 10, 20, 30, 35, 10, 40, 45, 58]
    }
  ];

  const options = {
    chart: {
      type: 'line',
      height: 130,
      width: 204,
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    title: {},
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    xaxis: {
      categories: ["12am", "5am","10pm", "8am","5pm","2pm", "4pm", "11pm"],
    },
    yaxis: {
      show: false, // Hide y-axis labels
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={seriesData} type="line" height={350} />
    </div>
  );
};

export default TodayOrder;
