// components/ClientDashboard.tsx

import React from 'react';
import { ClientData } from '../hooks/useClientData'; // Import the ClientData type
import SectionTitle from './SectionTitle';
import ResponsiveTable from './ResponsiveTable';
import StatCard from './StatCard';

interface ClientDashboardProps {
  client: string;
  clientData: ClientData;
  // Add other props here if needed
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ client, clientData }) => {
  return (
    <div className="p-6">
      <SectionTitle title={`${client} Dashboard`} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Followers" value={clientData.totalFollowers.toString()} />
        <StatCard title="Engagement Rate" value={`${clientData.engagementRate}%`} />
        <StatCard title="Posts" value={clientData.totalPosts.toString()} />
        <StatCard title="Avg. Likes" value={clientData.averageLikes.toString()} />
      </div>

      <SectionTitle title="Recent Posts" />
      <ResponsiveTable 
        headers={['Date', 'Post', 'Likes', 'Comments', 'Shares']}
        data={clientData.recentPosts.map(post => [
          post.date,
          post.content,
          post.likes.toString(),
          post.comments.toString(),
          post.shares.toString()
        ])}
      />

      <SectionTitle title="Audience Demographics" />
      {/* Add more sections and components as needed */}
    </div>
  );
};

export default ClientDashboard;
