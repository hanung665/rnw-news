import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import Container from "../components/Container";
import Header from "../components/Header";
import { fetchNews } from "../actions/news";
import HorizontalCard from "../components/HorizontalCard";
import VerticalCard from "../components/VerticalCard";
import Loading from "../components/Loading";

class Home extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.fetchNews();
    await this.setState({ loading: false });
  }

  handleOpenNews(url) {
    window.open(url, "_blank");
  }

  render() {
    const { techNews, footballNews } = this.props;

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <Container>
        <Header title="Tech" subtitle="Latest news about technology" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={techNews}
          keyExtractor={(item, i) => JSON.stringify(i)}
          renderItem={({ item }) => (
            <HorizontalCard
              title={item.title}
              description={item.description}
              thumbnail={item.urlToImage}
              publishedAt={item.publishedAt}
              source={item.source.name}
              onPress={() => this.handleOpenNews(item.url)}
            />
          )}
        />
        <Header title="Football" subtitle="Latest news about football" />
        <FlatList
          data={footballNews}
          keyExtractor={(item, i) => JSON.stringify(i)}
          renderItem={({ item }) => (
            <VerticalCard
              title={item.title}
              description={item.description}
              thumbnail={item.urlToImage}
              publishedAt={item.publishedAt}
              source={item.source.name}
              onPress={() => this.handleOpenNews(item.url)}
            />
          )}
        />
      </Container>
    );
  }
}

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
