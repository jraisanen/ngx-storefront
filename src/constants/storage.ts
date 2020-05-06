export const enum StorageKey {
  AccessToken = 'access_token',
  Cart = 'cart',
}

export const LOCAL_STORAGE = {
  getItem: (key: string) => '',
  setItem: (key: string, value: string) => {},
};
