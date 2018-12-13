import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import Home from "./containers/Home";

import store from "./store";

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

AppRegistry.registerComponent("RNWNews", () => App);

AppRegistry.runApplication("RNWNews", {
  rootTag: document.getElementById("root")
});
