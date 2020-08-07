import React from "react";
import PropTypes from "prop-types";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }) => {
  const displayedMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = {
  title: "Your Favorites"
};

FavoritesScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired
};

export default FavoritesScreen;
