import axios, { AxiosResponse } from 'axios';

export const getData = async (endpoint: string): Promise<AxiosResponse> => {
  const request = await axios.get(endpoint);

  return request;
};
