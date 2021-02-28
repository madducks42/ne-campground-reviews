import axios from "axios";

export const getImageData = async (id) => {
  debugger
  try {
    const { data } = await axios.get(`/api/v1/campgrounds/${id}/images`);
    return data;
  } catch (error) {
    console.log(error);
  }
};