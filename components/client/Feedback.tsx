// components/client/Feedback.tsx

import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import type { Feedback } from '../../types/client';

interface FeedbackProps {
  data: Feedback[];
}

const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  const headers = ['Date', 'Comment', 'Rating'];
  
  const rows = data.map((record) => [
    new Date(record.createdAt).toLocaleDateString(),
    record.comment,
    record.rating,
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Client Feedback" subtitle="Reviews and ratings from clients." />
      <ResponsiveTable headers={headers} rows={rows} className="mt-4" />
    </div>
  );
};

export default Feedback;
