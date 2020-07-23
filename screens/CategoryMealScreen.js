import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const CategoryMealScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>The Category Meal Screen!</Text>
    <Button
      title="Go to Detail!"
      onPress={() => navigation.navigate("MealDetail")}
    />
  </View>
);

CategoryMealScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default CategoryMealScreen;
