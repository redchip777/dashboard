// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { FiBell, FiMessageCircle } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#283139] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="w-4 h-4">
          <svg
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          RedChip
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {['Dashboard', 'Content', 'Engagement', 'Audiences', 'Insights'].map(
            (item) => (
              <Link href="#" key={item} className="text-white text-sm font-medium leading-normal">
                {item}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-xl h-10 bg-[#283139] text-white px-2.5">
            <FiBell size={20} />
          </button>
          <button className="flex items-center justify-center rounded-xl h-10 bg-[#283139] text-white px-2.5">
            <FiMessageCircle size={20} />
          </button>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/a4934d7a-7a0b-414b-948f-16ebd4f70f29.png")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
