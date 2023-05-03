const ID_TOKEN_KEY = 'os_id_token';

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token: string) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };