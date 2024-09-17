import axios from "axios";

type RandomRecipeData = {
  success: boolean;
  data: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
  };
};

type FilterRecipeData = {
  success: boolean;
  data: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }[];
};

type RecipeData = {
  success: boolean;
  data: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
  };
};

export const getRandomRecipe = async () => {
  try {
    const { data } = await axios.get<RandomRecipeData>(
      "http://localhost:3100/recipes/random"
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message ?? error.message);
  }
};

export const filterRecipe = async (query: string) => {
  try {
    const { data } = await axios.get<FilterRecipeData>(
      "http://localhost:3100/recipes/search",
      {
        params: { query },
      }
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message ?? error.message);
  }
};

export const getRecipe = async (id: string) => {
  try {
    const { data } = await axios.get<RecipeData>(
      `http://localhost:3100/recipes/${id}`
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message ?? error.message);
  }
};
