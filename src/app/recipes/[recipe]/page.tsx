'use client'
import { useUser } from "@/contexts/userContext";
import { IRecipe } from "@/lib/interfaces";
import { getSpecificRecipe } from "@/services/apiMealDb";
import Link from "next/link";
import { useEffect, useState } from "react"

let recipeDataSaved: IRecipe | null;

const Recipe = ({ params }: { params: Promise<{ recipe: string }> }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { addRecipe, deleteRecipe, user } = useUser();

    useEffect(() => {
        const fetcher = async () => {
            setIsLoading(true);
            const { recipe } = await params;
            recipeDataSaved = await getSpecificRecipe(recipe)
            setIsLoading(false);
        }
        fetcher();
    }, [params])

    const handleClick = () => {
        if (user.favRecipes.find(el => el.id === recipeDataSaved!.id))
            deleteRecipe(recipeDataSaved!.id)
        else
            addRecipe(recipeDataSaved!)
    }


    if (isLoading) return <div>...loading</div>
    return (
        <>
            {recipeDataSaved ?
                <div>
                    <button onClick={handleClick}>{user.favRecipes.find(el => el.id === recipeDataSaved!.id) ? 'Remove from favourites' : 'Add to favourites'}</button>
                    <div>{recipeDataSaved && recipeDataSaved.instructions}</div>
                    <Link href={`/category/${recipeDataSaved.category}`}> Back </Link>    
                </div>
                :
                <div>...errorLoading</div>
            }

        </>
    )
}

export default Recipe;