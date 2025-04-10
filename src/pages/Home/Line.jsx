// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
// import { useMemo } from "react";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//       display: false,
//     },
//     title: {
//       display: false,
//       text: "Line Chart",
//     },
//     tooltip: {
//       enabled: true,
//       callbacks: {
//         // Customize the title of the tooltip
//         title: (tooltipItems) => {
//           return `Month: ${tooltipItems[0].label}`;
//         },
//         // Customize the body of the tooltip
//         label: (tooltipItem) => {
//           return `Salaries: ${tooltipItem.raw}`;
//         },
//       },
//     },
//   },
// };

// const labels = [
//   "Nov-22","Nov-22","Nov-22","Nov-22","Nov-22","Nov-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22","Dec-22"
// ];

// export function LineChart({ category }) {
//   const data = useMemo(() => {
//     return {
//       labels,
//       datasets: [
//         {
//           label: "Dataset 1",
//           data: labels.map(() => faker.number.int({ min: 50000, max: 300000 })),
//           borderColor: "rgb(255, 99, 132)",
//           backgroundColor: "rgba(255, 99, 132, 0.5)",
//         },
//       ],
//     };
//   }, [category]);

//   return <Line options={options} data={data} />;
// }


import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: 'Line Chart',
    },
    tooltip: {
      enabled: true,
      callbacks: {
        title: (tooltipItems) => `Month: ${tooltipItems[0].label}`,
        label: (tooltipItem) => `Salaries: ${tooltipItem.raw}`,
      },
    },
  },
};

const categories = ["Devops", "Softwaretester", "UiUx", "Frontend", "Data_nalytics"];

function LineChart() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('access_token');  // Assuming the token is stored in localStorage
        const response = await axios.get(`http://localhost:5000/predict/${selectedCategory}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data.data;
        setChartData({
          labels: data.dates,
          datasets: [
            {
              label: 'Predictions',
              data: data.predictions,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
            <InputLabel style={{ color: '#5fc9f3' }} id="category-select-label">Category</InputLabel>
      <Select
        style={{ backgroundColor: 'white' }}
        labelId="category-select-label"
        value={selectedCategory}
        label="Category"
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenuItem-root': {
                '&:hover': {
                  backgroundColor: '#acdcee',
                },
              },
            },
          },
        }} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
      </Select>
</FormControl>
      <Line options={options} data={chartData} />
    </div>
  );
}

export default LineChart;
