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
    meals:IMeal[]
}

export interface IMeal {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
}