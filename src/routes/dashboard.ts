import express from 'express';
import { getGoogleAnalyticsData } from '../services/googleAnalytics';
import { fetchLinkedInData } from '../services/linkedin';
import { fetchFacebookData } from '../services/facebook';
import { fetchInstagramData } from '../services/instagram';
import { fetchTwitterData } from '../services/twitter';
import { fetchWebullData } from '../services/webull';

const router = express.Router();

router.get('/', async (req, res) => {
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
      googleAnalytics: googleAnalyticsData,
      linkedIn: linkedInData,
      facebook: facebookData,
      instagram: instagramData,
      twitter: twitterData,
      webull: webullData
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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

router.get('/linkedin', async (req, res) => {
  try {
    const data = await fetchLinkedInData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/facebook', async (req, res) => {
  try {
    const data = await fetchFacebookData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Facebook data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/instagram', async (req, res) => {
  try {
    const data = await fetchInstagramData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/twitter', async (req, res) => {
  try {
    const data = await fetchTwitterData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/webull', async (req, res) => {
  try {
    const data = await fetchWebullData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Webull data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
