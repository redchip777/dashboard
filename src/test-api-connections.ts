import * as dotenv from 'dotenv';
import { fetchFacebookData } from './services/facebook';
import { fetchTwitterFollowers, fetchTwitterTweets } from './services/twitter';
import { fetchInstagramData } from './services/instagram';
import { getGoogleAnalyticsData } from './services/googleAnalytics';

dotenv.config();

async function testConnections() {
  console.log('Starting API tests...');

  try {
    console.log('\nTesting Facebook API...');
    const facebookData = await fetchFacebookData();
    console.log('Facebook API connection successful:', facebookData);
  } catch (error) {
    console.error('Facebook API connection failed:', error);
  }

  try {
    console.log('\nTesting Twitter API...');
    const followers = await fetchTwitterFollowers('25292321');
    console.log('Twitter followers:', followers);
    const tweets = await fetchTwitterTweets('25292321');
    console.log('Recent tweets:', tweets.length);
  } catch (error) {
    console.error('Twitter API connection failed:', error);
  }

  try {
    console.log('\nTesting Google Analytics API...');
    const endDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 30 days ago
    const gaData = await getGoogleAnalyticsData(startDate, endDate);
    console.log('Google Analytics API connection successful:', gaData);
  } catch (error) {
    console.error('Google Analytics API connection failed:', error);
  }

  console.log('\nSkipping Instagram API test (access token not available)');
  console.log('Skipping LinkedIn API test (access token not available)');
  console.log('Skipping Webull API test');

  console.log('\nAPI tests completed.');
}

testConnections().catch(console.error);
