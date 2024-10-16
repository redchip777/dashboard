// pages/clients/[client]/[subpage].tsx

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import ClientLayout from '../../../components/ClientLayout';
import Head from 'next/head';
import Overview from '../../../components/client/Overview';
import Ownership from '../../../components/client/Ownership';
import ResearchCoverage from '../../../components/client/ResearchCoverage';
// Import other subpage components as needed

interface SubpageProps {
  client: string;
  subpage: string;
  data: any; // Modify this to be more specific if necessary
}

const Subpage: NextPage<SubpageProps> = ({ client, subpage, data }) => {
  // Render different components based on the subpage
  const renderSubpage = () => {
    switch (subpage) {
      case 'overview':
        return <Overview data={data} />;
      case 'ownership':
        return <Ownership data={data} />;
      case 'research-coverage':
        return <ResearchCoverage data={data} />;
      // Add more cases as you create new subpages
      default:
        return <p className="text-white">Subpage not found.</p>;
    }
  };

  return (
    <ClientLayout>
      <Head>
        <title>{`${client} - ${subpage.charAt(0).toUpperCase() + subpage.slice(1)}`} | Galileo Design</title>
      </Head>
      {renderSubpage()}
    </ClientLayout>
  );
};

export const getStaticPaths = async () => {
  const clients = [
    {
      name: 'ZOM',
      subpages: ['overview', 'ownership', 'research-coverage', 'landing-page-traffic', 'webinar-performance', 'email-performance', 'stats', 'feedback'],
    },
    // Add other clients similarly
  ];

  const paths = clients.flatMap((client) =>
    client.subpages.map((subpage) => ({
      params: { client: client.name, subpage },
    }))
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { client, subpage } = context.params;

  let data = {};

  // Fetching data based on the subpage
  switch (subpage) {
    case 'overview':
      data = await fetchOverviewData(client);
      break;
    case 'ownership':
      data = await fetchOwnershipData(client);
      break;
    case 'research-coverage':
      data = await fetchResearchCoverageData(client);
      break;
    // Add other cases for fetching data for specific subpages
    default:
      break;
  }

  return {
    props: {
      client,
      subpage,
      data,
    },
  };
};

// Mock functions to simulate data fetching
async function fetchOverviewData(client: string) {
  return {
    overviewMetric: "Overview data for client: " + client,
  };
}

async function fetchOwnershipData(client: string) {
  return {
    ownershipDetails: "Ownership data for client: " + client,
  };
}

async function fetchResearchCoverageData(client: string) {
  return {
    coverageDetails: "Research coverage data for client: " + client,
  };
}

export default Subpage;
