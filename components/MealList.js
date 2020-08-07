import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  flatListStyle: {
    width: "100%",
    paddingHorizontal: 10
  }
});

const MealList = ({ displayedMeals, navigation }) => {
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

MealList.propTypes = {
  displayedMeals: PropTypes.array.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired
};

export default MealList;
