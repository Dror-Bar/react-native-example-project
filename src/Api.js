const BASE_URL = 'https://example.com/';

export const setToken = token => {
  headers.Authorization = `Bearer ${token}`;
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getAsync = async ({fullUrl, path}) => {
  const url = fullUrl || `${BASE_URL}${path}`;
  __DEV__ && console.log(`[Request] GET ${url}`, {headers});
  try {
    let res = await fetch(url, {method: 'GET', headers});
    res = await res.json();
    __DEV__ && console.log(`[Response] GET ${url}`, res);
    return res;
  } catch (e) {
    __DEV__ && console.log(`[Error] GET ${url}`, e);
    throw e;
  }
};

export const postAsync = async ({fullUrl, path, body}) => {
  const url = fullUrl || `${BASE_URL}${path}`;
  __DEV__ && console.log(`[Request] POST ${url}`, body, {headers});
  try {
    let res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    res = await res.json();
    __DEV__ && console.log(`[Response] POST ${url}`, res);
    return res;
  } catch (e) {
    __DEV__ && console.log(`[Error] POST ${url}`, e);
    throw e;
  }
};
