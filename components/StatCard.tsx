// components/StatCard.tsx

import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  children?: React.ReactNode;  // Add this line to accept children
}

const StatCard: React.FC<StatCardProps> = ({ title, value, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
      {children}  {/* Render children here */}
    </div>
  );
};

export default StatCard;
