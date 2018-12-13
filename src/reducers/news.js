export const techNews = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TECH_NEWS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export const footballNews = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FOOTBALL_NEWS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
