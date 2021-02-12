import axios from "axios";

export const getWeatherData = async (id) => {
  try {
    const { data } = await axios.get(`/api/v1/campgrounds/${id}/weather`);
    return data;
  } catch (error) {
    console.log(error);
  }
};