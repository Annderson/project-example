// import endpoint from 'data/api/endpoints';

export interface Credentials {
  user: string;
  password: string;
}

export interface LoginResponse {
  expire: number;
  refreshToken: string;
  token: string;
}

const dummyLoginResponse: LoginResponse = {
  // 1 day
  expire: Date.now() + 86400000,
  refreshToken: 'refreshToken',
  token: 'token',
};

const login = (_credentials: Credentials): Promise<LoginResponse> => {
  // const { data } = await endpoint.post('/login', credentials);
  return new Promise((resolve): void => {
    setTimeout((): void => resolve(dummyLoginResponse), 1000);
  });
};

const logout = (): Promise<void> => {
  // await endpoint.post('/logout');
  return new Promise((resolve): void => {
    setTimeout(resolve, 1000);
  });
};

export default {
  login,
  logout,
};
