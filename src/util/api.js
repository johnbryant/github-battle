import axios from "axios";
import { baseUrl } from "./constant";

const getUser = userName => {
  return axios({
    method: "get",
    url: `${baseUrl}/users/${userName}`
  }).then(
    user => {
      // console.log(user.data);
      return user.data;
    },
    err => {
      console.error(err);
    }
  );
};

export { getUser };
