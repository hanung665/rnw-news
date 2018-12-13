import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});

export default Container;
