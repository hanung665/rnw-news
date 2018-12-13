import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    margin: 15
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#999999"
  }
});

export default Header;
