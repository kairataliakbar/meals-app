import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

const CategoryMealScreen = () => (
  <View style={styles.screen}>
    <Text>The Category Meal Screen!</Text>
  </View>
);

export default CategoryMealScreen;
