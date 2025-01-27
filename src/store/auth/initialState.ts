import { IAuthInitialState } from '@/types/authStore.types';

const initialState: IAuthInitialState = {
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export default initialState;
