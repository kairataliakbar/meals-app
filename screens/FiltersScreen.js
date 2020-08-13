/* eslint-disable react/display-name */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import CustomHeaderButton from "../components/CustomHeaderButton";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  }
});

const InputSwitch = ({ label, value, onChange }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Platform.OS === "android" && Colors.primaryColor}
    />
  </View>
);

InputSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={{ ...styles.title, ...GlobalStyles.customTextBold }}>
        Available Filters / Restrictions
      </Text>
      <InputSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={() => setIsGlutenFree(!isGlutenFree)}
      />
      <InputSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={() => setIsLactoseFree(!isLactoseFree)}
      />
      <InputSwitch
        label="Vegan"
        value={isVegan}
        onChange={() => setIsVegan(!isVegan)}
      />
      <InputSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={() => setIsVegetarian(!isVegetarian)}
      />
    </View>
  );
};

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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => console.log("Saved!")}
        />
      </HeaderButtons>
    )
  };
};

export default FiltersScreen;
