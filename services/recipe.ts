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
      `${process.env.NEXT_PUBLIC_API_URL}/recipes/random`
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message ?? error.message);
  }
};

export const filterRecipe = async (query: string) => {
  try {
    const { data } = await axios.get<FilterRecipeData>(
      `${process.env.NEXT_PUBLIC_API_URL}/recipes/search`,
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
      `${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message ?? error.message);
  }
};
