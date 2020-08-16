import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.includes(categoryId));

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
