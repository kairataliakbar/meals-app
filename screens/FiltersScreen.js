/* eslint-disable react/display-name */
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet } from "react-native";

import CustomHeaderButton from "../components/CustomHeaderButton";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const FiltersScreen = () => (
  <View style={styles.screen}>
    <Text>The Filters Screen!</Text>
  </View>
);

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Filter Meals",
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

export default FiltersScreen;
