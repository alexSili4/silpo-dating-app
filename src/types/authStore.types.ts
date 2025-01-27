import { StorageValue } from 'zustand/middleware';
import { StringOrNull } from './types';

export interface IAuthInitialState {
  token: StringOrNull;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: StringOrNull;
}

export interface IAuthState extends IAuthInitialState {
  // TODO fix
  // signIn: (data: Credentials) => Promise<SignInRes | undefined>;
  // fetchProfile: () => Promise<UserData | undefined>;
}

export type GetLSGetItem =
  | StorageValue<IAuthState>
  | Promise<StorageValue<IAuthState>>;
