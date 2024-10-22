import express from 'express';
import { getGoogleAnalyticsData } from '../services/googleAnalytics';

const router = express.Router();

router.get('/:clientId', async (req, res) => {
  const { clientId } = req.params;
  
  try {
    const endDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 30 days ago
    
    const googleAnalyticsData = await getGoogleAnalyticsData(startDate, endDate);

    res.json({
      clientId,
      googleAnalytics: googleAnalyticsData
    });
  } catch (error) {
    console.error(`Error fetching data for client ${clientId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:clientId/google-analytics', async (req, res) => {
  const { clientId } = req.params;
  const { startDate, endDate } = req.query;
  
  try {
    if (typeof startDate !== 'string' || typeof endDate !== 'string') {
      throw new Error('Invalid date parameters');
    }
    const data = await getGoogleAnalyticsData(startDate, endDate);
    res.json({ clientId, data });
  } catch (error) {
    console.error(`Error fetching Google Analytics data for client ${clientId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
