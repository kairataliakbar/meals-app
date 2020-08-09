/* eslint-disable react/display-name */
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Text } from "react-native";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android"
      ? Colors.primaryColor
      : "white"
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === "android"
        && <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === "android"
        && <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
    },
  }
};

const MealsTabNavigator = Platform.OS === "android"
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    shifting: true
  })
  : createBottomTabNavigator(tabScreenConfig,
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
},{
  defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator(
  {
    Meals: MealsTabNavigator,
    Filters: FiltersNavigator
  }, {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
