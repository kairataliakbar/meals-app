import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeight: {
    height: "85%"
  },
  mealDetails: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: "white"
  }
});

const MealItem = (props) => (
  <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeight }}>
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.image}
          >
            <Text style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

MealItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onSelectMeal: PropTypes.func.isRequired,
  affordability: PropTypes.string.isRequired,
  complexity: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default MealItem;
