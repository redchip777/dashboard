import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { clientId } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Assuming your backend server is running on localhost:3001
    // In production, you'd use an environment variable for the API URL
    const response = await axios.get(`http://localhost:3001/api/clients/${clientId}`);
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching client data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

