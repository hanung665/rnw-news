import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { format } from "date-fns";

const VerticalCard = ({
  title,
  description,
  thumbnail,
  publishedAt,
  source,
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardLeft}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.footer} numberOfLines={1}>
          {format(publishedAt, "D MMMM YYYY")} - {source}
        </Text>
      </View>
      <View style={styles.cardRight}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F9F9F9",
    marginHorizontal: 15
  },
  cardLeft: {
    flex: 0.7
  },
  cardRight: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  thumbnail: {
    height: 60,
    width: 60,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5
  },
  description: {
    color: "#999999"
  },
  footer: {
    color: "#999999",
    fontWeight: "600",
    marginVertical: 10
  }
});

export default VerticalCard;
