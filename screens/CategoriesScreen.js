import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const CategoriesScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text>The Categories Screen!</Text>
    <Button
      title="Go to Meals!"
      onPress={() => navigation.navigate("CategoryMeal")}
    />
  </View>
);

CategoriesScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default CategoriesScreen;
