import { ArcElement, BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip,  } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { axiosGetAvgSalary } from '../../../axiosServices';
Chart.register(ArcElement, Tooltip, Legend, Title, BarController, BarElement,LinearScale,CategoryScale);
const AvgSalary = () => {
  const [averageSalaryByJob, setAverageSalaryByJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosGetAvgSalary('/employee/api/employees/average-salary-job-wise');
        console.log(response.data)
        setAverageSalaryByJob(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(averageSalaryByJob)
  const chartData = {
    labels: averageSalaryByJob.map((item) => item.job),
    // labels:['A','B'],
    datasets: [
      {
        label: 'Average Salary',
        data: averageSalaryByJob.map((item) => item.averageSalary),
        // data:[22,33],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Average Salary',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Job Title',
        },
      },
    },
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }} className='flex flex-col items-center justify-center'>
      <h2>Average Salary Department-Wise</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default AvgSalary;
