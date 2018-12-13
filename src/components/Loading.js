import React from "react";
import {
  View,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Dimensions
} from "react-native";

const { height } = Dimensions.get("window");

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      web: {
        flex: 1,
        justifyContent: "center",
        paddingTop: height / 2
      }
    }),
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Loading;
