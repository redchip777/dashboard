import axios from 'axios';

// Load environment variables
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

if (!ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
  throw new Error('Missing required environment variables for Instagram API');
}

const api = axios.create({
  baseURL: 'https://graph.facebook.com/v18.0',
  params: {
    access_token: ACCESS_TOKEN,
  },
});

export async function fetchInstagramInsights(metric: string, period: string = 'day') {
  try {
    const response = await api.get(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/insights`, {
      params: {
        metric,
        period,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching Instagram insights for ${metric}:`, error);
    throw error;
  }
}

export async function fetchInstagramMedia(limit: number = 10) {
  try {
    const response = await api.get(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`, {
      params: {
        fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count',
        limit,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    throw error;
  }
}

export async function fetchInstagramFollowers() {
  try {
    const response = await api.get(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}`, {
      params: {
        fields: 'followers_count',
      },
    });
    return response.data.followers_count;
  } catch (error) {
    console.error('Error fetching Instagram followers:', error);
    throw error;
  }
}

export async function fetchInstagramData() {
  try {
    const [reach, impressions, profileViews, media, followers] = await Promise.all([
      fetchInstagramInsights('reach'),
      fetchInstagramInsights('impressions'),
      fetchInstagramInsights('profile_views'),
      fetchInstagramMedia(5),
      fetchInstagramFollowers(),
    ]);

    return {
      reach,
      impressions,
      profileViews,
      recentMedia: media,
      totalFollowers: followers,
    };
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    throw error;
  }
}

