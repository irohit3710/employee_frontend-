import React, { useEffect, useState } from 'react';
import { axiosGetAgeDistribution } from '../../../axiosServices';
import ReactApexChart from 'apexcharts';


const AgeDistribution = () => {
  const [ageData, setAgeData] = useState([]);

  useEffect(() => {
    // console.log("first")
    const fetchData = async () => {
      try {
        const response = await axiosGetAgeDistribution('/employee/api/employees/age-distribution')
        setAgeData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  const chartData = {
    series: ageData.map((statistic) => ({
      type: 'boxPlot',
      name: statistic._id,
      data: [
        {
          x: 'Min Age',
          y: [statistic.minAge],
        },
        {
          x: 'Max Age',
          y: [statistic.maxAge],
        },
      ],
    })),
    options: {
      chart: {
        type: 'boxPlot',
        height: 350,
      },
      title: {
        text: 'Job-Wise Age Statistics',
        align: 'left',
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: '#5C4742',
            lower: '#A5978B',
          },
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Min Age', 'Max Age'],
      },
    },
  };

  // const chartSeries = [
  //   {
  //     name: 'Age',
  //     data: [ageData],
  //   },
  // ];
  

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <h2>Employee Age Distribution (Box Plot)</h2>
      {/* <ReactApexChart options={chartOptions} series={chartSeries} type="boxPlot" height={350} /> */}
      <ReactApexChart options={chartData.options} series={chartData.series} type="boxPlot" height={350} />
    </div>
  );
};

export default AgeDistribution;
