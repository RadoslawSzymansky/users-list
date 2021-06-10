import axios from 'axios';

import { users } from './urls';

type User = {
  id: string,
  name: string,
  username: string,
};

const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(users);
  return data;
};

export {
  getUsers,
};
