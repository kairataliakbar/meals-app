import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5
  },
  touchable: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right"
  }
});

const CategoryGridTitle = ({ title, color, onSelect }) => {
  const TouchableComp = (Platform.OS === "android" && Platform.Version >= 21)
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComp style={styles.touchable} onPress={onSelect}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
      </TouchableComp>
    </View>
  );
};

CategoryGridTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CategoryGridTitle;
