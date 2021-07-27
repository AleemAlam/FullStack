import axios from "axios";

const baseUrl = "http://localhost:3300/api";

export const loginNetworkRequest = (email, password) => {
  return axios.post(`${baseUrl}/users/login`, { email, password });
};
export const teacherNetworkRequest = (
  token,
  search,
  page,
  sort,
  order,
  gender
) => {
  console.log(
    `${baseUrl}/teacher?page=${page}&search=${search}&sort=${
      sort ? sort : ""
    }&order=${order ? order : ""}&gender=${gender ? gender : ""}`
  );
  return axios.get(
    `${baseUrl}/teacher?page=${page}&search=${search ? search : ""}&sort=${
      sort ? sort : ""
    }&order=${order ? order : ""}&gender=${gender ? gender : ""}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const classNetworkRequest = (token, id) => {
  return axios.get(`${baseUrl}/class/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
