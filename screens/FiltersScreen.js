import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

const FiltersScreen = () => (
  <View style={styles.screen}>
    <Text>The Filters Screen!</Text>
  </View>
);

export default FiltersScreen;
