// pages/index.tsx

import { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Card from '../components/Card';
import Chart from '../components/Chart';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';
import { useDashboardData } from '../hooks/useDashboardData';

const Home: NextPage = () => {
  const { data, isLoading, error } = useDashboardData();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error.message}</div>;
  }

  return (
    <div
      className="relative flex min-h-screen bg-white dark:bg-[#111518] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Head Component for <head> elements */}
      <Head>
        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap"
          onLoad={() => {
            const stylesheet = document.querySelector('link[rel="stylesheet"]') as HTMLLinkElement;
            if (stylesheet) {
              stylesheet.rel = 'stylesheet';
            }
          }}
        />
        <noscript>
          {/* Fallback for browsers with JavaScript disabled */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap"
          />
        </noscript>
        {/* Tailwind CSS via Script */}
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="beforeInteractive"
        />
      </Head>

      {/* Main Container */}
      <div className="container flex flex-1">
        {/* Sidebar */}
        <aside className="w-80 bg-white dark:bg-[#111518] p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4">
              {/* Navigation Items */}
              <nav className="flex flex-col gap-2">
                {/* Dashboard */}
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#283139]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Dashboard</span>
                </Link>

                {/* Promotions */}
                <Link href="/promotions" className="flex items-center gap-3 px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Promotions</span>
                </Link>

                {/* Audiences */}
                <Link href="/audience-insights" className="flex items-center gap-3 px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Audiences</span>
                </Link>

                {/* Content */}
                <Link href="/overview" className="flex items-center gap-3 px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Content</span>
                </Link>

                {/* Engagement */}
                <Link href="/engagement" className="flex items-center gap-3 px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                  </svg>
                  <span className="text-white text-sm font-medium">Engagement</span>
                </Link>
              </nav>
            </div>
            {/* New Report Button */}
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-white text-sm font-bold"
            >
              <span className="truncate">New report</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-black dark:text-white text-[32px] font-bold leading-tight">RedChip's Intricate Analytics</h1>
              <p className="text-gray-700 dark:text-[#9cacba] text-sm font-normal">
                Website stats, social media, and advertising performance
              </p>
            </div>
            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Statistics Cards */}
          <section className="flex flex-wrap gap-4 p-4">
            <Card title="Total followers" value={data?.totalFollowers || '0'} />
            <Card title="New followers" value={data?.newFollowers || '0'} />
            <Card title="Engagement rate" value={`${data?.engagementRate || '0'}%`} />
            <Card title="Daily average new followers" value={data?.dailyAverageNewFollowers || '0'} />
            <Card title="QR Code Engagement" value={data?.qrCodeEngagement || '0'} />
          </section>

          {/* Followers Chart */}
          <section className="flex flex-wrap gap-4 px-4 py-6">
            <ChartSection label="Followers" data={data?.followersChartData} />
            <ChartSection label="Engagement Rate" data={data?.engagementRateChartData} />
            <ChartSection label="Ad Impressions" data={data?.adImpressionsChartData} />
            <ChartSection label="CTR" data={data?.ctrChartData} />
            <ChartSection label="Platform Insights" data={data?.platformInsightsChartData} />
          </section>

          {/* Platform-Specific Metrics */}
          <MetricsSection
            title="Platform-Specific Metrics"
            platforms={data?.platformMetrics || []}
          />

          {/* Additional KPIs */}
          <MetricsSection
            title="Additional KPIs (For website performance)"
            platforms={data?.additionalKPIs || []}
          />

          {/* Ad Performance */}
          <MetricsSection
            title="Ad Performance (Organic vs Paid)"
            platforms={data?.adPerformance || []}
          />

          {/* Most Engaging Posts */}
          <EngagingPostsSection posts={data?.engagingPosts || []} />

          {/* Most Engaged Users */}
          <MostEngagedUsersSection users={data?.engagedUsers || []} />

          {/* Clients */}
          <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Clients</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {(data?.clients || []).map((client, index) => (
                <Link key={index} href={`/clients/${client}`} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] px-4 hover:bg-[#3b4954] transition-colors duration-200">
                  <p className="text-white text-sm font-medium">{client}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

/* 
  Below are helper components used within the Home component to enhance readability and maintainability.
  These can be moved to separate files in your `components` directory if preferred.
*/

// Helper Component for Chart Sections
const ChartSection: React.FC<{ label: string; data: any }> = ({ label, data }) => (
  <div className="flex min-w-72 flex-1 flex-col gap-2">
    <p className="text-white text-base font-medium leading-normal">{label}</p>
    <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
      {/* Replace this SVG with your actual Chart component or keep as inline SVG */}
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
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
        <defs>
          <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
            <stop stopColor="#283139"></stop>
            <stop offset="1" stopColor="#283139" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="flex justify-around">
        <p className="text-[#9cacba] text-[13px] font-bold">Jul 1</p>
        <p className="text-[#9cacba] text-[13px] font-bold">Jul 8</p>
        <p className="text-[#9cacba] text-[13px] font-bold">Jul 15</p>
        <p className="text-[#9cacba] text-[13px] font-bold">Jul 22</p>
        <p className="text-[#9cacba] text-[13px] font-bold">Jul 29</p>
      </div>
    </div>
  </div>
);

// Helper Component for Metrics Sections
interface MetricsSectionProps {
  title: string;
  platforms: {
    name: string;
    metrics: { label: string; value: string }[];
  }[];
}

const MetricsSection: React.FC<MetricsSectionProps> = ({ title, platforms }) => (
  <section className="mb-8">
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{title}</h2>
    {platforms.map((platform, idx) => (
      <div key={idx} className="mb-6">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{platform.name}</h3>
        <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
          {platform.metrics.map((metric, metricIdx) => (
            <div key={metricIdx} className="col-span-2 grid grid-cols-subgrid border-t border-t-[#3b4954] py-5">
              <p className="text-[#9cacba] text-sm font-normal">{metric.label}</p>
              <p className="text-white text-sm font-normal">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

// Helper Component for Engaging Posts Section
const EngagingPostsSection: React.FC<{ posts: any[] }> = ({ posts }) => (
  <section className="mb-8">
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Most Engaging Posts</h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex flex-1 gap-3 rounded-lg border border-[#3b4954] bg-[#1b2227] p-4 flex-col"
        >
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{ backgroundImage: `url(${post.image})` }}
          ></div>
          <h2 className="text-white text-base font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  </section>
);

// Helper Component for Most Engaged Users Section
const MostEngagedUsersSection: React.FC<{ users: any[] }> = ({ users }) => (
  <section className="mb-8">
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Most Engaged Users</h2>
    <div className="flex items-center px-4 py-3 justify-start">
      {users.map((user, index) => (
        <div key={index} className="overflow-visible w-11 mr-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover border-[#111518] bg-[#283139] text-[#9cacba] rounded-full flex items-center justify-center size-11 border-4"
            style={{ backgroundImage: `url("${user.image}")` }}
            aria-label={user.alt}
          >
            {/* Optionally, add initials or icons here */}
          </div>
        </div>
      ))}
      {/* Add more user avatars as needed */}
    </div>
  </section>
);