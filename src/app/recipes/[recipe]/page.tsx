'use client'
import { useUser } from "@/contexts/userContext";
import { IRecipe } from "@/lib/interfaces";
import { getSpecificRecipe } from "@/services/apiMealDb";
import Image from "next/image";
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
            {recipeDataSaved &&
                <div className="flex flex-col items-center justify-center p-10">
                    <div className="w-[600px]">
                    <button className={`cursor-pointer ${user.favRecipes.find(el => el.id === recipeDataSaved!.id) ? 'bg-amber-200' : 'bg-amber-500'}`} onClick={handleClick}>{user.favRecipes.find(el => el.id === recipeDataSaved!.id) ? 'Remove from favourites' : 'Add to favourites'}</button>
                    <div className="flex flex-col shadow-2xl">
                        <Image className="h-auto"  src={recipeDataSaved.image} width={300} height={100} alt={recipeDataSaved.name} />
                        <p className="p-3">{recipeDataSaved && recipeDataSaved.instructions}</p>
                    </div>
                    <Link className="bg-blue-500" href={`/category/${recipeDataSaved.category}`}> Back </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Recipe;