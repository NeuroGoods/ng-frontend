import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8000', // Ensure it matches Laravel's base URL
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
