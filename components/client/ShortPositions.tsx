// components/client/ShortPositions.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import { ShortPosition } from '../../types/client';

interface ShortPositionsProps {
  data: ShortPosition[];
}

const ShortPositions: React.FC<ShortPositionsProps> = ({ data }) => {
  const headers = ['Date', 'Short Volume', 'Short Exempt Volume', 'Total Volume'];
  
  const rows = data.map((record) => [
    record.date.toLocaleDateString(), // Changed from new Date(record.date) to record.date
    record.shortVolume.toLocaleString(),
    record.shortExemptVolume.toLocaleString(),
    record.totalVolume.toLocaleString(),
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Short Positions" subtitle="Details of short selling activities." />
      <ResponsiveTable headers={headers} data={rows} />
    </div>
  );
};

export default ShortPositions;
