import { IRecipe } from "@/lib/interfaces";
import { createContext, useContext, useReducer } from "react";

interface IUser {
    name: string | null,
    favRecipes: IRecipe[],
    favCat: string | null;
    favCountry: string | null
}

interface IUserContext {
    user: IUser,
    deleteRecipe: (mealID: string) => void;
    addRecipe: (mealIdAndName: IRecipe) => void;
    updateCategory: (cat: string) => void;
    updateName: (name: string) => void;
    updateCountry: (country:string) => void;
}

export const UserContext = createContext<IUserContext | null>(null)

type UserActions =
    | { type: 'updateCategory', payload: string }
    | { type: 'addRecipe', payload: IRecipe }
    | { type: 'deleteFavRecipe', payload: string }
    | { type: 'name', payload: string }
    | { type: 'updateCountry', payload: string }


const inititalState: IUser = {
    name: null,
    favRecipes: [],
    favCat: null,
    favCountry: null
}

const reducer = (state: IUser, action: UserActions): IUser => {
    switch (action.type) {
        case 'name': return { ...state, name: action.payload };
        case 'addRecipe': return { ...state, favRecipes: [...state.favRecipes, action.payload] };
        case 'updateCategory': return { ...state, favCat: action.payload };
        case 'updateCountry': return { ...state, favCountry: action.payload };
        case 'deleteFavRecipe': return { ...state, favRecipes: state.favRecipes.filter(item => item.id !== action.payload) }
        default: return state;
    }
}

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [{ name, favRecipes, favCat, favCountry }, dispatch] = useReducer(reducer, inititalState)

    const deleteFavRecipe = (mealID: string) => dispatch({ type: 'deleteFavRecipe', payload: mealID });
    const updateName = (name: string) => dispatch({ type: 'name', payload: name })
    const updateCategory = (cat: string) => dispatch({ type: 'updateCategory', payload: cat })
    const addRecipe = (meal: IRecipe) => dispatch({ type: 'addRecipe', payload: meal })
    const updateCountry = (country: string) => dispatch({ type: 'updateCountry', payload: country })

    return <UserContext.Provider value={{
        user: { name, favRecipes, favCat, favCountry },
        deleteRecipe: deleteFavRecipe,
        addRecipe: addRecipe,
        updateCategory: updateCategory,
        updateName: updateName,
        updateCountry: updateCountry
        
    }}>{children}</UserContext.Provider>
}

const useUser = () => {
    const context: IUserContext | null = useContext(UserContext);
    if (context === undefined || context === null) throw new Error('UserContext used outside scope');
    return context as IUserContext;
}

export { useUser, UserContextProvider };
