import axios from 'axios';
import { Tasks } from './types';

export const asyncRequest = async (apiUrl: string): Promise<Tasks> => {
  const response = await axios.get(apiUrl);
  return response.data;
};
