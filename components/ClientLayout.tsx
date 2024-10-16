// components/ClientLayout.tsx

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const router = useRouter();
  const { client } = router.query;

  // Define navigation items and their corresponding subpages
  const navigationItems = [
    { name: 'Overview', href: `/clients/${client}/overview` },
    { name: 'Short Positions', href: `/clients/${client}/short-positions` },
    { name: 'Ownership', href: `/clients/${client}/ownership` },
    { name: 'Research Coverage', href: `/clients/${client}/research-coverage` },
    { name: 'Landing Page Traffic', href: `/clients/${client}/landing-page-traffic` },
    { name: 'Webinar Performance', href: `/clients/${client}/webinar-performance` },
    { name: 'Email Performance', href: `/clients/${client}/email-performance` },
    { name: 'Stats', href: `/clients/${client}/stats` },
    { name: 'Feedback', href: `/clients/${client}/feedback` },
  ];

  return (
    <div
      className="relative flex min-h-screen bg-background overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      {/* Sidebar */}
      <aside className="w-80 bg-background p-4">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4">
            {/* Navigation Items */}
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl ${
                    router.asPath === item.href
                      ? 'bg-darkBackground'
                      : 'hover:bg-darkBackground transition-colors duration-200'
                  }`}
                >
                  <span className="text-white text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          {/* New Report Button */}
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-[#2094f3] px-4 py-2 hover:bg-[#1e7bc4] transition-colors duration-200">
            <span className="text-white text-sm font-bold">New Report</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default ClientLayout;
