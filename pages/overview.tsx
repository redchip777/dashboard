// pages/overview.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import TabMenu from '../components/TabMenu';
import StatCard from '../components/StatCard';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import ContentTable from '../components/ContentTable';

const Overview: NextPage = () => {
  return (
    <>
      <Head>
        <title>Overview - RedChip</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
      </Head>
      <div
        className="relative flex min-h-screen flex-col bg-[#111518] overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="flex h-full grow flex-col">
          <Header />
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-white text-[32px] font-bold leading-tight min-w-72">
                  Overview
                </p>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#283139] text-white text-sm font-medium leading-normal">
                  <span className="truncate">New post</span>
                </button>
              </div>
              <TabMenu />
              <div className="flex flex-wrap gap-4 px-4 py-6">
                <StatCard title="Total Views" value="1,000">
                  <LineChart />
                  <div className="flex justify-around">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(
                      (month) => (
                        <p
                          key={month}
                          className="text-[#9cacba] text-[13px] font-bold leading-normal tracking-[0.015em]"
                        >
                          {month}
                        </p>
                      )
                    )}
                  </div>
                </StatCard>
                <StatCard title="Total Engagements" value="100">
                  <BarChart />
                </StatCard>
              </div>
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Top 5 Content
              </h2>
              <ContentTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
