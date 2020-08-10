/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";
import GlobalStyles from "../constants/GlobalStyles";

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
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  
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
