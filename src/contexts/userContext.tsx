import { createContext, useContext, useReducer } from "react";

interface IUser {
    name: string | null,
    favRecipes: string[],
    favCat: string | null;
}

interface IUserContext {
    user: IUser,
    deleteRecipe: (mealID: string) => void;
    addRecipe: (mealID: string) => void;
    updateCategory: (cat: string) => void;
    updateName: (name: string) => void;
}

export const UserContext = createContext<IUserContext | null>(null)

type UserActions =
    | { type: 'updateCategory', payload: string }
    | { type: 'addRecipe', payload: string }
    | { type: 'deleteFavRecipe', payload: string }
    | { type: 'name', payload: string }


const inititalState: IUser = {
    name: null,
    favRecipes: [],
    favCat: null
}

const reducer = (state: IUser, action: UserActions): IUser => {
    switch (action.type) {
        case 'name': return { ...state, name: action.payload };
        case 'addRecipe': return { ...state, favRecipes: [...state.favRecipes, action.payload] };
        case 'updateCategory': return { ...state, favCat: action.payload };
        case 'deleteFavRecipe': return { ...state, favRecipes: state.favRecipes.filter(item => item !== action.payload) }
        default: return state;
    }
}

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [{ name, favRecipes, favCat }, dispatch] = useReducer(reducer, inititalState)

    const deleteFavRecipe = (mealID: string) => dispatch({ type: 'deleteFavRecipe', payload: mealID });
    const updateName = (name: string) => dispatch({ type: 'name', payload: name })
    const updateCategory = (cat: string) => dispatch({ type: 'updateCategory', payload: cat })
    const addRecipe = (meal: string) => dispatch({ type: 'addRecipe', payload: meal })

    return <UserContext.Provider value={{
        user: { name, favRecipes, favCat },
        deleteRecipe: deleteFavRecipe,
        addRecipe: addRecipe,
        updateCategory: updateCategory,
        updateName: updateName

    }}>{children}</UserContext.Provider>
}

const useUser = () => {
    const context: IUserContext | null = useContext(UserContext);
    if (context === undefined || context === null) throw new Error('UserContext used outside scope');
    return context;
}

export { useUser, UserContextProvider };
