import express from 'express';
import { getGoogleAnalyticsData } from '../services/googleAnalytics';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Received request for dashboard data');
  try {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    console.log(`Fetching Google Analytics data from ${startDate} to ${endDate}`);
    const googleAnalyticsData = await getGoogleAnalyticsData(startDate, endDate);
    
    console.log('Google Analytics data received:', JSON.stringify(googleAnalyticsData, null, 2));
    res.json({
      googleAnalytics: googleAnalyticsData
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    res.status(500).json({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' });
  }
});

router.get('/google-analytics', async (req, res) => {
  const { startDate, endDate } = req.query;
  
  try {
    if (typeof startDate !== 'string' || typeof endDate !== 'string') {
      throw new Error('Invalid date parameters');
    }
    const data = await getGoogleAnalyticsData(startDate, endDate);
    res.json(data);
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
