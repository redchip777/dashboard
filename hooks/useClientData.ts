import { useState, useEffect } from 'react';
import { fetchClientData } from '../lib/api';

export interface ClientData {
  totalFollowers: number;
  engagementRate: number;
  totalPosts: number;
  averageLikes: number;
  recentPosts: {
    date: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
  }[];
  // Add other relevant fields
}

export function useClientData(clientId: string) {
  const [data, setData] = useState<ClientData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadClientData() {
      try {
        setIsLoading(true);
        const clientData = await fetchClientData(clientId);
        setData(clientData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadClientData();
  }, [clientId]);

  const refetch = () => {
    setIsLoading(true);
    setError(null);
    fetchClientData(clientId)
      .then((clientData) => {
        setData(clientData);
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, isLoading, error, refetch };
}
