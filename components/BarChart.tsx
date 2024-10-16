// components/BarChart.tsx
import React from 'react';

interface BarData {
  label: string;
  value: number;
}

const barData: BarData[] = [
  { label: 'Social Media', value: 80 },
  { label: 'Google Ads', value: 100 },
  { label: 'TV', value: 100 },
  { label: 'Radio', value: 30 },
  { label: 'Magazine', value: 40 },
];

const BarChart: React.FC = () => {
  return (
    <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
      {barData.map((data) => (
        <React.Fragment key={data.label}>
          <p className="text-[#9cacba] text-[13px] font-bold tracking-[0.015em]">
            {data.label}
          </p>
          <div className="h-full flex-1">
            <div
              className="border-r-2 border-[#9cacba] bg-[#283139] h-full"
              style={{ width: `${data.value}%` }}
            ></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BarChart;
