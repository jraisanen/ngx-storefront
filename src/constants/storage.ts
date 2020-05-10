export const enum StorageKey {
  AccessToken = 'access_token',
  Cart = 'cart',
}

export const LOCAL_STORAGE = {
  getItem: (key: string): string => key,
  setItem: (key: string, value: string): void => console.debug(key, value),
};
