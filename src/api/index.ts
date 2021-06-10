import axios, { AxiosResponse } from 'axios';

import { users } from './urls';

const getUsers = async (): Promise<AxiosResponse> => {
  const { data } = await axios.get(users);
  return data;
};

export {
  getUsers,
};
