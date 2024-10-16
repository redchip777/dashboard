import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  // You can add authentication headers here if needed
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Handle global error responses here
  if (error.response && error.response.status === 401) {
    // Handle unauthorized access (e.g., redirect to login page)
    console.log('Unauthorized access');
    // You might want to redirect to login page or refresh token here
  }
  return Promise.reject(error);
});

export const fetchDashboardData = async () => {
  try {
    const response = await api.get('/api/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

export const fetchClientData = async (clientId: string) => {
  try {
    const response = await api.get(`/api/clients/${clientId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for client ${clientId}:`, error);
    throw error;
  }
};

export const fetchGoogleAnalyticsData = async (startDate: string, endDate: string) => {
  try {
    const response = await api.get('/api/dashboard/google-analytics', {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    throw error;
  }
};

// Add more API call functions as needed

export default api;
