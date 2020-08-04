import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  flatListStyle: {
    width: "100%",
    paddingHorizontal: 10
  }
});

const CategoryMealScreen = ({ navigation }) => {
  const renderMealItem = (itemData) => (
    <MealItem
      title={itemData.item.title}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      image={itemData.item.imageUrl}
      duration={itemData.item.duration}
      onSelectMeal={() => navigation.navigate("MealDetail", {
        mealId: itemData.item.id
      })}
    />
  );

  const categoryId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={styles.flatListStyle}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return { title: selectedCategory.title };
};

CategoryMealScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired
};

export default CategoryMealScreen;
