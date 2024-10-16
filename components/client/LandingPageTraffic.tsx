// components/client/LandingPageTraffic.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import type { LandingPageTraffic as LandingPageTrafficType } from '../../types/client';

interface LandingPageTrafficProps {
  data: LandingPageTrafficType[];
}

const LandingPageTraffic: React.FC<LandingPageTrafficProps> = ({ data }) => {
  const headers = ['Date', 'Page Views', 'Unique Visitors', 'Conversion Rate'];
  
  const rows = data.map((record) => [
    record.date.toLocaleDateString(), // Assuming date is already a Date object
    record.pageViews.toLocaleString(),
    record.uniqueVisitors.toLocaleString(),
    `${record.conversionRate.toFixed(2)}%`,
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Landing Page Traffic" subtitle="Metrics on landing page performance." />
      <ResponsiveTable headers={headers} data={rows} />
    </div>
  );
};

export default LandingPageTraffic;
