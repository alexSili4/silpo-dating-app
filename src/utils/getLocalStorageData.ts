import { GetLSGetItem } from '@/types/authStore.types';

const getLocalStorageData = (key: string): GetLSGetItem => {
  const token = localStorage.getItem(key);

  return token ? JSON.parse(token) : null;
};

export default getLocalStorageData;
