// components/client/WebinarPerformance.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import { WebinarPerformance as WebinarPerformanceType } from '../../types/client';

interface WebinarPerformanceProps {
  data: WebinarPerformanceType[];
}

const WebinarPerformance: React.FC<WebinarPerformanceProps> = ({ data }) => {
  const headers = ['Date', 'Registrations', 'Attendance', 'Conversion Rate'];
  
  const rows = data.map((record) => [
    record.date.toLocaleDateString(), // Assuming date is already a Date object
    record.registrations.toLocaleString(),
    record.attendance.toLocaleString(),
    `${record.conversionRate.toFixed(2)}%`,
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Webinar Performance" subtitle="Metrics on webinar engagements." />
      <ResponsiveTable headers={headers} data={rows} />
    </div>
  );
};

export default WebinarPerformance;
