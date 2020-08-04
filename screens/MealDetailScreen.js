/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("work!")}
        />
      </HeaderButtons>
    )
  };
};

MealDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default MealDetailScreen;
