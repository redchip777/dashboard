// components/client/EmailPerformance.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import type { EmailPerformance as EmailPerformanceType } from '../../types/client'; // Use type-only import

interface EmailPerformanceProps {
  data: EmailPerformanceType[];
}

const EmailPerformance: React.FC<EmailPerformanceProps> = ({ data }) => {
  const headers = ['Date', 'Sends', 'Opens', 'Clicks', 'Conversion Rate'];
  
  const rows = data.map((record) => [
    record.date.toLocaleDateString(), // Assuming date is already a Date object
    record.sends.toLocaleString(),
    record.opens.toLocaleString(),
    record.clicks.toLocaleString(),
    `${record.conversionRate.toFixed(2)}%`,
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Email Performance" subtitle="Detailed metrics on email campaigns." />
      <ResponsiveTable headers={headers} data={rows} />
    </div>
  );
};

export default EmailPerformance;
