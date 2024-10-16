// components/AudienceGrowthChart.tsx
import React from 'react';

interface AudienceGrowthChartProps {
  data: { date: string; value: number }[];
}

const AudienceGrowthChart: React.FC<AudienceGrowthChartProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[#3b4954] p-6 min-w-72 flex-1">
      <p className="text-white text-base font-medium">New Users</p>
      <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
        {data.map((bar, index) => (
          <React.Fragment key={index}>
            <div
              className="border-[#9cacba] bg-[#283139] border-t-2 w-full"
              style={{ height: `${bar.value}%` }}
            ></div>
            <p className="text-[#9cacba] text-[13px] font-bold">{bar.date}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AudienceGrowthChart;
