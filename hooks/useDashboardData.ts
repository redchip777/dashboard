import { useState, useEffect } from 'react';
import { fetchDashboardData } from '../lib/api';

interface DashboardData {
  totalFollowers: number;
  newFollowers: number;
  engagementRate: number;
  dailyAverageNewFollowers: number;
  qrCodeEngagement: number;
  followersChartData: any; // Replace 'any' with a more specific type if possible
  engagementRateChartData: any;
  adImpressionsChartData: any;
  ctrChartData: any;
  platformInsightsChartData: any;
  platformMetrics: {
    name: string;
    metrics: { label: string; value: string }[];
  }[];
  additionalKPIs: {
    name: string;
    metrics: { label: string; value: string }[];
  }[];
  adPerformance: {
    name: string;
    metrics: { label: string; value: string }[];
  }[];
  engagingPosts: {
    image: string;
    title: string;
  }[];
  engagedUsers: {
    image: string;
    alt: string;
  }[];
  clients: string[];
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred while fetching dashboard data'));
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => {
    loadDashboardData();
  };

  return { data, isLoading, error, refetch };
}
