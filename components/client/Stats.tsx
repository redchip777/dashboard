// components/client/Stats.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import StatCard from '../StatCard';
import type { Stats } from '../../types/client';

interface StatsProps {
  data: Stats[];
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  return (
    <div className="my-8">
      <SectionTitle title="Statistics" subtitle="Key performance indicators." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {data.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            // Optional: Add icons or colors based on stat type
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
