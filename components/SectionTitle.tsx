// components/SectionTitle.tsx

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
