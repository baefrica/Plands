import client from "../client";

export const deleteMember = async (accessToken) => {
  const response = await client.delete(`/session`, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });

  return response;
};

export const login = async (data) => {
  const response = await client.post(`/session/login`, data);
  return response;
};

export const logout = async (accessToken) => {
  const response = await client.post(`/session/logout`, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });

  return response;
};

export const regist = async (data) => {
  const response = await client.post(`/session/regist`, data);
  return response;
};
