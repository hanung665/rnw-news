import { connect } from "react-redux";
import { fetchNews } from "../actions/news";

import Home from "../screens/Home";

const mapStateToProps = state => ({
  techNews: state.techNews,
  footballNews: state.footballNews
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
