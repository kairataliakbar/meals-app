import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

const MealDetailScreen = () => (
  <View style={styles.screen}>
    <Text>The Meal Detail Screen!</Text>
  </View>
);

export default MealDetailScreen;
