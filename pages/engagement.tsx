// pages/engagement.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import TabMenu from '../components/TabMenu';
import StatCard from '../components/StatCard';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import TopLikes from '../components/TopLikes';
import Pagination from '../components/Pagination';

const Engagement: NextPage = () => {
  return (
    <>
      <Head>
        <title>Engagement - RedChip</title>
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
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-white text-[32px] font-bold leading-tight">
                    Engagement
                  </p>
                  <p className="text-[#9cacba] text-sm font-normal leading-normal">
                    Get a snapshot of how people are engaging with your content
                  </p>
                </div>
              </div>
              <TabMenu />
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Overview
              </h3>
              <div className="flex flex-wrap gap-4 px-4 py-6">
                <StatCard title="Daily likes" value="0">
                  <LineChart />
                </StatCard>
                <StatCard title="Top posts by likes" value="100">
                  <BarChart />
                </StatCard>
              </div>
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Top likes
              </h3>
              <TopLikes />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engagement;
