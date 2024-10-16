// pages/clients/[client]/index.tsx

import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import ClientLayout from '../../../components/ClientLayout';
import ClientDashboard from '../../../components/ClientDashboard';
import Head from 'next/head';
import { useClientData } from '../../../hooks/useClientData';

interface ClientPageProps {
  client: string;
}

const ClientPage: NextPage<ClientPageProps> = ({ client }) => {
  const { data, isLoading, error } = useClientData(client);

  if (isLoading) {
    return (
      <ClientLayout>
        <div className="flex justify-center items-center h-screen">Loading...</div>
      </ClientLayout>
    );
  }

  if (error) {
    return (
      <ClientLayout>
        <div className="flex justify-center items-center h-screen">
          Error: {error.message}
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <Head>
        <title>{`${client} Dashboard`} | Galileo Design</title>
      </Head>
      {data ? (
        <ClientDashboard client={client} clientData={data} />
      ) : (
        <div>No data available for this client.</div>
      )}
    </ClientLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const clients = [
    'ZOM',
    'VNRX',
    'BFRG',
    'NTRB',
    'PRPH',
    'GENE',
    'BIVI',
    'GLSI',
    'BIAF',
    'SNGX',
    'ADTX',
    'ENLV',
    'CLDI',
    'SXTP',
    'BTCY',
    'RVPH',
    'RNAZ',
    'RMCO',
    'XELB',
    'UMAC',
    'OGEN',
    'GNS',
    'GP',
    'PEV',
    'LOBO',
    'SMXT',
    'SPI',
    'SPEC',
    'ASPI',
    'AREC',
    'INHD',
    'QYOUF',
    'PODC',
    'LVO',
    'STSS',
    'MMA',
    'OMQS',
    'EBZT',
    'MOB',
    'RCAT',
    'CVM',
    'CBDW',
    'AENT',
    'TRIB',
    'WHEN',
    'KDLY',
    'NXL',
    'CANF',
    'LYT',
    'SAVU',
    'OSTX',
  ];

  const paths = clients.map((client) => ({
    params: { client },
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' or 'true' if you have more clients to add dynamically
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { client } = context.params as { client: string };

  return {
    props: {
      client,
    },
  };
};

export default ClientPage;
