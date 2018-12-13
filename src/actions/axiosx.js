import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": "e1bd1023a1af4a3488fde99d874f3b76"
  }
});
