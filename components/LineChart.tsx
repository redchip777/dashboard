// components/LineChart.tsx
import React from 'react';

const LineChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <svg
        width="100%"
        height="148"
        viewBox="-3 0 478 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="paint0_linear_linechart"
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
        <path
          d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
          fill="url(#paint0_linear_linechart)"
        ></path>
        <path
          d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
          stroke="#9cacba"
          strokeWidth="3"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  );
};

export default LineChart;
