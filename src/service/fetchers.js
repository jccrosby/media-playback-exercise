import axios from "axios";

export const simpleGetFetcher = (url) => {
  return axios.get(url).then((response) => response.data);
};
