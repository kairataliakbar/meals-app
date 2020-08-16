import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import GlobalStyles from "../constants/GlobalStyles";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.includes(categoryId));

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={GlobalStyles.customTextBold}>No meals found!</Text>
      </View>
    );
  }

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return { title: selectedCategory.title };
};

CategoryMealScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired
};

export default CategoryMealScreen;
