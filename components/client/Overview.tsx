import React from 'react';
import SectionTitle from '../SectionTitle';
import ResponsiveTable from '../ResponsiveTable';
import StatCard from '../StatCard';

interface ClientData {
  contentPerformance: {
    pageViews: {
      data: number[];
      labels: string[];
    };
  };
  shortPositions: {
    date: string;
    shortVolume: number;
    shortExemptVolume: number;
    totalVolume: number;
  }[];
  ownership: {
    institution: string;
    shares: number;
    change: number;
  }[];
  stats: {
    title: string;
    value: string | number;
  }[];
}

interface OverviewProps {
  clientData: ClientData;
}

const Overview: React.FC<OverviewProps> = ({ clientData }) => {
  return (
    <div>
      <SectionTitle title="Content Performance" />
      <div className="flex flex-wrap gap-4 px-4 py-6">
        <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-border p-6">
          <p className="text-white text-base font-medium leading-normal">Page views</p>
          <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
            {/* Replace this with an actual chart component using clientData.contentPerformance.pageViews */}
            <svg
              width="100%"
              height="148"
              viewBox="-3 0 478 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                fill="url(#paint0_linear_1131_5935)"
              ></path>
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                stroke="#9cacba"
                strokeWidth={3}
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_1131_5935"
                  x1="236"
                  y1="1"
                  x2="236"
                  y2="149"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#283139"></stop>
                  <stop offset="1" stopColor="#283139" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-around">
              {clientData.contentPerformance.pageViews.labels.map((label, index) => (
                <p key={index} className="text-textPrimary text-[13px] font-bold">{label}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionTitle title="Short Positions" />
      <ResponsiveTable
        headers={['Date', 'Short volume', 'Short exempt volume', 'Total volume']}
        data={clientData.shortPositions.map(position => [
          position.date,
          position.shortVolume.toString(),
          position.shortExemptVolume.toString(),
          position.totalVolume.toString()
        ])}
      />

      <SectionTitle title="Ownership" />
      <ResponsiveTable
        headers={['Institution', 'Shares', 'Change']}
        data={clientData.ownership.map(owner => [
          owner.institution,
          owner.shares.toString(),
          `${owner.change > 0 ? '+' : ''}${owner.change}%`
        ])}
      />

      <SectionTitle title="Stats" />
      <div className="flex flex-wrap gap-4 p-4">
        {clientData.stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
