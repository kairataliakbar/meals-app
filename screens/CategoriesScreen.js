import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => navigation.navigate("CategoryMeal", {
        categoryId: itemData.item.id
      })}
    />
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
