import React from "react";
import ReactApexChart from "react-apexcharts";

const Chartmix = () => {
  const dates = [
    [1618374600000, 1015],
    [1618461000000, 1025],
    [1618547400000, 1048],
    [1618633800000, 1062],
    [1618720200000, 1050],
    [1618806600000, 1045],
    [1618893000000, 1038],
    [1618979400000, 1049],
    [1619065800000, 1045],
  ];

  const seriesData = [
    {
      name: 'XYZ MOTORS',
      data: dates
    }
  ];

  const options = {
    chart: {
      type: 'area',
      stacked: false,
      width: 340,
      height: 180,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: 'Price'
      }
    },
    xaxis: {
      type: 'datetime'
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0)
        }
      }
    }
  };

  return (
    <ReactApexChart options={options} series={seriesData} type="area" />
  );
};

export default Chartmix;
