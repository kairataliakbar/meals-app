import { MEALS } from "../../data/dummy-data";

const initialValues = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialValues, action) => {
  return state;
};

export default mealsReducer;
