// components/ResponsiveTable.tsx

import React from 'react';

interface ResponsiveTableProps {
  headers: string[];
  data: (string | number)[][];
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                  <div className="text-sm leading-5 text-gray-900 dark:text-gray-100">{cell}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
