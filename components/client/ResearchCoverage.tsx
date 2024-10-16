// components/client/ResearchCoverage.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import { ResearchCoverage as ResearchCoverageType } from '../../types/client';

interface ResearchCoverageProps {
  data: ResearchCoverageType[];
}

const ResearchCoverage: React.FC<ResearchCoverageProps> = ({ data }) => {
  const headers = ['Date', 'Firm', 'Rating', 'Price Target'];
  
  const rows = data.map((record) => [
    record.date.toLocaleDateString(), // Assuming date is already a Date object
    record.firm,
    record.rating,
    `$${record.priceTarget.toFixed(2)}`,
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Research Coverage" subtitle="Analyst reports and ratings." />
      <ResponsiveTable headers={headers} data={rows} />
    </div>
  );
};

export default ResearchCoverage;
