import { ICategories, IMeals, IRecipe } from "@/lib/interfaces";

export const getAllCategories = async (): Promise<ICategories | null> => {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        return data as ICategories;
    } catch (e) {
        return null;
    }
}

export const getSpecificCategory = async (specific: string): Promise<IMeals | null> => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${specific}`);
        const data = await res.json();
        return data as IMeals;
    } catch (e) {
        return null;
    }
}

export const getSpecificRecipe = async (id: string): Promise<IRecipe | null> => {
    try {
        const res: Response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();

        const ingredientsData: unknown[] = [];
        const measureData: unknown[] = [];

        for (const [key, value] of Object.entries(data.meals[0]))
            if (key.startsWith('strIngredient') && value)
                ingredientsData.push(value)
            else if (key.startsWith('strMeasure') && value)
                measureData.push(value)

        const recipeData = data.meals[0];

        const savedRecipe: IRecipe = {
            id:recipeData.idMeal,
            name: recipeData.strMeal,
            category: recipeData.strCategory,
            area: recipeData.strArea,
            image: recipeData.strMealThumb,
            video: recipeData.strYoutube,
            instructions: recipeData.strInstructions,
            ingredients: ingredientsData.map((item, index) => `${item} : ${measureData[index]}`)
        }


        return savedRecipe as IRecipe;
    } catch (e) {
        return null;
    }
}