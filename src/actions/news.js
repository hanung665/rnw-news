import axios from "axios";
import axiosx from "./axiosx";

export const fetchNews = () => {
  return async dispatch => {
    const res = await axios.all([
      axiosx.get("/everything?q=tech"),
      axiosx.get("/everything?q=football")
    ]);
    dispatch(fetchTechNewsSuccess(res[0].data.articles));
    dispatch(fetchFootballNewsSuccess(res[1].data.articles));
  };
};

const fetchTechNewsSuccess = data => ({
  type: "FETCH_TECH_NEWS_SUCCESS",
  payload: data
});

const fetchFootballNewsSuccess = data => ({
  type: "FETCH_FOOTBALL_NEWS_SUCCESS",
  payload: data
});
