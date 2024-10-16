// pages/promotions.tsx

import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import TabMenu from '../components/TabMenu';
import StatCard from '../components/StatCard';
import PromotionTable from '../components/PromotionTable';
import Chart from '../components/Chart'; // Using Chart.tsx for the line chart
import BarChart from '../components/BarChart'; // Keeping BarChart.tsx
import { Line } from 'react-chartjs-2';

const Promotions: NextPage = () => {
  // Data for the line chart
  const lineChartData = {
    labels: ['Jan 1', 'Jan 15', 'Feb 1', 'Feb 15'],
    datasets: [
      {
        label: 'Sales',
        data: [500, 700, 800, 650], // Replace with your actual data
        borderColor: '#9cacba',
        backgroundColor: 'rgba(156, 172, 186, 0.2)',
        fill: true,
        tension: 0.4, // Smooths the line
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Promotions</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="relative flex min-h-screen flex-col bg-[#111518] overflow-x-hidden"
        style={{ fontFamily: 'Inter, \"Noto Sans\", sans-serif' }}
      >
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 px-6 gap-1">
            {/* Sidebar */}
            <div className="flex flex-col w-80">
              <Sidebar />
            </div>
            {/* Main Content */}
            <div className="flex flex-col max-w-[960px] flex-1">
              {/* Header */}
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-white text-[32px] font-bold leading-tight">
                    Promotions
                  </p>
                  <p className="text-[#9cacba] text-sm">
                    View and manage all promotions
                  </p>
                </div>
              </div>
              {/* Search Bar */}
              <SearchBar />
              {/* Tab Menu */}
              <TabMenu />
              {/* Performance Overview */}
              <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">
                Performance Overview
              </h2>
              <div className="flex flex-wrap gap-4 px-4 py-6">
                {/* Sales Card */}
                <StatCard
                  title="Sales"
                  subtitle="Jan 1, 2023 - Feb 27, 2023"
                  value={0} // Replace with actual sales value
                >
                  <Line
                    data={lineChartData}
                    options={{
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        x: {
                          ticks: { color: '#9cacba' },
                          grid: { display: false },
                        },
                        y: {
                          ticks: { display: false },
                          grid: { display: false },
                        },
                      },
                    }}
                  />
                </StatCard>
                {/* Ad Spend Card */}
                <StatCard
                  title="Ad Spend"
                  subtitle="Jan 1, 2023 - Feb 27, 2023"
                  value="$0" // Add this line
                >
                  <BarChart />
                </StatCard>
              </div>
              {/* Promotions Table */}
              <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">
                Promotions
              </h2>
              <PromotionTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
