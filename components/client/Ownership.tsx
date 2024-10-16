import React, { FC } from 'react';
import { OwnershipData } from '../../types/client';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';

interface OwnershipProps {
  data: OwnershipData[];
}

const Ownership: FC<OwnershipProps> = ({ data }) => {
  const headers = ['Institution', 'Shares', 'Change'];

  const rows = data.map((item) => [
    item.institution,
    item.shares.toLocaleString(),
    item.change
  ]);

  return (
    <div className="my-8">
      <SectionTitle title="Ownership" subtitle="Details of institutional ownership." />
      <ResponsiveTable headers={headers} data={rows} />
    </div>
  );
};

export default Ownership;
