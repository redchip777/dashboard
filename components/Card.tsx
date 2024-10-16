// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
}

const Card: React.FC<CardProps> = ({ title, value }) => (
  <div className="flex-1 min-w-[200px] p-4 bg-[#1b2227] rounded-lg">
    <h3 className="text-[#9cacba] text-sm font-medium mb-2">{title}</h3>
    <p className="text-white text-2xl font-bold">{value.toString()}</p>
  </div>
);

export default Card;
