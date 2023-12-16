import { ArcElement, Chart, Legend, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { axiosGetStats } from '../../../axiosServices';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement,Tooltip,Legend,Title);
const Pieplot = () => {
    const [jobWiseCount, setJobWiseCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosGetStats('/employee/api/employees/job-wise-count')
        setJobWiseCount(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: jobWiseCount.map((item) => item.job),
    datasets: [
      {
        label:'Number of Employees',
        data: jobWiseCount.map((item) => item.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66ff66', '#c2c2f0'], // Add more colors as needed
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66ff66', '#c2c2f0'],
        hoverOffset:10
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to control the size manually
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
          const currentValue = dataset.data[tooltipItem.index];
          const percentage = Math.floor((currentValue / total) * 100 + 0.5);
          return `${data.labels[tooltipItem.index]}: ${percentage}%`;
        },
      },
    },
  };
  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <h2>Number of Employees per Department</h2>
      <div style={{height:'400px',width:'400px',marginBottom:'30px'}} >
        <Pie data={chartData} options={chartOptions}/>
      </div>

    </div>
  )
}

export default Pieplot