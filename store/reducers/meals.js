import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialValues = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialValues, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if (state.favoriteMeals.find((meal) => meal.id === action.mealId)) {
        return ({
          ...state,
          favoriteMeals: state.favoriteMeals.filter((meal) => (meal.id !== action.mealId))
        });
      } else {
        const meal = state.meals.find((fm) => fm.id === action.mealId);
        return ({
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal)
        });
      }
    default:
      return state;
  }
};

export default mealsReducer;
