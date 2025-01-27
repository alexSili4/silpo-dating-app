import {
  GetLSGetItem,
  IAuthState,
  IAuthStateLS,
} from '@/types/authStore.types';
import initialState from './initialState';
import { AuthParams } from '@/constants';
import { getDataFromLS, getLocalStorageData } from '@/utils';

const authSlice = (): IAuthState => ({
  ...initialState,
  [AuthParams.tokenLSKey]: getDataFromLS(AuthParams.tokenLSKey),
  // TODO fix
  // signIn: async (data: Credentials): Promise<SignInRes | undefined> =>
  //   await signIn({
  //     set: setState({ set, name: 'signIn' }),
  //     data,
  //   }),
  // fetchProfile: async (): Promise<UserData | undefined> =>
  //   await fetchProfile({
  //     set: setState({ set, name: 'fetchProfile' }),
  //   }),
});

const storageParams = {
  name: AuthParams.tokenLSKey,
  storage: {
    getItem: getLocalStorageData,
    setItem: (name: string, { state }: IAuthStateLS): void => {
      localStorage.setItem(name, JSON.stringify(state.token));
    },
    removeItem: (name: string): void => {
      localStorage.removeItem(name);
    },
  },
};

const devToolsParams = { name: 'authStore' };

const authStore = {
  store: authSlice,
  storageParams,
  devToolsParams,
};

export default authStore;
