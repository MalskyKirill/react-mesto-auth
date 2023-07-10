export const AUTH_URL = 'https://auth.nomoreparties.co';

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

//регистрация пользователя
export const register = (email, password) => {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return getResponseData(res);
  });
};

//авторизация пользователя
export const authorize = (email, password) => {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return getResponseData(res);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return;
      }
    });
};
