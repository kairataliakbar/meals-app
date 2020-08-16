/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";
import GlobalStyles from "../constants/GlobalStyles";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <Text style={GlobalStyles.customTextBold}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList displayedMeals={favoriteMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

FavoritesScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired
};

export default FavoritesScreen;
