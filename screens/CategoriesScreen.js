/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import CustomHeaderButton from "../components/CustomHeaderButton";

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

CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Meal Categoties",
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

CategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default CategoriesScreen;
