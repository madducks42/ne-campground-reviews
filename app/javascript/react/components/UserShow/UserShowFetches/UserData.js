import axios from "axios";

export const getUserData = async (id) => {
  try {
    const { data } = await axios.get(`/api/v1/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};