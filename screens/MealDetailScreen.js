/* eslint-disable react/display-name */
import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";
import GlobalStyles from "../constants/GlobalStyles";
import { toggleFavorite } from "../store/actions/meals";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15
  },
  title: {
    textAlign: "center",
    fontSize: 20
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  }
});

const ListItem = ({ children }) => (
  <View style={styles.listItem}>
    <Text style={GlobalStyles.customText}>{children}</Text>
  </View>
);

ListItem.propTypes = {
  children: PropTypes.string.isRequired
};

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const availabelMeals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) => (
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  ));
  const dispatch = useDispatch();
  
  const handleToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: handleToggleFavorite });
  }, [handleToggleFavorite]);

  useEffect(() => {
    navigation.setParams({ isFavorite: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  const selectedMeal = availabelMeals.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <Text style={GlobalStyles.customText}>{selectedMeal.duration}m</Text>
        <Text style={GlobalStyles.customText}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={GlobalStyles.customText}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={{ ...styles.title, ...GlobalStyles.customTextBold }}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text  style={{ ...styles.title, ...GlobalStyles.customTextBold }}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFavorite");

  return {
    headerTitle: mealTitle.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

MealDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default MealDetailScreen;
