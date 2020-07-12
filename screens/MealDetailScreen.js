import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const MealDetailScreen = () => (
  <View style={styles.screen}>
    <Text>The Meal Detail Screen!</Text>
  </View>
);

export default MealDetailScreen;
