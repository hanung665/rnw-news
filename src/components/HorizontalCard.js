import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import { format } from "date-fns";

const { width, height } = Dimensions.get("window");

const HorizontalCard = ({
  title,
  description,
  thumbnail,
  publishedAt,
  source,
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.card} elevation={5} onPress={onPress}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.description} numberOfLines={1}>
        {description}
      </Text>
      <Text style={styles.footer} numberOfLines={1}>
        {format(publishedAt, "D MMMM YYYY")} - {source}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 1.3,
    marginHorizontal: 15,
    elevation: 0.8,
    shadowColor: "#999999",
    shadowRadius: 10,
    overflow: "hidden",
    shadowOpacity: 0.5,
    marginBottom: 15
  },
  thumbnail: {
    height: height / 3
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 0
  },
  description: {
    margin: 10,
    marginBottom: 0,
    color: "#999999"
  },
  footer: {
    color: "#999999",
    margin: 10,
    fontWeight: "600"
  }
});

export default HorizontalCard;
