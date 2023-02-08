import client from "../client";

export const createUser = async (data) => {
  const response = await client.post(
    `/beakgu/member`,
    data
  );

  console.log(response);

  return response;
};
