import client from "../client";

export const getPlanList = async (accessToken, offset, size) => {
  const response = await client.get(
    `/plan/list?offset=${offset}&size=${size}`,
    {
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }
  );

  return response;
};

export const createPlan = async (accessToken, data) => {
  const response = await client.post(`/plan/create`, data, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });
  return response;
};

export const deletePlan = async (accessToken, uuid) => {
  const response = await client.delete(`/plan/${uuid}`, {
    headers: {
      "X-AUTH-TOKEN": accessToken,
    },
  });

  return response;
};

// 조인 api 이해가 아직 잘 안됨
