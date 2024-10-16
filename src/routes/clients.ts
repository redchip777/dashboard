import express from 'express';
import { getGoogleAnalyticsData } from '../services/googleAnalytics';
import { fetchLinkedInData } from '../services/linkedin';
import { fetchFacebookData } from '../services/facebook';
import { fetchInstagramData } from '../services/instagram';
import { fetchTwitterData } from '../services/twitter';
import { fetchWebullData } from '../services/webull';

const router = express.Router();

router.get('/:clientId', async (req, res) => {
  const { clientId } = req.params;
  
  try {
    const endDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 30 days ago
    
    const [
      googleAnalyticsData,
      linkedInData,
      facebookData,
      instagramData,
      twitterData,
      webullData
    ] = await Promise.all([
      getGoogleAnalyticsData(startDate, endDate),
      fetchLinkedInData(),
      fetchFacebookData(),
      fetchInstagramData(),
      fetchTwitterData(),
      fetchWebullData()
    ]);

    res.json({
      clientId,
      googleAnalytics: googleAnalyticsData,
      linkedIn: linkedInData,
      facebook: facebookData,
      instagram: instagramData,
      twitter: twitterData,
      webull: webullData
    });
  } catch (error) {
    console.error(`Error fetching data for client ${clientId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed, for example:

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

router.get('/:clientId/linkedin', async (req, res) => {
  const { clientId } = req.params;
  
  try {
    const data = await fetchLinkedInData();
    res.json({ clientId, data });
  } catch (error) {
    console.error(`Error fetching LinkedIn data for client ${clientId}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add similar routes for other services...

export default router;
