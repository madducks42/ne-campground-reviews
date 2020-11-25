import axios from "axios";

export const getCampgroundData = async (id) => {
  try {
    const { data } = await axios.get(`/api/v1/campgrounds/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};