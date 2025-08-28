export interface ICategory {
    idCategory: string,
    strCategory:string,
    strCategoryThumb: string,
    strCategoryDescription: string
}

export interface ICategories {
    categories: ICategory[]
}

export interface IMeals {
    meals:IMeal[] | null
}

export interface IMeal {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
}

export interface IRecipe {
    id: string,
    name: string,
    category:string,
    area:string,
    image:string,
    video:string,
    instructions:string,
    ingredients: string[]
}