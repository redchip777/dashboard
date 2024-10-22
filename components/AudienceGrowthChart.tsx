import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface AudienceGrowthChartProps {
  data: { date: string; value: number }[];
}

const AudienceGrowthChart: React.FC<AudienceGrowthChartProps> = ({ data }) => {
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData: ChartData<'bar'> = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'New Users',
        data: data.map(item => item.value),
        backgroundColor: '#283139',
        borderColor: '#9cacba',
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        grid: {
          color: '#3b4954',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[#3b4954] p-6 min-w-72 flex-1">
      <p className="text-white text-base font-medium">New Users</p>
      <div style={{ height: '300px' }}>
        <Bar
          data={chartData}
          options={options}
          ref={(ref) => {
            if (ref) {
              chartRef.current = ref;
            }
          }}
        />
      </div>
    </div>
  );
};

export default AudienceGrowthChart;