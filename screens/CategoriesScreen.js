import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate("CategoryMeal", {
        categoryId: itemData.item.id
      })}
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  title: "Meal Categoties"
};

CategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default CategoriesScreen;
