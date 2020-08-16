import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

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
    case SET_FILTERS: {
      const appliedFilters = action.filterSettings;
      const updateFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updateFilteredMeals };
    }
    default:
      return state;
  }
};

export default mealsReducer;
