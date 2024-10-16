import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { join } from 'path';
import { readFileSync } from 'fs';

const keyFilePath = join(__dirname, '..', '..', '..', 'galileo-secrets', 'google-analytics-key.json');

let analyticsDataClient: BetaAnalyticsDataClient | null = null;

try {
  const keyFileContent = readFileSync(keyFilePath, 'utf8');
  const keyData = JSON.parse(keyFileContent);

  analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: keyData,
  });
} catch (error) {
  console.error('Error initializing Google Analytics client:', error);
}

export const getGoogleAnalyticsData = async (startDate: string, endDate: string) => {
  if (!analyticsDataClient) {
    throw new Error('Google Analytics client is not initialized');
  }

  const propertyId = process.env.GA_PROPERTY_ID;
  if (!propertyId) {
    throw new Error('GA_PROPERTY_ID is not set in environment variables');
  }

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate,
        endDate,
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  return response;
};
